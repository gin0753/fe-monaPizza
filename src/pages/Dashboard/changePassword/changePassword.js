import React from 'react';
import '../Dashboard.scss';
import UserBar from 'components/UserBar/UserBar/UserBar';
import CrumbHeader from "components/CrumbHeader";
import {FaTimes, FaCheck, FaEye, FaEyeSlash} from 'react-icons/fa';
import { findUserInfo, updateUserInfo } from 'api/index';
import { Password } from 'utils/index';
class changePassword extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userId: sessionStorage.getItem('userID'),
            oneLowerCase: false,
            oneUpperCase: false,
            oneNumber: false,
            eightDigits: false,
            cpIsVisible: false,
            npIsVisible: false,
            cnpIsVisible: false,
            validPassword: false,
            isUpdated: false,
            incorrectPassword: false,
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        };

        this.passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        this.newPassword = React.createRef();
        this.confirmPassword = React.createRef();
        this.currentPassword = React.createRef();
    }

    handleChange = async (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });

        Password.checkPassword(this.currentPassword.current.value, this, 'currentPassword', this.passwordPattern);
        Password.checkPassword(this.newPassword.current.value, this, 'newPassword', this.passwordPattern);
        Password.confirmPassword(this.confirmPassword.current.value, this, 'confirmPassword', this.newPassword.current.value);
        Password.checkPattern(this.newPassword.current.value, this);

        if(this.state.currentPassword === "Green" && this.state.newPassword === "Green"){
            this.setState({
                validPassword: true
            })
        }
        else{
            this.setState({
                validPassword: false
            })
        }
    }

    handleClick = async() => {
        const currentPassword = this.currentPassword.current.value;
        try{
            const findUser = await findUserInfo(this.state.userId, currentPassword);
            if(findUser.status === 200){
                this.setState({incorrectPassword:false});
                const Password = this.newPassword.current.value;
                try{
                    const updatePassword = await updateUserInfo(this.state.userId, Password);
                    if(updatePassword.status === 200){
                        await new Promise((resolve) => {    
                            this.setState({isUpdated: true});
                            resolve();
                        }); 
                
                        await new Promise((resolve)=>setTimeout(() => {
                            this.setState({isUpdated: false});
                            resolve();
                        }, 3000)); 
                    }
                }
                catch(err){
                    console.log(err);
                }
            }
        }
        catch(err){
            await new Promise((resolve) => {    
                this.setState({incorrectPassword: true});
                resolve();
            }); 
    
            await new Promise((resolve)=>setTimeout(() => {
                this.setState({incorrectPassword: false});
                resolve();
            }, 3000)); 
        }
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

    confirmPasswordVisibility = () => {
        this.setState({
            cnpIsVisible: !this.state.cnpIsVisible
        })
    }
        
    render() {
        const {newPassword, currentPassword, validPassword, incorrectPassword, isUpdated, confirmPassword} = this.state;
        return (
            <div className="dashboard">
                <CrumbHeader thisPage='Change Password' path='/change-password'/>
                <div className="dashboard__userBar">
                    <UserBar props={this.props}/>
                </div>
                <div className="dashboard__changePassword">
                    <section>
                        <h3>Your Password</h3>
                        <hr />
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

                            {!incorrectPassword ? <></>:<div className="dashboard__changePassword--incorrect">Incorrect Password</div>}
                        </div>

                        <div className="withIcon">
                            <label>New Password</label>
                            <input ref={this.newPassword} className={newPassword} type={this.state.npIsVisible ? "text" : "password"} 
                            id="newPassword" name="newPassword" placeholder="1234567" onChange={this.handleChange}/>
                            <div className="iconField" onClick={this.newPasswordvisibility}></div>
                            {newPassword === 'Green' && <span className="green"><FaCheck /></span>}
                            {newPassword === 'Red' && <span className="red"><FaTimes /></span>}
                            {newPassword === '' && <></>}
                            {newPassword === 'Green' && <i onClick={this.newPasswordvisibility}>
                            {this.state.npIsVisible ? <FaEyeSlash /> : <FaEye />}</i>}
                            {newPassword === 'Red' && <i onClick={this.newPasswordvisibility}>
                            {this.state.npIsVisible ? <FaEyeSlash /> : <FaEye />}</i>}
                            {newPassword === '' && <i onClick={this.newPasswordvisibility}>
                            {this.state.npIsVisible ? <FaEyeSlash /> : <FaEye />}</i>}
                        </div>

                        <div className="withIcon">
                            <label>Confirm Password</label>
                            <input ref={this.confirmPassword} className={confirmPassword} type={this.state.cnpIsVisible ? "text" : "password"} 
                            id="confirmPassword" name="confirmPassword" placeholder="1234567" onChange={this.handleChange}/>
                            <div className="iconField" onClick={this.confirmPasswordVisibility}></div>
                            {confirmPassword === 'Green' && <span className="green"><FaCheck /></span>}
                            {confirmPassword === 'Red' && <span className="red"><FaTimes /></span>}
                            {confirmPassword === '' && <></>}
                            {confirmPassword === 'Green' && <i onClick={this.confirmPasswordVisibility}>
                            {this.state.cnpIsVisible ? <FaEyeSlash /> : <FaEye />}</i>}
                            {confirmPassword === 'Red' && <i onClick={this.confirmPasswordVisibility}>
                            {this.state.cnpIsVisible ? <FaEyeSlash /> : <FaEye />}</i>}
                            {confirmPassword === '' && <i onClick={this.confirmPasswordVisibility}>
                            {this.state.cnpIsVisible ? <FaEyeSlash /> : <FaEye />}</i>}
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

                        <button className={validPassword ? "updateBtn":"updateBtn disabled"} 
                        onClick={this.handleClick}>Update Password</button>
                        {!isUpdated ? <></>:<div className="dashboard__changePassword--isUpdated">Updated Successfully</div>}
                    </section>
                </div>
            </div>
        );
    }
}

export default changePassword;