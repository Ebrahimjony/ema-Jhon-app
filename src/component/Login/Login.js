import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../fireBase.inti';

const Login = () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [
        signInWithEmailAndPassword,
        user,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate=useNavigate();
      const location= useLocation();
      const from=location.state.from.pathname || '/';

    const handleLoginEmail=event=>{
        setEmail(event.target.value);
    }
    if(user){
        navigate(from,{replace: true});
    }

    const handleLoginPassword=event=>{
        setPassword(event.target.value);
    }
    const loginSubmit=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    
    
    return (
        <div className='form-content'>
            <div>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={loginSubmit}>
                <label className='' htmlFor="email">Email</label>
                <br />
                <input onBlur={handleLoginEmail} className='form-group' type="email" name="email" id="" required />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input onBlur={handleLoginPassword} className='form-group' type="password" name="password" id="" required />
                <br />
                <p style={{color:'red'}}>
                    {error?.message}
                </p>
                <input className='submit-btn' type="submit" value="Login" />
            </form>
            <p>
                New to Ema-jhon ? <Link className='sign-up' to='/SignUp'> Create an account</Link>
            </p>
            </div>
        </div>
    );
};

export default Login;