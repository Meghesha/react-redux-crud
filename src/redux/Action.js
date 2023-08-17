import { toast } from "react-toastify";
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionTypes"
import Axios from 'axios';

export const makeRequest = ()=>{
    return{
        type:MAKE_REQUEST
    }
}

export const failRequest = (err)=>{
    return{
        type:FAIL_REQUEST,
        payload : err
    }
}

export const getUserList = (data)=>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
}

export const deleteUser = ()=>{
    return{
        type:DELETE_USER
    }
}

export const addUser = ()=>{
    return{
        type:ADD_USER
    }
}

export const upadateUser = ()=>{
    return{
        type:UPDATE_USER
    }
}

export const getUserObj = (data)=>{
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}

export const fetchUserList = ()=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        Axios.get('http://localhost:8000/user').then(res=>{
            const userList = res.data;
            dispatch(getUserList(userList));
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const removeUser = (code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        Axios.delete('http://localhost:8000/user/'+code).then(res=>{
            dispatch(deleteUser());
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const functionAddUser = (data)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        Axios.post('http://localhost:8000/user',data).then(res=>{
            dispatch(addUser());
            toast.success('User Added Successfully');
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const functionUpdateUser = (data, code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        Axios.put('http://localhost:8000/user/'+code,data).then(res=>{
            dispatch(upadateUser());
            toast.success('User updated Successfully');
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const fetchUserObj = (code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        Axios.get('http://localhost:8000/user/'+code).then(res=>{
            const userList = res.data;
            dispatch(getUserObj(userList));
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}