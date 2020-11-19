import React from 'react';
import '../../Form.css';
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';

class Loginbtn extends React.Component {

    render() {
        const userJWT = sessionStorage.getItem('login-token');
        const userName = sessionStorage.getItem('userName');
        return <div className="billcontainer__login">
                    { userJWT ? <h6>Welcome <span>{`${userName}`}</span></h6> : <h6>Returning customer?<Link to="/sign-in"><span>  Login</span></Link></h6>}
               </div>
    }
}

export default Loginbtn;

