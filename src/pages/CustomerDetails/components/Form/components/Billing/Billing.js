import React from 'react';
import '../../Form.css';

class Billing extends React.Component{

    render(){
        return <div className="billcontainer__bill">
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
                            <input type="text" name="firstname" minLength="1" maxLength="25" required/>
                        </div>
                        <div className="billcontainer__bill--rightwrapper">
                            <label htmlFor="lastname-input">LAST NAME*</label>
                            <input type="text" name="lastname" minLength="1" maxLength="25" required/>
                        </div>

                        <label className="clear" htmlFor="company-input">COMPANY NAME</label>
                        <input type="text" name="company" minLength="1" maxLength="25" />

                        <label htmlFor="address-input">ADDRESS*</label>
                        <input type="text" name="street" minength="1" maxLength="50" placeholder="Street address" required/>
                        <input type="text" name="optional" minLength="1" maxLength="50" placeholder="Apartment, suite, unit etc. (optional)"/>

                        <label htmlFor="city-input">TOWN/CITY*</label>
                        <input type="text" name="city" minLength="1" maxLength="50" placeholder="Town/City" required/>

                        <div className="billcontainer__bill--leftwrapper">
                            <label htmlFor="county-input">COUNTY</label>
                            <input type="text" name="county" minLength="1" maxLength="25" placeholder="State/County"/>
                        </div>
                        <div className="billcontainer__bill--rightwrapper">
                            <label htmlFor="postcode-input">POSTCODE*</label>
                            <input type="text" name="postcode" minLength="1" maxLength="25" placeholder="Poscode/Zip" required/>
                        </div>

                        <div className="billcontainer__bill--leftwrapper clear billcontainer__bill--afterwrapper">
                            <label htmlFor="email-input">EMAIL ADDRESS*</label>
                            <input type="text" name="email" minLength="1" maxLength="50" required/>
                        </div>
                        <div className="billcontainer__bill--rightwrapper billcontainer__bill--afterwrapper">
                            <label htmlFor="phone-input">PHONE*</label>
                            <input type="text" name="phone" minLength="1" maxLength="25" required/>
                        </div>

                        <div className="clear">
                            <input type="checkbox" id="createAccount" name="createAccount" />
                            <label className="inlinelabel" htmlFor="createAccount">Create an account?</label>
                        </div>
                    </form>
               </div>     
    }
}

export default Billing;


