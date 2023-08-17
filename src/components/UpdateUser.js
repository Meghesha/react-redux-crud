import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchUserObj, functionUpdateUser } from '../redux/Action';

const UpdateUser = ()=>{
    const[id, idChange]= useState(0);
    const[name, nameChange] = useState('');
    const[email, emailChange] = useState('');
    const[phone, phoneChange] = useState('');
    const[role, roleChange] = useState('staff');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {code} = useParams();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const userObj = {id,name, email, phone, role};
        dispatch(functionUpdateUser(userObj, id));
        navigate('/user')
        console.log(userObj);
    }

    useEffect(()=>{
        dispatch(fetchUserObj(code))
    },[])


    //Access state value
    const userObj = useSelector((state)=>state.user.userObj)
 
   
    useEffect(() => {
        if(userObj){
            idChange(userObj.id);
            nameChange(userObj.name);
            emailChange(userObj.email);
            phoneChange(userObj.phone);
            roleChange(userObj.role);
        }
    }, [userObj])

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-header" style={{textAlign:'left'}}>
                    <h2>Add User</h2>
                </div>
                <div className="card-body" style={{textAlign:'left'}}>
                    <div className="row">
                    <div className="col-lg-12">
                            <div className="form-group">
                                <label>Id</label>
                                <input type="text" value={id || ''} onChange={e=>idChange(e.target.value)} className="form-control" disabled/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" value={name || ''} onChange={e=>nameChange(e.target.value)} className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" value={email || ''} onChange={e=>emailChange(e.target.value)} className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" value={phone || ''} onChange={e=>phoneChange(e.target.value)} className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Role</label>
                                <select value={role || ''} className='form-control'  onChange={e=>roleChange(e.target.value)}>
                                    <option value="admin">Admin</option>
                                    <option value="staff">Staff</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer" style={{textAlign:'left'}}>
                    <button className="btn btn-primary" type='submit'>Submit</button>
                    <Link className='btn btn-danger' to={'/user'}>Back</Link>
                </div>
            </div>
            </form>
        </React.Fragment>
    )
}

export default UpdateUser;