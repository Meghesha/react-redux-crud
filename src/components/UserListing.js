import React, { useEffect } from 'react';
import { fetchUserList, removeUser } from '../redux/Action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserListing = (props)=>{
    useEffect(()=>{
        props.loadUser();
    },[])

    const handleDelete = (code)=>{
        if(window.confirm('Do you want to remove?')){
            props.removeUser(code);
            props.loadUser();
            toast.success('User removed Successfully');
        }
    }
    
    return(
        props.user.loading ? <div><h2>loading...</h2></div> :
        props.user.errorMessage ? <div><h2>{props.user.errorMessage}</h2></div> :
        <React.Fragment>
            <div className="card">
                <div className="card-header">
                    <Link to={'/user/add'} className='btn btn-success'>Add User[+]</Link>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.user.userList && props.user.userList.map(item=>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <Link to={'/user/edit/' + item.id} className='btn btn-primary'>Edit</Link>
                                            <button onClick={() => { handleDelete(item.id) }} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state)=>{
    return{
        user:state.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        loadUser : ()=>dispatch(fetchUserList()),
        removeUser : (code)=>dispatch(removeUser(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserListing);