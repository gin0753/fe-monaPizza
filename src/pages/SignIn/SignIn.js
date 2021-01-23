import React from 'react';
import Login from './Login/Login';
class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {SignupClicked: false};
    }

    switchLogin = () => {
        this.setState({SignupClicked: !this.state.SignupClicked})
    }
    
    render(){
        return <div className="Registration">
                    <Login SignupClicked={this.state.SignupClicked} switchLogin={this.switchLogin} {...this.props}/>
               </div>   
    }
}

export default Registration;

