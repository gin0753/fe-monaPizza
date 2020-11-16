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
                <section className="mydetails">
                    <form>
                        <h3>My details</h3>
                        <hr />
                        <section className="userName">
                            <div className="firstName">
                                <label htmlFor="firstname-input">First Name*</label>
                                <section>
                                    <input type="text" name="firstname" minLength="1" maxLength="25" required />
                                </section>
                            </div>
                            <div className="lastName">
                                <label htmlFor="lastname-input">Last Name*</label>
                                <section>
                                    <input type="text" name="lastname" minLength="1" maxLength="25" required />
                                </section>
                            </div>
                        </section>

                        <label className="clear" htmlFor="company-input">Email*</label>
                        <section>
                            <input type="text" name="company" minLength="1" maxLength="25" />
                        </section>

                        <section>
                            <label htmlFor="address-input">ADDRESS*</label>
                            <section>
                                <input type="text" name="street" minength="1" maxLength="50" placeholder="Street address" required />
                            </section>
                        </section>
                        <br />

                        <h3>My Preferences</h3>
                        <hr />

                        <h4>Please send me occasional deals and offers from Pizza Hut</h4>
                        <input type="checkbox" id="email" name="email" value="email" />

                        <label htmlFor="email">Email</label>
                        <input type="checkbox" id="sms" name="sms" value="sms" />
                        <label htmlFor="sms">SMS</label>

                        <input type="button" value="Cancel" />
                        <input type="button" value="Update" />
                        <br />

                        <h3>My Address / Store</h3>
                        <hr />
                        <h4>Preferred Delivery Address</h4>
                        <section>
                            <input type="radio" id="deliveryAddress" name="deliveryAddress" value="deliveryAddress" />
                            <label for="deliveryAddress" defaultChecked="checked">1 Sydenham Rd MARRICKVILLE NSW 2204</label>
                            <input type="button" value="Remove Address" />
                            <h4>To add/change your preferred delivery address, enter your address below.</h4>
                            <select id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                            <hr />

                            <h4>Preferred Delivery Address</h4>
                            <section>
                                <input type="radio" id="deliveryAddress" name="deliveryAddress" value="deliveryAddress" />
                                <label for="deliveryAddress" defaultChecked="checked">1 Sydenham Rd MARRICKVILLE NSW 2204</label>
                                <input type="button" value="Remove Address" />
                                <h4>To add/change your preferred delivery address, enter your address below.</h4>
                                <select id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </section>

                            <h3>My Preferences</h3>
                            <hr />

                            <h4>Please send me occasional deals and offers from Pizza Hut</h4>
                            <input type="radio" id="email" name="email" value="email" />
                            <label for="email">Email</label>
                            <input type="radio" id="sms" name="sms" value="sms" />
                            <label for="sms">SMS</label>

                        </section>

                    </form>
                </section>
            </section>
        </div >)
    }
}
export default Dashboard;