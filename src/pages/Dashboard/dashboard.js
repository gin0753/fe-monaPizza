import React, { Component } from 'react';
import UserBar from '../../components/UserBar/UserBar/UserBar'
import './dashboard.css'


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarIsClicked: false,
            cartIsClicked: false
        }
    }

    toggleSideBar = () => {
        this.setState({
            sidebarIsClicked: !this.state.sidebarIsClicked
        })
    }

    toggleCart = () => {
        this.setState({
            cartIsClicked: !this.state.cartIsClicked
        })
    }

    render() {
        return (<div className="dashboard">
            <section className="form">
                <div className="userbar">
                    <UserBar />
                </div>
                <section>
                    <div className="userdetails">
                        <div className="mydetails">
                            <h3></h3>
                            <div>
                                <label></label>
                                <div><imput id="first-name" type="text" placeholder="e.g John" require="required"></imput></div>
                            </div>
                        </div>
                    </div>
                    <div className="mypreferences">
                    </div>
                    <div className="myaddress">
                    </div>
                </section>
            </section>
        </div >)
    }
}
export default Dashboard;