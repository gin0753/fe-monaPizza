import React from 'react';
import '../Dashboard.css';
import UserBar from '../../../components/UserBar/UserBar/UserBar';
import AddPizza from './components/addPizza';
import RemovePizza from './components/removePizza';
import UpdatePizza from  './components/updatePizza';

class managePizza extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            namePattern: /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
            pricePattern: /^\d+$/
        } 
    }
    render() {
        return (
            <div className="dashboard">
                <UserBar />
                <div className="dashboard__managePizza">
                    <AddPizza pattern={this.state}/>
                    <RemovePizza pattern={this.state}/>
                    <UpdatePizza pattern={this.state}/>
                </div>
            </div>
        );
    }
}

export default managePizza;