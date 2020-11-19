import React from 'react';
import '../mydetails/mydetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faStore } from '@fortawesome/free-solid-svg-icons';

class Form extends React.Component {
    render() {
        return (<div className="mydetails">
            <form>
                <h3>My details</h3>
                <br />
                <hr />
                <br />
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
                <br />
                <div className="email">
                    <label htmlFor="company-input">Email*</label>
                    <section >
                        <input type="text" name="company" minLength="1" maxLength="25" required />
                    </section>
                </div>
                <br />
                <section className="mobileNumber">
                    <label htmlFor="mobileNumber">Mobile Number*</label>
                    <section >
                        <input type="text" name="street" minength="1" maxLength="50" required />
                    </section>
                </section>
                <br />

                <h3>My Preferences</h3>
                <br />
                <hr />
                <br />
                <h4>Please send me occasional deals and offers from Pizza Hut</h4>
                <br />
                <div className="contactoptions">
                    <section className="emailoption">
                        <label htmlFor="email">
                            <input type="checkbox" id="email" name="email" value="email" defaultChecked={false} />
                            <span></span><h4>Email</h4>
                        </label>
                    </section>
                    <section className="smsoption">
                        <label htmlFor="sms">
                            <input type="checkbox" id="sms" name="sms" value="sms" />
                            <span></span><h4>SMS</h4>
                        </label>
                    </section>
                </div>
                <br />
                <section className="myPreference">
                    <section className="cancel"><input type="button" value="Cancel" /></section>
                    <section className="update"><input type="button" value="Update" /></section>
                </section>
                <br />

                <h3>My Address / Store</h3>
                <br />
                <hr />
                <br />
                <h4>Preferred Delivery Address</h4>
                <br />
                <section>
                    <section className="myAddress">
                        <section className="deliveryAddress">
                            <label for="deliveryAddress" >
                                <input type="checkbox" id="deliveryAddress" name="deliveryAddress" value="deliveryAddress" />
                                <span></span><h4>1 Sydenham Rd MARRICKVILLE NSW 2204</h4></label>
                        </section>
                        <section className="removeButton">
                            <input type="button" value="Remove Address" />
                        </section>
                    </section>
                    <br />
                    <h4>To add/change your preferred delivery address, enter your address below.</h4>
                    <section className="selectaddress">
                        <input type="text" name="address" required />
                        <button >Select Address</button>
                    </section>
                    <br />
                    <hr />
                    <br />
                    <h4><i><FontAwesomeIcon icon={faMotorcycle} /></i>   Preferred Pickup Store</h4>
                    <br />
                    <section>
                        <section className="mystore">
                            <section className="deliverystore">
                                <label for="deliverystore">
                                    <input type="checkbox" id="deliverystore" name="deliverystore" value="deliverystore" />
                                    <span></span><h4>1 Sydenham Rd MARRICKVILLE NSW 2204</h4>
                                </label>
                            </section>
                            <section className="removeButton">
                                <input type="button" value="Remove Store" />
                            </section>
                        </section>
                        <br />
                        <h4><i><FontAwesomeIcon icon={faStore} /></i>    To add/change your preferred store, enter your postcode or surburb below.</h4>
                        <section className="selectaddress">
                            <input type="text" name="store" required />
                            <button >Select Store</button>
                        </section>
                    </section>
                    <br />
                    <h3>My Preferences</h3>
                    <br />
                    <hr />
                    <br />
                    <h4>Preferred Order Type</h4>
                    <br />
                    <div className="ordertype">
                        <section className="delivery">
                            <label htmlFor="delivery">
                                <input type="radio" id="delivery" name="radio" value="delivery" />
                                <span></span><h4>Delivery</h4></label>
                        </section>
                        <section className="pickup">
                            <label htmlFor="pickup">
                                <input type="radio" id="pickup" name="radio" value="pickup" />
                                <span></span><h4>Pickup</h4>
                            </label>
                        </section>
                    </div>
                </section>
            </form>
        </div>
        )
    }
}

export default Form;