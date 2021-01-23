import React from 'react';
import '../../Form.scss';
import { Link } from 'react-router-dom';
class Loginbtn extends React.Component {
    
    render() {
        const userJWT = sessionStorage.getItem('login-token');
        const userName = sessionStorage.getItem('userName');
        return <div className="billcontainer__login">
                    { userJWT ? <h6>Welcome <span>{`${userName}`}</span></h6> 
                    : 
                    <Link to="/sign-in">
                        <h6>Returning customer?
                            <span className="billcontainer__login--redirect">  Login</span>
                        </h6>
                    </Link>}
               </div>
    }
}

export default Loginbtn;

