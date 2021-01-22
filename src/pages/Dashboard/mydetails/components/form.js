import React from 'react';
import '../mydetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faStore } from '@fortawesome/free-solid-svg-icons';
import { updateClientInfo, getClientInfo } from 'api/index';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: sessionStorage.getItem('userID'),
            clientFirstName: '',
            clientLastName: '',
            clientEmail: '',
            contactNumber: '',
            billingAddr: '',
            isUpdated: false,
            isCanceled: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUpdate = async () => {
        try {
            const { userId, clientFirstName, clientLastName, clientEmail, contactNumber, billingAddr } = this.state;
            const updateInfo = {
                clientFirstName,
                clientLastName,
                clientEmail,
                contactNumber,
                billingAddr
            }
            const updateResponse = await updateClientInfo(userId, updateInfo);
            if (updateResponse.status === 200) {
                this.setState({
                    isUpdated: true
                })

                setTimeout(() => {
                    this.setState({
                        isUpdated: false
                    })
                }, 3000)
            }
        }
        catch (err) {
            console.log(err.message)
        }
    }

    handleCancel = () => {
        window.location.reload();
    }

    removeBillingAddr = async () => {
        try {
            const addrResponse = await updateClientInfo(this.state.userId, { billingAddr: '' });
            if (addrResponse.status === 200) {
                this.setState({
                    billingAddr: ''
                })
            }
        }
        catch (err) {
            console.log(err.message)
        }
    }

    addBillingAddr = async (e) => {
        e.preventDefault();
        try {
            await updateClientInfo(this.state.userId, { billingAddr: this.state.billingAddr });
        }
        catch (err) {
            console.log(err.message)
        }
    }

    componentDidMount = async () => {
        if(this.state.userId){
            try {
                const clientInfo = await getClientInfo(this.state.userId);
                this.setState({
                    clientFirstName: clientInfo.data.clientFirstName,
                    clientLastName: clientInfo.data.clientLastName,
                    clientEmail: clientInfo.data.clientEmail,
                    contactNumber: clientInfo.data.contactNumber,
                    billingAddr: clientInfo.data.billingAddr
                })
            }
            catch (err) {
                console.log(err.message)
            }
        }
    }

    render() {
        return (
            <div className="mydetails">
                <section className="rightPage">
                    <h3>My details</h3>
                    <br />
                    <hr />
                    <br />
                    <section className="userName">
                        <div className="firstName">
                            <label htmlFor="firstname-input">FIRST NAME*</label>
                            <section>
                                <input type="text" name="clientFirstName" minLength="1" maxLength="25" required onChange={this.handleChange} defaultValue={this.state.clientFirstName} />
                            </section>
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastname-input">LAST NAME*</label>
                            <section>
                                <input type="text" name="clientLastName" minLength="1" maxLength="25" required onChange={this.handleChange} defaultValue={this.state.clientLastName} />
                            </section>
                        </div>
                    </section>
                    <br />
                    <div className="email">
                        <label htmlFor="company-input">EMAIL*</label>
                        <section >
                            <input type="text" name="clientEmail" minLength="1" maxLength="25" required onChange={this.handleChange} defaultValue={this.state.clientEmail} />
                        </section>
                    </div>
                    <br />
                    <section className="mobileNumber">
                        <label htmlFor="mobileNumber">MOBILE NUMBER*</label>
                        <section >
                            <input type="text" name="contactNumber" minength="1" maxLength="50" required onChange={this.handleChange} defaultValue={this.state.contactNumber} />
                        </section>
                    </section>
                    <br />

                    <h3>My Preferences</h3>
                    <br />
                    <hr />
                    <br />
                    <h4>Please send me occasional deals and offers from Mona Pizza</h4>
                    <br />
                    <div className="contactoptions">
                        <section className="emailoption">
                            <label htmlFor="email">
                                <input type="checkbox" id="email" name="email" value="email" defaultChecked={true} />
                                <span></span><h4>Email</h4>
                            </label>
                        </section>
                        <section className="smsoption">
                            <label htmlFor="sms">
                                <input type="checkbox" id="sms" name="sms" value="sms" defaultChecked={true} />
                                <span></span><h4>SMS</h4>
                            </label>
                        </section>
                    </div>
                    <br />
                    <section className="myPreference">
                        <section className="cancel"><input type="button" value="Cancel" onClick={this.handleCancel} /></section>
                        <section className="update"><input type="button" value="Update" disabled={this.state.isUpdated} onClick={this.handleUpdate} /></section>
                        {this.state.isUpdated ? <div className="myPreference__successMsg">Updated Successfully</div> : <></>}
                    </section>
                    <br />

                    <h3>My Address / Store</h3>
                    <br />
                    <hr />
                    <br />
                    <h4>Preferred Delivery Address</h4>
                    <br />
                    <section className="myAddr">
                        {this.state.billingAddr &&
                            <section className="myAddress">
                                <section className="deliveryAddress">
                                    <label htmlFor="deliveryAddress" >
                                        <input type="checkbox" id="deliveryAddress" name="deliveryAddress" value="deliveryAddress" defaultChecked />
                                        <span></span>
                                        <h4>{this.state.billingAddr}</h4>
                                    </label>
                                </section>
                                <section className="removeButton">
                                    <input type="button" value="Remove Address" onClick={this.removeBillingAddr} />
                                </section>
                            </section>
                        }
                        {!this.state.billingAddr && <h4 className="myAddr__noContent">You currently do not have a saved address</h4>}
                        <br />
                        <h4>To add/change your preferred delivery address, enter your address below.</h4>
                        <section className="selectaddress">
                            <input type="text" name="billingAddr" onChange={this.handleChange} />
                            <button onClick={this.addBillingAddr}>Update Address</button>
                        </section>
                        <br />
                        <hr />
                        <br />
                        <h4><i><FontAwesomeIcon icon={faMotorcycle} /></i>   Preferred Pickup Store</h4>
                        <br />
                        <section>
                            <section className="mystore">
                                <section className="deliverystore">
                                    <label htmlFor="deliverystore">
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
                                <input type="text" name="store" />
                                <button >Update Store</button>
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
                </section>
            </div>
        )
    }
}

export default Form;