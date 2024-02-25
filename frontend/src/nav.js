import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import './App.css'
const Nav=()=> {
  const auth=localStorage.getItem('user');
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      
      {auth ? <ul className='nav'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/Addproduct">Add Products</Link></li>
        <li><Link to="/updateproduct">Update product </Link></li>
        <li><Link onClick={logout} to="/signup">Logout</Link></li>
 </ul>
:<ul className='nav2 '>
     <li><Link to="/Signup">Signup</Link></li>
     <li><Link to="/login">Login</Link></li>
     </ul>
  } 
    </div>
  );
}

export default Nav;
