import React from 'react';
import '../SignIn.css';
import facebook from '../../../images/facebook_icon.svg';
import wechat from '../../../images/wechat_icon.svg';
import google from '../../../images/google_icon.svg';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isClicked: false,
            isLogin: false,
            UserName: '',
            SurName: '',
            Email: '',
            Password: ''
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    clickRegister = async (e) => {
        e.preventDefault();

        const RegisterInfo = {
            UserName: this.state.Username,
            SurName: this.state.Surname,
            Email: this.state.Email,
            Password: this.state.Password
        }

        try{
            const response = await axios.post('/register', RegisterInfo);
            if(response.status === 201){
                console.log(response.data);
            }
            else{
            }
        } catch (err) {
            console.log(err);
        }
    }

    clickSignIn = (e) => {
        e.preventDefault();

        const LoginInfo = {
            Email: this.state.Email,
            Password: this.state.Password,
        }

        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${sessionStorage.getItem('login-token')}`
        //     }
        // }

        const loginRequest = async () => {
            try{
                // console.log(config)
                const response = await axios.post(
                    '/login', 
                    LoginInfo,
                    // config
                    );
                if(response.status === 200){
                    this.setState({
                        isLogin: true
                    });
                    console.log(response);
                    sessionStorage.setItem('login-token', response.data.token);
                }
                else{
                    sessionStorage.setItem('login-token', null);
                }
            } catch (err) {
                console.log(err);
                sessionStorage.setItem('login-token', null);
            }
        }
        
        loginRequest();  
    }
    responseGoogle = async (res) => {

        let { googleId, profileObj, tokenObj } = res;
        let { email, name } = profileObj;
        let { access_token } = tokenObj;
        let { givenName } = name;

        const googleInfo = {
            GoogleID: googleId,
            UserName: name,
            SurName: givenName,
            Email: email,
            Password: access_token
        };
        try{
            const response = await axios.post('/googleLogin', googleInfo);
            if(response.status === 200 || response.status === 201){
                console.log(response);
                sessionStorage.setItem('login-token', response.data.token);
            }
            else{
                sessionStorage.setItem('login-token', null);
            }
        } catch (err){
            console.log(err);
            sessionStorage.setItem('login-token', null);
        }
    }

    toggleLogin = (props) => {
        if(!this.props.SignupClicked){
            return(
                <div className="Login__login container-left">
                    <div className="Login__login--logincontainer move-left">
                        <h1>Login to Your Account</h1>
                        <h5>Login using social networks</h5>
                        <div className="Login__login--logincontainer--social">
                            <i><a><img src={facebook} alt="facebook_icon"/></a></i>
                            <GoogleLogin
                                clientId="124030455752-ctj88mk1vjbueamnf47fcjsp5p4ugpqn.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                render={renderProps =>(
                                    <i><a onClick={renderProps.onClick}><img src={google} alt="google_icon"/></a></i>
                                )}
                            />
                            <i><a><img src={wechat} alt="wechat_icon"/></a></i>
                        </div>
                        <div className="Login__login--logincontainer--titlewrapper">
                            <span>OR</span>
                        </div>
                        <input type="text" name="Email" placeholder="Email" onChange={this.handleChange}/>
                        <input type="password" name="Password" placeholder="Password" onChange={this.handleChange}/>
                        <button onClick={this.clickSignIn}>Sign In</button>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="Login__login container-right">
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
                        <input type="text" id="username" name="Username" placeholder="Username" onChange={this.handleChange}/>
                        <input type="text" id="surname" name="Surname" placeholder="Surname" onChange={this.handleChange}/>
                        <input type="text" id="email" name="Email" placeholder="Email" onChange={this.handleChange}/>
                        <input type="password" id="password" name="Password" placeholder="Password" onChange={this.handleChange}/>
                        <div>
                            <input type="checkbox" id="term" name="term" value="term"/>
                            <label>I have read the <a>Term & Conditions</a></label>
                        </div>
                        <button onClick={this.clickRegister}>Sign Up</button>
                    </div>
                </div>
            )
        }
    }

    handleRegister = () => {
        this.props.switchLogin();
        this.setState({isClicked: true});
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

