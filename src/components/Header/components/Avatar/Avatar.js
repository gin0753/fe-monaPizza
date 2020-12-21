import React, { useState } from 'react';
import '../../Header.css';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Avatar(props) {
  const [avatar, setAvatar] = useState(false);

  const userJWT = sessionStorage.getItem('login-token');

  const handleClick = () => {
    setAvatar((prev) => !prev);
  };

  const handleSignOut = () => {
    sessionStorage.clear();
  };

  const userRole = sessionStorage.getItem('role');

  return (
    <>
      <div>
        { userJWT ? <i onClick={handleClick}><FaUser color="#FDBC2C" size={35} /></i> : <></>}
      </div>
      {avatar && (
      <div className="header__leftWrapper--avatar--userActions">
        <span onClick={handleClick}><Link to="/mydetails">User Profile</Link></span>
        <span onClick={handleClick}><Link to="/change-password">Change Password</Link></span>
        <span onClick={handleClick}><Link to="/order-history">Order History</Link></span>
        <span className={userRole === 'ROLE.ADMIN' ? '' : 'd-none'} onClick={handleClick}><Link to="/manage-pizza">Manage Pizza</Link></span>
        <span className={userRole === 'ROLE.ADMIN' ? '' : 'd-none'} onClick={handleClick}><Link to="/view-order">View Order</Link></span>
        <span onClick={handleSignOut}><Link to="/index.html">Sign Out</Link></span>
      </div>
      )}
      {!avatar && <></>}
    </>
  );
}

export default Avatar;
