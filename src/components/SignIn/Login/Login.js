import React from 'react';
import '../SignIn.scss';
import facebook from '../../../images/facebook_icon.svg';
import wechat from '../../../images/wechat_icon.svg';
import google from '../../../images/google_icon.svg';
import { userRegistration, userLogin, googleLogin } from '../../../api/index';
import Lottie from 'react-lottie';
import {FaTimes, FaCheck, FaEye} from 'react-icons/fa';
import * as success from '../../../../src/success.json';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

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
        const reference = {
            form: this.form,
            loginEmail: this.loginEmail,
            loginPassword: this.loginPassword,
            confirmPWD: this.confirmPassword,
            username: this.username,
            surname: this.surname,
            email: this.email,
            password: this.password
        }
        const funcs = {
            handleSubmit: this.handleSubmit,
            loginChange: this.loginChange,
            checkTerm: this.checkTerm,
            clickRegister: this.clickRegister,
            visibility: this.visibility,
            handleChange: this.handleChange
        }
        if(!this.props.SignupClicked){
            return(
               <LoginForm state={this.state} reference={reference} funcs={funcs}/>
            )
        }
        else{
            return (
               <SignupForm state={this.state} reference={reference} funcs={funcs}/>
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

