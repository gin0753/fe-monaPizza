import React from 'react';
import './Login.css';
import facebook from '../../images/facebook_icon.svg';
import wechat from '../../images/wechat_icon.svg';
import google from '../../images/google_icon.svg';

class Login extends React.Component{
    
    render(){
        return <div className="Login">
                    <div className="Login__login">
                        <div className="Login__login--logincontainer">
                            <h1>Login to Your Account</h1>
                            <h5>Login using social networks</h5>
                            <div className="Login__login--logincontainer--social">
                                <i><a><img src={facebook} alt="facebook_icon"/></a></i>
                                <i><a><img src={google} alt="google_icon"/></a></i>
                                <i><a><img src={wechat} alt="wechat_icon"/></a></i>
                            </div>
                            <div className="Login__login--titlewrapper">
                                <span>OR</span>
                            </div>
                            <input type="text" id="username" name="username" placeholder="Email"/>
                            <input type="text" id="password" name="password" placeholder="Password"/>
                            <button>Sign In</button>
                        </div>
                    </div>
                    
                    <div className="Login__asksignup">
                    
                    </div>
               </div>   
    }
}

export default Login;

