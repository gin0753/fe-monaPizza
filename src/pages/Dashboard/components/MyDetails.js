import React from 'react';
import '../dashboard.css'

class Form extends React.Component {
    render() {
        return (<div>
            <h3>Billing Details</h3>
            <form>
                <div className="billcontainer__bill--leftwrapper">
                    <label htmlFor="firstname-input">First Name*</label>
                    <input type="text" name="firstname" minLength="1" maxLength="25" required />
                </div>

                <div className="billcontainer__bill--rightwrapper">
                    <label htmlFor="lastname-input">Last Name*</label>
                    <input type="text" name="lastname" minLength="1" maxLength="25" required />
                </div>

                <label htmlFor="country-select">Email*</label>
                <select name="nations" id="country-select" required>
                    <option value="Australia">Australia(AU)</option>
                    <option value="New Zealand">New Zealand(NZ)</option>
                    <option value="China">China(CN)</option>
                    <option value="United States">United States(US)</option>
                </select>

                <label className="clear" htmlFor="company-input">Mobile Number*</label>
                <input type="text" name="company" minLength="1" maxLength="25" />

            </form>
        </div>
        )
    }
}

export default Form;