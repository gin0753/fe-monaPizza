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
        console.log(window.location)
        console.log(this.props)
        return <div className="Registration">
                    <Login SignupClicked={this.state.SignupClicked} switchLogin={this.switchLogin} {...this.props}/>
               </div>   
    }
}

export default Registration;

