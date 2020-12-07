import React from 'react';
import './Form.css'
import Order from './components/Order/Order';
import Payment from './components/Payment/Payment';
import Loginbtn from './components/Login/Login';
import Coupon from './components/Coupon/Coupon';
import Axios from 'axios';
import store from '../../../../store/index';
import { addPizzaList } from '../../../../action';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            country: 'Australia',
            clientFirstName: '',
            clientLastName: '',
            companyName: '',
            billingAddr: '',
            billingUnit: '',
            city: '',
            county: '',
            postcode: '',
            clientEmail: '',
            contactNumber: '',
            shippingAddr: '',
            shippingUnit: '',
            orderNotes: '',
            optionalAddr: false,
            saveProfile: true
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

    saveProfile = () => {
        this.setState(
            {saveProfile: !this.state.saveProfile}
        );
    }
    
    async componentDidMount() {

        const userId = sessionStorage.getItem('userID');

        try {
            const { data } = await Axios.get(`http://localhost:8000/cart/${userId}/1/10`);

            let subPrice = 0;
            data.map(item => {
                subPrice = item.totalPrice + subPrice;
            })

            const action = addPizzaList(data, subPrice);
            store.dispatch(action);
        } catch (err) {
            console.log(err)
        }

    }

    render(){
        return <div className="Checkout"> 
                    <section className="form">
                    <div className="billcontainer">
                            <Loginbtn {...this.props}/>  
                        <div className="billwrapper">
                        <div className="billcontainer__bill">
                            <h3>Billing Details</h3>
                            <form>
                                <label htmlFor="country-select">COUNTRY*</label>
                                <select name="country" id="country-select" required onChange={this.handleChange}>
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
                                <input type="text" name="companyName" minLength="1" maxLength="25" onChange={this.handleChange}/>
        
                                <label htmlFor="address-input">ADDRESS*</label>
                                <input type="text" name="billingAddr" minength="1" maxLength="50" placeholder="Street address" required onChange={this.handleChange}/>
                                <input type="text" name="billingUnit" minLength="1" maxLength="50" placeholder="Apartment, suite, unit etc. (optional)" onChange={this.handleChange}/>
        
                                <label htmlFor="city-input">TOWN/CITY*</label>
                                <input type="text" name="city" minLength="1" maxLength="50" placeholder="Town/City" required onChange={this.handleChange}/>
        
                                <div className="billcontainer__bill--leftwrapper">
                                    <label htmlFor="county-input">COUNTY</label>
                                    <input type="text" name="county" minLength="1" maxLength="25" placeholder="State/County" onChange={this.handleChange}/>
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
                                    <input type="checkbox" id="createAccount" name="createAccount" defaultChecked onChange={this.saveProfile} />
                                    <label className="inlinelabel" htmlFor="createAccount">Save to Profile</label>
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
                                        <input type="text" name="shippingUnit" minLength="1" maxLength="50" placeholder="Apartment, suite, unit etc. (optional)" onChange={this.handleChange}/>
                                        </>
                                        :
                                        <>
                                        <label className="faint" htmlFor="address-input">Alternative Address</label>
                                        <input type="text" name="shippingAddr" placeholder="Street address" minLength="1" maxLength="25" disabled/>
                                        <input type="text" name="shippingUnit" minLength="1" maxLength="50" placeholder="Apartment, suite, unit etc. (optional)" disabled/>
                                        </>
                                    }
                                </div>
        
                                <label htmlFor="notes-textarea">ORDER NOTES</label>
                                <textarea name="orderNotes" rows="6" cols="50" placeholder=" Notes about your order. e.g. special notes for delivery." onChange={this.handleChange}/>
                            </form>
                        </div>     

                        </div>
                    </div>
                    <div className="ordercontainer">
                        <Coupon {...this.props}/>
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


