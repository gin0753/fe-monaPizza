import React from 'react';
import '../../SignIn.scss';
import facebook from 'images/facebook_icon.svg';
import wechat from 'images/wechat_icon.svg';
import google from 'images/google_icon.svg';
import {FaTimes, FaCheck, FaEye} from 'react-icons/fa';
import Lottie from 'react-lottie';
import * as success from 'success.json';

class SignupForm extends React.Component {

    render() {
        const { checkPassword, checkUsername, checkEmail, checkSurname, isVisible, readTerm,
                oneLowerCase, oneUpperCase, oneNumber, eightDigits, userExists, isRegistered} = this.props.state;
        const { form, username, surname, email, password } = this.props.reference;
        const { handleChange, checkTerm, clickRegister, visibility } = this.props.funcs;
        const defaultOptions = {
            loop: false,
            autoplay: true, 
            animationData: success.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        return <div className="Login__login container-right">
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
                        <form  ref={form}>
                            <div className="withIcon">
                                <input ref={username} className={checkUsername} type="text" id="username" name="Username" placeholder="Username*" onChange={handleChange}/>
                                {checkUsername === 'Green' && <i className={checkUsername}><FaCheck /></i>}
                                {checkUsername === 'Red' && <i className={checkUsername}><FaTimes /></i>}
                                {checkUsername === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={surname} className={checkSurname} type="text" id="surname" name="Surname" placeholder="Surname" onChange={handleChange}/>
                                {checkSurname === 'Green' && <i className={checkSurname}><FaCheck /></i>}
                                {checkSurname === 'Red' && <i className={checkSurname}><FaTimes /></i>}
                                {checkSurname === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={email} className={checkEmail} type="text" id="email" name="Email" placeholder="Email*" onChange={handleChange}/>
                                {checkEmail === 'Green' && <i className={checkEmail}><FaCheck /></i>}
                                {checkEmail === 'Red' && <i className={checkEmail}><FaTimes /></i>}
                                {checkEmail === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={password} className={checkPassword} type={isVisible ? "text" : "password"} id="password" name="Password" placeholder="Password*" onChange={handleChange}/>
                                {checkPassword === 'Green' && <i id="visible" className={checkPassword} onClick={visibility}><FaEye /></i>}
                                {checkPassword === 'Red' && <i id="visible" className={checkPassword} onClick={visibility}><FaEye /></i>}
                                {checkPassword === '' && <i id="visible" onClick={visibility}><FaEye /></i>}
                            </div>
                            <div className="passwordRules">
                                <h3>Password <span>must</span> contain at least:</h3>
                                <div className="passwordRules--ruleWrapper">
                                    {oneLowerCase ? <FaCheck style={{color:"#1FC36A"}}/> : <FaTimes />} 
                                    {oneLowerCase ? <h5 style={{color:"#1FC36A"}}>One lowercase character</h5> : <h5>One lowercase character</h5>} 
                                    {oneUpperCase ? <FaCheck style={{color:"#1FC36A"}}/> : <FaTimes />} 
                                    {oneUpperCase ? <h5 style={{color:"#1FC36A"}}>One uppercase character</h5> : <h5>One uppercase character</h5>} 
                                    {oneNumber ? <FaCheck style={{color:"#1FC36A"}}/> : <FaTimes />} 
                                    {oneNumber ? <h5 style={{color:"#1FC36A"}} className="number">One number</h5> : <h5 className="number">One number</h5>} 
                                    {eightDigits ? <FaCheck style={{color:"#1FC36A"}}/> : <FaTimes />} 
                                    {eightDigits ? <h5 style={{color:"#1FC36A"}}>8 characters minimum</h5> : <h5>8 characters minimum</h5>} 
                                </div>
                            </div>
                            {
                                userExists? <span style={{color: "#d94f2b"}}>This Email has already been used!</span> : <span></span>
                            }
                            <div className="readTerm">
                                <input type="checkbox" id="term" name="term" value="term" onChange={checkTerm}/>
                                <label>I have read the <a href="/">Term & Conditions</a></label>
                            </div>
                                {isRegistered && 
                                    <span className="loading">
                                        <Lottie options={defaultOptions} width={60} height={60}/>
                                        <h3>A Verification Link Has Been sent to your Email</h3>
                                    </span>}
                                {!isRegistered && 
                                    <span className="loading">
                                        <button onClick={clickRegister} className={readTerm ? "" : "btnDisabled"} disabled={readTerm ? false : true}>Sign Up</button>
                                    </span>}
                        </form>
                    </div>
                </div>
    }
}

export default SignupForm;

