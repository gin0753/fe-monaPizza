import React from 'react';
import '../../SignIn.scss';
import GoogleLogin from 'react-google-login';
import {HashLoader} from 'react-spinners';
import facebook from 'images/facebook_icon.svg';
import wechat from 'images/wechat_icon.svg';
import google from 'images/google_icon.svg';
import {FaTimes, FaCheck} from 'react-icons/fa';

class LoginForm extends React.Component {

    render() {
        const { checkPassword, confirmPassword, checkEmail, isAuthenticated, isLoading} = this.props.state;
        const { form, loginEmail, loginPassword, confirmPWD} = this.props.reference;
        const { handleSubmit, loginChange } = this.props.funcs;
        return <div className="Login__login container-left">
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
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="withIcon">
                                <input ref={loginEmail} className={checkEmail} type="text" name="Email" placeholder="Email*" onChange={loginChange}/>
                                {checkEmail === 'Green' && <i className={checkEmail}><FaCheck /></i>}
                                {checkEmail === 'Red' && <i className={checkEmail}><FaTimes /></i>}
                                {checkEmail === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={loginPassword} className={checkPassword} type="password" name="Password" placeholder="Password*" onChange={loginChange}/>
                                {checkPassword === 'Green' && <i className={checkPassword}><FaCheck /></i>}
                                {checkPassword === 'Red' && <i className={checkPassword}><FaTimes /></i>}
                                {checkPassword === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={confirmPWD} className={confirmPassword} type="password" name="confirmPassword" placeholder="Confirm Login*" onChange={loginChange}/>
                                {confirmPassword === 'Green' && <i className={confirmPassword}><FaCheck /></i>}
                                {confirmPassword === 'Red' && <i className={confirmPassword}><FaTimes /></i>}
                                {confirmPassword === '' && <i></i>}
                            </div>
                            {
                                !isAuthenticated ? <div style={{color: "#d94f2b"}}>Invalid Account or Password</div> : <div></div>
                            }
                            {
                                isLoading ? <span className="loading"><HashLoader loading size={48} color={"#d94f2b"}/></span> 
                                : <button>Sign In</button>
                            }
                        </form>
                    </div>
                </div>
    }
}

export default LoginForm;

