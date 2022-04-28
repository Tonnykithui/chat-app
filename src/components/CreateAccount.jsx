import React from 'react'
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className='Account'>
        <div className="register">
        <div className="Logo">
            <h2>Create Account</h2>
            <p>Already have an account ? <Link to="/login" className='Link'>Login</Link></p>
        </div>
        <div className="form">
            <form>
                <div className="Name">
                <div className="form-control">
                    <input type="text" placeholder='FirstName'/>
                </div>
                <div className="form-control">
                    <input type="text" placeholder='LastName'/>
                </div>
                </div>
                <div className="passwords">
                    <div className="password">
                        <input type="password" placeholder='Password'/>
                    </div>
                    <div className="c-password">
                        <input type="password" placeholder='Confirm Password'/>
                    </div>
                </div>
                <div className="email">
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="submit-btn">
                    <button>Sign up</button>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default CreateAccount