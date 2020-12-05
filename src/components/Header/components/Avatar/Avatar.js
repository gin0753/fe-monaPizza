import React, {useState} from 'react';
import '../../Header.css';
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';

function Avatar(props) {

    const [avatar, setAvatar] = useState(false);

    const userJWT = sessionStorage.getItem('login-token');
    

    const handleClick = () => {
        setAvatar(prev => !prev);
    }
    
    const handleSignOut = () => {
        sessionStorage.clear();
        window.location.reload();
    }

    const userRole = sessionStorage.getItem('role');

    return (
        <>
        <div>
            { userJWT ? <i onClick={handleClick}><FaUser color={"#FDBC2C"} size={35}/></i> : <></>}
        </div>
        {avatar && <div className="header__leftWrapper--avatar--userActions">
            <span><Link to="/mydetails">User Profile</Link></span>
            <span><Link to="/change-password">Change Password</Link></span>
<<<<<<< HEAD
=======
            <span className={userRole === 'ROLE.ADMIN' ? "" : "disabled"}><Link to="/manage-pizza">Manage Pizza</Link></span>
>>>>>>> develop
            <span onClick={handleSignOut}>Sign Out</span>
        </div>}
        {!avatar && <></>}
        </>
    );
}

export default Avatar;
