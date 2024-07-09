
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../fireBase.inti';

const SignUP = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cPassword,setCPassword]=useState('');
    const [error,setError]=useState('');
    const[createUserWithEmailAndPassword, user]= useCreateUserWithEmailAndPassword(auth);
    const Navigate=useNavigate();

    const handleWithEmail=event=>{
        setEmail(event.target.value);
    }
    const handleWithPassword=event=>{
        setPassword(event.target.value);
    }
    const handleWithCPassword=event=>{
        setCPassword(event.target.value);
    }
    if(user){
        Navigate('/Home');
        console.log('ifuoaef')
    }

    const handleWithSubmit=event=>{
        event.preventDefault();
        if(password !== cPassword){
            setError('password both are not same');
            return;
        }
        if(password.length<6){
            setError('At list used 6 character ');
            return;
        }
        createUserWithEmailAndPassword(email,password)
    }

    return (
        <div>
            <div className='form-content'>
            <div>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleWithSubmit}>
                <label className='' htmlFor="email">Email</label>
                <br />
                <input onBlur={handleWithEmail} className='form-group' type="email" name="email" id="" required />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input onBlur={handleWithPassword} className='form-group' type="password" name="password" id="" required />
                <br />
                <label htmlFor="password">Confarm Password</label>
                <br />
                <input onBlur={handleWithCPassword} className='form-group' type="password" name="password" id="" required />
                <br />
                <p style={{color:'red'}}>{
                error}</p>
                <input className='submit-btn' type="submit" value="Sing Up" />
            </form>
            <p>
                Login Ema-jhon ? <Link className='sign-up' to='/Login'> Login an account</Link>
            </p>
            </div>
        </div>
        </div>
    );
};

export default SignUP;

