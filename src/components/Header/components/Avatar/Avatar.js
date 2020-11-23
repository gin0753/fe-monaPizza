import React, {useState} from 'react';
import '../../Header.css';
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';

function Avatar() {

    const [avatar, setAvatar] = useState(false);

    const userJWT = sessionStorage.getItem('login-token');
    

    const handleClick = () => {
        setAvatar(prev => !prev);
    }
    
    const handleSignOut = () => {
        sessionStorage.clear();
        window.location.reload();
    }

    return (
        <>
        <div>
            { userJWT ? <i onClick={handleClick}><FaUser color={"#FDBC2C"} size={35}/></i> : <></>}
        </div>
        {avatar && <div className="header__leftWrapper--avatar--userActions">
            <span><Link to="/manage-account">User Profile</Link></span>
            <span onClick={handleSignOut}>Sign Out</span>
        </div>}
        {!avatar && <></>}
        </>
    );
}

export default Avatar;
