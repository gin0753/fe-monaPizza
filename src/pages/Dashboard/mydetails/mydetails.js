import React, { Component } from 'react';
import UserBar from '../../../components/UserBar/UserBar/UserBar';
import './mydetails.css';
import Form from '../components/form'
import Navigation from '../components/Navigation'



class Mydetails extends Component {

    render() {
        return (<div className="mydetailspage">
            <Navigation />
            <section className="form">
                <div className="userbar">
                    <UserBar />
                </div>
                <Form />
            </section>
        </div >)
    }
}

export default Mydetails;