import React from 'react';
import '../../Form.css';
import { Link } from 'react-router-dom';

class Loginbtn extends React.Component {

    render() {
        return <div className="billcontainer__login">
            <h6>Returning customer?<Link to="/sign-in"><span>  Login</span></Link></h6>
        </div>
    }
}

export default Loginbtn;

