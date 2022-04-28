import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Login = ({ joinRoom }) => {

    const [name, setName] = useState("");
    const [group, setGroup] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        joinRoom(name, group);

    }

  return (
    <div className='Account'>
        <div className="login">
        <div className="Logo">
            <h2>Login</h2>
            <p>Do not have an account ? <Link to="/register" className='Link'>Register</Link></p>
        </div>
        <div className='form-2'>
        <form onSubmit={handleSubmit}>
            <div className="Name">
                <input type="text" name="" placeholder='Name'
                value={name} onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="email">
                <input type="text" name="" placeholder='Group'
                value={group} onChange={e => setGroup(e.target.value)}
                />
            </div>
            <div className="submit-btn">
                <button type='submit'>Login</button>
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Login