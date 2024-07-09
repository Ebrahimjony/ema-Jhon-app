import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='hader'>
            <img src={logo} alt="" />
            <div>
            <Link to="/Home">Home</Link>
            <Link to="/Order">Order</Link>
            <Link to="/ManageEnventory">Manage Enventory</Link>
            <Link to="/Login"> Login</Link>
            </div>
            <Link to='/SignUP'></Link>

        </nav>
    )
};

export default Header;