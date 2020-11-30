import React from 'react';
import './changePassword.css';
import UserBar from '../../../components/UserBar/UserBar/UserBar';
import {FaTimes, FaCheck, FaEye, FaEyeSlash} from 'react-icons/fa';

class changePassword extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            oneLowerCase: false,
            oneUpperCase: false,
            oneNumber: false,
            eightDigits: false,
            cpIsVisible: false,
            npIsVisible: false,
            currentPassword: '',
            newPassword: ''
        };

        this.passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        this.newPassword = React.createRef();
        this.currentPassword = React.createRef();
    }

    checkCurrentPassword = (password) => {
        const passwordValue = password;
        if(passwordValue === '' ){
            this.setState({currentPassword: ''});
        }
        else if(passwordValue.length > 8 && passwordValue.length < 25 && passwordValue.match(this.passwordPattern)){
            this.setState({currentPassword: 'Green'});
        }
        else{
            this.setState({currentPassword: 'Red'});
        }
    }

    checkNewPassword = (password) => {
        const passwordValue = password;
        if(passwordValue === '' ){
            this.setState({newPassword: ''});
        }
        else if(passwordValue.length > 8 && passwordValue.length < 25 && passwordValue.match(this.passwordPattern)){
            this.setState({newPassword: 'Green'});
        }
        else{
            this.setState({newPassword: 'Red'});
        }
    }

    checkPattern = () => {
        const passwordValue = this.newPassword.current.value;
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
        this.checkCurrentPassword(this.currentPassword.current.value);
        this.checkNewPassword(this.newPassword.current.value);
        this.checkPattern();
    }

    currentPasswordvisibility = () => {
        this.setState({
            cpIsVisible: !this.state.cpIsVisible
        })
    }

    newPasswordvisibility = () => {
        this.setState({
            npIsVisible: !this.state.npIsVisible
        })
    }
        
    render() {
        const {newPassword, currentPassword} = this.state;
        return (
            <div className="dashboard__changePassword">
                <UserBar />
                <section>
                    <h3>Your Password</h3>
                    <div className="withIcon">
                        <label>Current Password</label>
                        <input ref={this.currentPassword} className={currentPassword} type={this.state.cpIsVisible ? "text" : "password"} 
                        id="currentPassword" name="currentPassword" placeholder="1234567" onChange={this.handleChange}/>
                        <div className="iconField" onClick={this.currentPasswordvisibility}></div>
                        {currentPassword === 'Green' && <span className="green"><FaCheck /></span>}
                        {currentPassword === 'Red' && <span className="red"><FaTimes /></span>}
                        {currentPassword === '' && <></>}
                        {currentPassword === 'Green' && <i onClick={this.currentPasswordvisibility}>
                        {this.state.cpIsVisible ? <FaEyeSlash /> : <FaEye />}</i>}
                        {currentPassword === 'Red' && <i onClick={this.currentPasswordvisibility}>
                        {this.state.cpIsVisible ? <FaEyeSlash /> : <FaEye />}</i>}
                        {currentPassword === '' && <i onClick={this.currentPasswordvisibility}>
                        {this.state.cpIsVisible ? <FaEyeSlash /> : <FaEye />}</i>}
                    </div>
                    <div className="withIcon">
                        <label>New Password</label>
                        <input ref={this.newPassword} className={newPassword} type={this.state.npIsVisible ? "text" : "password"} 
                        id="newPassword" name="newPassword" placeholder="1234567" onChange={this.handleChange}/>
                        <div className="iconField" onClick={this.newPasswordvisibility}></div>
                        {newPassword === 'Green' && <i onClick={this.newPasswordvisibility}>
                        {this.state.npIsVisible ? <FaEyeSlash /> : <FaEye />}</i>}
                        {newPassword === 'Red' && <i onClick={this.newPasswordvisibility}>
                        {this.state.npIsVisible ? <FaEyeSlash /> : <FaEye />}</i>}
                        {newPassword === '' && <i onClick={this.newPasswordvisibility}>
                        {this.state.npIsVisible ? <FaEyeSlash /> : <FaEye />}</i>}
                    </div>

                    <div className="dashboard__changePassword--passwordRules">
                    <h4>Password <span>must</span> contain at least:</h4>
                    <div className="dashboard__changePassword--passwordRules--ruleWrapper">
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
                </section>
            </div>
        );
    }
}

export default changePassword;