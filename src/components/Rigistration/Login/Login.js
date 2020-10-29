import React from 'react';
import '../Registration.css';
import facebook from '../../../images/facebook_icon.svg';
import wechat from '../../../images/wechat_icon.svg';
import google from '../../../images/google_icon.svg';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {isClicked: false};
    }

    // selectWrapper = (props) => {
    //     if(this.state.isClicked){
    //         return(<div className={!this.props.SignupClicked ? "Login__asksignup sidewrapper-right" : "Login__asksignup sidewrapper-left"}>
    //         </div>)
    //     }
    //     else{
    //         return (<div className="Login__asksignup"></div>)
    //     }
    // }

    toggleLogin = (props) => {
        if(!this.props.SignupClicked){
            return(
                <div className="Login__login--logincontainer move-left">
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
            )
        }
        else{
            return (
                <div className="Login__login--registercontainer move-right">
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
            )
        }
    }

    handleRegister = () => {
        this.props.switchLogin();
        this.setState({isClicked: true});
        // this.selectWrapper();
    }


    render(){
        return <div className="Rigistration">
                    <div className="Login">
                        <div className={this.props.SignupClicked ? "Login__signincontainer signin-right": "Login__signincontainer signin-left"}>
                            <div className="Login__signincontainer--textwrapper">
                                <h1>One of Us?</h1>
                                <h4>If you already have an account, just sign in. Welcome Back!</h4>
                                <button onClick={this.handleRegister}>Sign In</button>
                            </div>
                        </div>

                        <div className="Login__login">
                            <this.toggleLogin />
                        </div>

                        <div className={!this.props.SignupClicked ? "Login__asksignup sidewrapper-right" : "Login__asksignup sidewrapper-left"}>
                        </div>

                        <div className={this.props.SignupClicked ? "Login__signupcontainer signup-right": "Login__signupcontainer signup-left"}>
                            <div className="Login__signupcontainer--textwrapper">
                                <h1>New Customer?</h1>
                                <h4>Sign up and enjoy a great amount of fresh pizzas!</h4>
                                <button onClick={this.handleRegister}>Sign Up</button>
                            </div>
                    </div>
                    </div>   
               </div>
    }
}

export default Login;

