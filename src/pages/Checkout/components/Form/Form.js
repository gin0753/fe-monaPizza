import React from 'react';
import './Form.css'
import Order from './components/Order/Order';
import Payment from './components/Payment/Payment';
import Loginbtn from './components/Login/Login';
import Coupon from './components/Coupon/Coupon';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            clientFirstName: '',
            clientLastName: '',
            billingAddr: '',
            city: '',
            postcode: '',
            clientEmail: '',
            contactNumber: '',
            shippingAddr: '',
            optionalAddr: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        this.setState(
            {optionalAddr: !this.state.optionalAddr}
        );
    }

    render(){
        return <div className="Checkout"> 
                    <section className="form">
                    <div className="billcontainer">
                            <Loginbtn />  
                        <div className="billwrapper">
                        <div className="billcontainer__bill">
                            <h3>Billing Details</h3>
                            <form>
                                <label htmlFor="country-select">COUNTRY*</label>
                                <select name="nations" id="country-select" required>
                                    <option value="Australia">Australia(AU)</option>
                                    <option value="New Zealand">New Zealand(NZ)</option>
                                    <option value="China">China(CN)</option>
                                    <option value="United States">United States(US)</option>
                                </select>
        
                                <div className="billcontainer__bill--leftwrapper">
                                    <label htmlFor="firstname-input">FIRST NAME*</label>
                                    <input type="text" name="clientFirstName" minLength="1" maxLength="25" required onChange={this.handleChange}/>
                                </div>
                                <div className="billcontainer__bill--rightwrapper">
                                    <label htmlFor="lastname-input">LAST NAME*</label>
                                    <input type="text" name="clientLastName" minLength="1" maxLength="25" required onChange={this.handleChange}/>
                                </div>
        
                                <label className="clear" htmlFor="company-input">COMPANY NAME</label>
                                <input type="text" name="company" minLength="1" maxLength="25" />
        
                                <label htmlFor="address-input">ADDRESS*</label>
                                <input type="text" name="billingAddr" minength="1" maxLength="50" placeholder="Street address" required onChange={this.handleChange}/>
                                <input type="text" name="optional" minLength="1" maxLength="50" placeholder="Apartment, suite, unit etc. (optional)"/>
        
                                <label htmlFor="city-input">TOWN/CITY*</label>
                                <input type="text" name="city" minLength="1" maxLength="50" placeholder="Town/City" required onChange={this.handleChange}/>
        
                                <div className="billcontainer__bill--leftwrapper">
                                    <label htmlFor="county-input">COUNTY</label>
                                    <input type="text" name="county" minLength="1" maxLength="25" placeholder="State/County"/>
                                </div>
                                <div className="billcontainer__bill--rightwrapper">
                                    <label htmlFor="postcode-input">POSTCODE*</label>
                                    <input type="text" name="postcode" minLength="1" maxLength="25" placeholder="Poscode/Zip" required onChange={this.handleChange}/>
                                </div>
        
                                <div className="billcontainer__bill--leftwrapper clear billcontainer__bill--afterwrapper">
                                    <label htmlFor="email-input">EMAIL ADDRESS*</label>
                                    <input type="text" name="clientEmail" minLength="1" maxLength="50" required onChange={this.handleChange}/>
                                </div>
                                <div className="billcontainer__bill--rightwrapper billcontainer__bill--afterwrapper">
                                    <label htmlFor="phone-input">PHONE*</label>
                                    <input type="text" name="contactNumber" minLength="1" maxLength="25" required onChange={this.handleChange}/>
                                </div>
        
                                <div className="clear">
                                    <input type="checkbox" id="createAccount" name="createAccount" />
                                    <label className="inlinelabel" htmlFor="createAccount">Create an account?</label>
                                </div>
                            </form>
                        </div>  
                            
                        <div className="billcontainer__address">
                            <h3>Shipping Address</h3>
        
                            <form>
                                <input type="checkbox" id="differentAddress" name="createAccount" onClick={this.handleClick}/>
                                <label className="inlinelabel" htmlFor="differentAddress">Ship to a different address?</label>
        
                                <div>
                                    {this.state.optionalAddr ? 
                                        <>
                                        <label htmlFor="address-input">Alternative Address</label>
                                        <input type="text" name="shippingAddr" placeholder="Street address" minLength="1" maxLength="25" onChange={this.handleChange}/>
                                        <input type="text" name="optional" minLength="1" maxLength="50" placeholder="Apartment, suite, unit etc. (optional)"/>
                                        </>
                                        :
                                        <>
                                        <label className="faint" htmlFor="address-input">Alternative Address</label>
                                        <input type="text" name="phone" placeholder="Street address" minLength="1" maxLength="25" disabled/>
                                        <input type="text" name="optional" minLength="1" maxLength="50" placeholder="Apartment, suite, unit etc. (optional)" disabled/>
                                        </>
                                    }
                                </div>
        
                                <label htmlFor="notes-textarea">ORDER NOTES</label>
                                <textarea name="ordernotes" rows="6" cols="50" placeholder=" Notes about your order. e.g. special notes for delivery." />
                            </form>
                        </div>     

                        </div>
                    </div>
                    <div className="ordercontainer">
                        <Coupon />
                        <div className="orderwrapper">
                            <Order />
                            <Payment inputValue={this.state} {...this.props}/>
                        </div>
                    </div>
                    </section> 
               </div> 
               
    }
}

export default Form;


