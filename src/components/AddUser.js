import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { functionAddUser } from '../redux/Action';

const AddUser = ()=>{
    const[name, nameChange] = useState('');
    const[email, emailChange] = useState('');
    const[phone, phoneChange] = useState('');
    const[role, roleChange] = useState('staff');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userObj = {name, email, phone, role};

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(functionAddUser(userObj));
        navigate('/user')
        console.log(userObj);
    }

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
                                <label>Name</label>
                                <input type="text" value={name} onChange={e=>nameChange(e.target.value)} className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" value={email} onChange={e=>emailChange(e.target.value)} className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" value={phone} onChange={e=>phoneChange(e.target.value)} className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Role</label>
                                <select value={role} className='form-control'  onChange={e=>roleChange(e.target.value)}>
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

export default AddUser;