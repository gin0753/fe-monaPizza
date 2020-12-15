import React from 'react';
import '../SignIn.css';
import facebook from '../../../images/facebook_icon.svg';
import wechat from '../../../images/wechat_icon.svg';
import google from '../../../images/google_icon.svg';
import { userRegistration, userLogin, googleLogin } from '../../../api/index';
import GoogleLogin from 'react-google-login';
import Lottie from 'react-lottie'
import {FaTimes, FaCheck, FaEye} from 'react-icons/fa';
import {HashLoader} from 'react-spinners'
import * as success from '../../../../src/success.json'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isClicked: false,
            isRegistered: false,
            isLogin: false,
            isLoading: false,
            userExists: false,
            isAuthenticated: ' ',
            checkUsername: '',
            checkSurname: '',
            checkEmail: '',
            checkPassword: '',
            confirmPassword: '',
            pageSwitch: false,
            checkIcon: null,
            isVisible: false,
            readTerm: false,
            oneLowerCase: false,
            oneUpperCase: false,
            oneNumber: false,
            eightDigits: false,
            UserName: '',
            SurName: '',
            Email: '',
            Password: ''
        };

        this.namePattern = /^[A-Za-z]+$/;
        this.passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        this.emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        this.username = React.createRef();
        this.surname = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.form = React.createRef();
        this.loginEmail = React.createRef();
        this.loginPassword = React.createRef();
        this.confirmPassword = React.createRef();
    }

    checkUsername = () =>{
        const userValue = this.username.current.value;
        if(userValue === '' ){
            this.setState({checkUsername: ''});
        }
        else{
            this.setState({checkUsername: 'Green'});
        }
    }

    checkSurname = () =>{
        const surnameValue = this.surname.current.value;
        if(surnameValue === '' ){
            this.setState({checkSurname: ''});
        }
        else if(surnameValue.match(this.namePattern)){
            this.setState({checkSurname: 'Green'});
        }
        else{
            this.setState({checkSurname: 'Red'});
        }
    }

    checkEmail = (email) =>{
        const emailValue = email;
        if(emailValue === '' ){
            this.setState({checkEmail: ''});
        }
        else if(emailValue.match(this.emailPattern)){
            this.setState({checkEmail: 'Green'});
        }
        else{
            this.setState({checkEmail: 'Red'});
        }
    }
    
    checkPassword = (password) => {
        const passwordValue = password;
        if(passwordValue === '' ){
            this.setState({checkPassword: ''});
        }
        else if(passwordValue.length > 8 && passwordValue.length < 25 && passwordValue.match(this.passwordPattern)){
            this.setState({checkPassword: 'Green'});
        }
        else{
            this.setState({checkPassword: 'Red'});
        }
    }

    verifyPassword = (password) => {
        const passwordValue = password;
        if(passwordValue === '' ){
            this.setState({confirmPassword: ''});
        }
        else if(passwordValue.length > 8 && passwordValue.length < 25 && passwordValue.match(this.passwordPattern)
        && passwordValue === this.loginPassword.current.value){
            this.setState({confirmPassword: 'Green'});
        }
        else{
            this.setState({confirmPassword: 'Red'});
        }
    }

    checkPattern = () => {
        const passwordValue = this.password.current.value;
        if(passwordValue.match(/(?=.*\d)/)){
            this.setState({oneNumber: true});
        }
        else{
            this.setState({oneNumber: false});
        }
        if(passwordValue.match(/(?=.*[a-z])/)){
            this.setState({oneLowerCase: true});
        }
        else{
            this.setState({oneLowerCase: false});
        }
        if(passwordValue.match(/(?=.*[A-Z])/)){
            this.setState({oneUpperCase: true});
        }
        else{
            this.setState({oneUpperCase: false});
        }
        if(passwordValue.match(/.{8,}/)){
            this.setState({eightDigits: true});
        }
        else{
            this.setState({eightDigits: false});
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });

        this.checkUsername();
        this.checkSurname();
        this.checkEmail(this.email.current.value);
        this.checkPassword(this.password.current.value);
        this.checkPattern();
    }

    loginChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });

        this.checkEmail(this.loginEmail.current.value);
        this.checkPassword(this.loginPassword.current.value);
        this.verifyPassword(this.confirmPassword.current.value);
    }

    handleSwitch = async () => {
        await new Promise((resolve) => {    
            this.setState({isLoading: true});
            resolve();
        }); 

        await new Promise((resolve)=>setTimeout(() => {
            this.setState({isLoading: false});
            resolve();
        }, 2000)); 

        await new Promise((resolve)=> {
            const { history } = this.props;
            history.replace('/shopping-cart');
            this.setState({
                pageSwitch: !this.state.pageSwitch
            })
            resolve();
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
        if(this.state.checkEmail === 'Green' && this.state.checkPassword === 'Green'){
            try{
                const response = await userRegistration(RegisterInfo);
                if(response.status === 201){
                    await this.setState({isRegistered: true,
                                         userExists: false });
                }
            } catch (err) {
                console.log(err);
                await this.setState({userExists: true});
            }
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const LoginInfo = {
            Email: this.state.Email,
            Password: this.state.Password,
        }

        if(this.state.checkEmail === 'Green' && this.state.checkPassword === 'Green' && this.state.confirmPassword === 'Green'){
            try{
                const response = await userLogin(LoginInfo);
                if(response.status === 200){
                    this.setState({
                        isLogin: true,
                        isAuthenticated: true
                    });
                    const {id, username, role} = response.data;
                    sessionStorage.setItem('login-token', response.data.token);
                    sessionStorage.setItem('userID', id);
                    sessionStorage.setItem('role', role);
                    sessionStorage.setItem('userName', username);
                    this.handleSwitch();
                }
                else{
                    sessionStorage.setItem('login-token', null);
                    this.setState({
                        isAuthenticated: false
                    });
                }
            } catch (err) {
                console.log(err);
                sessionStorage.setItem('login-token', null);
                this.setState({
                    isAuthenticated: false
                });
            }
        }
    }

    responseGoogle = async (res) => {
        let { googleId, profileObj} = res;
        let { email, name } = profileObj;
        let { givenName } = name;

        const googleInfo = {
            isVerified: true,
            GoogleID: googleId,
            UserName: name,
            SurName: givenName,
            Email: email,
            Password: '123456Abc'
        };
        
        try{
            const response = await googleLogin(googleInfo);
            if(response.status === 200 || response.status === 201){
                const {_id, UserName, role} = response.data;
                sessionStorage.setItem('login-token', response.data.token);
                sessionStorage.setItem('userID', _id);
                sessionStorage.setItem('role', role);
                sessionStorage.setItem('userName', UserName);
                await this.setState({isAuthenticated: true});
                this.handleSwitch();
            }
            else{
                sessionStorage.setItem('login-token', null);
                await this.setState({isAuthenticated: false});
            }
        } catch (err) {
            console.log(err);
            sessionStorage.setItem('login-token', null);
        }
    }

    handleRegister = () => {
        this.props.switchLogin();
        this.setState({
            isClicked: true,
            readTerm: false,
            isRegistered: false,
            checkEmail: '',
            checkUsername: '',
            checkSurname: '',
            checkPassword: '',
            confirmPassword: ''
        });
        this.form.current.reset();
    }

    visibility = () => {
        this.setState({isVisible: !this.state.isVisible});
    }

    checkTerm = () => {
        this.setState({readTerm: !this.state.readTerm});
    }

    toggleLogin = (props) => {
        const {checkEmail, checkPassword, confirmPassword, checkUsername, checkSurname} = this.state;
        const defaultOptions = {
            loop: false,
            autoplay: true, 
            animationData: success.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        if(!this.props.SignupClicked){
            return(
                <div className="Login__login container-left">
                    <div className="Login__login--logincontainer move-left">
                        <h1>Login to Your Account</h1>
                        <h5>Login using social networks</h5>
                        <div className="Login__login--logincontainer--social">
                            <i><a href="/"><img src={facebook} alt="facebook_icon"/></a></i>
                            <GoogleLogin
                                clientId="124030455752-ctj88mk1vjbueamnf47fcjsp5p4ugpqn.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                render={renderProps =>(
                                    <i><a href="/" onClick={renderProps.onClick}><img src={google} alt="google_icon"/></a></i>
                                )}
                            />
                            <i><a href="/"><img src={wechat} alt="wechat_icon"/></a></i>
                        </div>
                        <div className="Login__login--logincontainer--titlewrapper">
                            <span>OR</span>
                        </div>
                        <form ref={this.form} onSubmit={this.handleSubmit}>
                            <div className="withIcon">
                                <input ref={this.loginEmail} className={checkEmail} type="text" name="Email" placeholder="Email*" onChange={this.loginChange}/>
                                {checkEmail === 'Green' && <i className={checkEmail}><FaCheck /></i>}
                                {checkEmail === 'Red' && <i className={checkEmail}><FaTimes /></i>}
                                {checkEmail === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={this.loginPassword} className={checkPassword} type="password" name="Password" placeholder="Password*" onChange={this.loginChange}/>
                                {checkPassword === 'Green' && <i className={checkPassword}><FaCheck /></i>}
                                {checkPassword === 'Red' && <i className={checkPassword}><FaTimes /></i>}
                                {checkPassword === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={this.confirmPassword} className={confirmPassword} type="password" name="confirmPassword" placeholder="Confirm Login*" onChange={this.loginChange}/>
                                {confirmPassword === 'Green' && <i className={confirmPassword}><FaCheck /></i>}
                                {confirmPassword === 'Red' && <i className={confirmPassword}><FaTimes /></i>}
                                {confirmPassword === '' && <i></i>}
                            </div>
                            {
                                !this.state.isAuthenticated ? <div style={{color: "#d94f2b"}}>Invalid Account or Password</div> : <div></div>
                            }
                            {this.state.isLoading ? <span className="loading"><HashLoader loading size={48} color={"#d94f2b"}/></span> 
                            : <button>Sign In</button>}
                        </form>
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
                        <div className="Login__login--registercontainer--social">
                            <i><a href="/"><img src={facebook} alt="facebook_icon"/></a></i>
                            <i><a href="/"><img src={google} alt="google_icon"/></a></i>
                            <i><a href="/"><img src={wechat} alt="wechat_icon"/></a></i>
                        </div>
                        <div className="Login__login--registercontainer--titlewrapper">
                            <span>OR</span>
                        </div>
                        <form  ref={this.form}>
                            <div className="withIcon">
                                <input ref={this.username} className={checkUsername} type="text" id="username" name="Username" placeholder="Username*" onChange={this.handleChange}/>
                                {checkUsername === 'Green' && <i className={checkUsername}><FaCheck /></i>}
                                {checkUsername === 'Red' && <i className={checkUsername}><FaTimes /></i>}
                                {checkUsername === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={this.surname} className={checkSurname} type="text" id="surname" name="Surname" placeholder="Surname" onChange={this.handleChange}/>
                                {checkSurname === 'Green' && <i className={checkSurname}><FaCheck /></i>}
                                {checkSurname === 'Red' && <i className={checkSurname}><FaTimes /></i>}
                                {checkSurname === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={this.email} className={checkEmail} type="text" id="email" name="Email" placeholder="Email*" onChange={this.handleChange}/>
                                {checkEmail === 'Green' && <i className={checkEmail}><FaCheck /></i>}
                                {checkEmail === 'Red' && <i className={checkEmail}><FaTimes /></i>}
                                {checkEmail === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={this.password} className={checkPassword} type={this.state.isVisible ? "text" : "password"} id="password" name="Password" placeholder="Password*" onChange={this.handleChange}/>
                                {checkPassword === 'Green' && <i id="visibility3" className={checkPassword} onClick={this.visibility}><FaEye /></i>}
                                {checkPassword === 'Red' && <i id="visibility3" className={checkPassword} onClick={this.visibility}><FaEye /></i>}
                                {checkPassword === '' && <i id="visibility3" onClick={this.visibility}><FaEye /></i>}
                            </div>
                            <div className="passwordRules">
                                <h3>Password <span>must</span> contain at least:</h3>
                                <div className="passwordRules--ruleWrapper">
                                    {this.state.oneLowerCase ? <FaCheck style={{color:"#1FC36A"}}/> : <FaTimes />} 
                                    {this.state.oneLowerCase ? <h5 style={{color:"#1FC36A"}}>One lowercase character</h5> : <h5>One lowercase character</h5>} 
                                    {this.state.oneUpperCase ? <FaCheck style={{color:"#1FC36A"}}/> : <FaTimes />} 
                                    {this.state.oneUpperCase ? <h5 style={{color:"#1FC36A"}}>One uppercase character</h5> : <h5>One uppercase character</h5>} 
                                    {this.state.oneNumber ? <FaCheck style={{color:"#1FC36A"}}/> : <FaTimes />} 
                                    {this.state.oneNumber ? <h5 style={{color:"#1FC36A"}} className="number">One number</h5> : <h5 className="number">One number</h5>} 
                                    {this.state.eightDigits ? <FaCheck style={{color:"#1FC36A"}}/> : <FaTimes />} 
                                    {this.state.eightDigits ? <h5 style={{color:"#1FC36A"}}>8 characters minimum</h5> : <h5>8 characters minimum</h5>} 
                                </div>
                            </div>
                            {
                                this.state.userExists? <span style={{color: "#d94f2b"}}>This Email has already been used!</span> : <span></span>
                            }
                            <div className="readTerm">
                                <input type="checkbox" id="term" name="term" value="term" onChange={this.checkTerm}/>
                                <label>I have read the <a href="/">Term & Conditions</a></label>
                            </div>
                                {this.state.isRegistered && 
                                    <span className="loading">
                                        <Lottie options={defaultOptions} width={60} height={60}/>
                                        <h3>A Verification Link Has Been sent to your Email</h3>
                                    </span>}
                                {!this.state.isRegistered && 
                                    <span className="loading">
                                        <button onClick={this.clickRegister} className={this.state.readTerm ? "" : "btnDisabled"} disabled={this.state.readTerm ? false : true}>Sign Up</button>
                                    </span>}
                        </form>
                    </div>
                </div>
            )
        }
    }

    render(){
        return <div className="Registration">
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

