import React from 'react';
import '../../Form.css';
class Loginbtn extends React.Component {

    handleClick = () => {
        this.props.history.push('sign-in');
    }

    render() {
        const userJWT = sessionStorage.getItem('login-token');
        const userName = sessionStorage.getItem('userName');
        return <div className="billcontainer__login">
                    { userJWT ? <h6>Welcome <span>{`${userName}`}</span></h6> : <h6>Returning customer?<span className="billcontainer__login--redirect" onClick={this.handleClick}>  Login</span></h6>}
               </div>
    }
}

export default Loginbtn;

