import React from 'react';
import '../Registration.css';
import facebook from '../../../images/facebook_icon.svg';
import wechat from '../../../images/wechat_icon.svg';
import google from '../../../images/google_icon.svg';

class Login extends React.Component{
    
    render(){
        return <div className="Rigistration">
                    <div className="Login">
                        <div className="Login__login">
                            <div className="Login__login--logincontainer">
                                <h1>Login to Your Account</h1>
                                <h5>Login using social networks</h5>
                                <div className="Login__login--logincontainer--social">
                                    <i><a><img src={facebook} alt="facebook_icon"/></a></i>
                                    <i><a><img src={google} alt="google_icon"/></a></i>
                                    <i><a><img src={wechat} alt="wechat_icon"/></a></i>
                                </div>
                                <div className="Login__login--logincontainer--titlewrapper">
                                    <span>OR</span>
                                </div>
                                <input type="text" id="username" name="username" placeholder="Email"/>
                                <input type="password" id="password" name="password" placeholder="Password"/>
                                <button>Sign In</button>
                            </div>
                            <div className="Login__login--registercontainer d-none">
                                <h1>Create Free Account</h1>
                                <h5>Sign up using social networks</h5>
                                <div className="Login__login--logincontainer--social">
                                    <i><a><img src={facebook} alt="facebook_icon"/></a></i>
                                    <i><a><img src={google} alt="google_icon"/></a></i>
                                    <i><a><img src={wechat} alt="wechat_icon"/></a></i>
                                </div>
                                <div className="Login__login--registercontainer--titlewrapper">
                                    <span>OR</span>
                                </div>
                                <input type="text" id="username" name="username" placeholder="Username"/>
                                <input type="text" id="surname" name="surname" placeholder="Surname"/>
                                <input type="text" id="email" name="email" placeholder="Email"/>
                                <input type="password" id="password" name="password" placeholder="Password"/>
                                <input type="checkbox" id="term" name="term" value="term"/>
                                <label>I have read the <a>Term & Conditions</a></label>
                                <button>Sign In</button>
                            </div>
                        </div>
                        
                        <div className="Login__asksignup">
                            <div className="Login__asksignup--signupcontainer">
                                <h1>New Customer?</h1>
                                <h4>Sign up and enjoy a great amount of fresh pizzas!</h4>
                                <button>Sign Up</button>
                            </div>
                            <div className="Login__asksignup--signincontainer d-none">
                                <h1>One of Us?</h1>
                                <h4>If you already have an account, just sign in. Welcome back!</h4>
                                <button>Sign In</button>
                            </div>
                        </div>
                    </div>   
               </div>
    }
}

export default Login;

