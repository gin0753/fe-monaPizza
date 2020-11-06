import React from 'react';
import '../../Form.css';
import axios from 'axios';

class Billing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Country: '',
            FirstName: '',
            LastName: '',
            CompanyName: '',
            Street: '',
            OptionalAddr: '',
            City: '',
            County: '',
            Postcode: '',
            Email: '',
            Phone: ''
        }
    }

    componentDidMount(){
        this.setState({Country: "Australia"});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            Country: this.state.Country,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            CompanyName: this.state.CompanyName,
            Street: this.state.Street,
            OptionalAddr: this.state.OptionalAddr,
            City: this.state.City,
            County: this.state.County,
            Postcode: this.state.Postcode,
            Email: this.state.Email,
            Phone: this.state.Phone
        }

        const postRequest = async () => {
            try{
                const res = await axios.post('/client', data);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }

        postRequest();
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
           [e.target.name]: e.target.value
        });
    }

    render(){
        return <div className="billcontainer__bill">
                    <h3>Billing Details</h3>
                    <form id="billingDetails" onSubmit={this.handleSubmit}>
                        <label htmlFor="country-select">COUNTRY*</label>
                        <select name="Country" id="country-select" onChange={this.handleChange} required>
                            <option value="Australia">Australia(AU)</option>
                            <option value="New Zealand">New Zealand(NZ)</option>
                            <option value="China">China(CN)</option>
                            <option value="United States">United States(US)</option>
                        </select>

                        <div className="billcontainer__bill--leftwrapper">
                            <label htmlFor="firstname-input">FIRST NAME*</label>
                            <input type="text" name="FirstName" onChange={this.handleChange} required/>
                        </div>
                        <div className="billcontainer__bill--rightwrapper">
                            <label htmlFor="lastname-input">LAST NAME*</label>
                            <input type="text" name="LastName" onChange={this.handleChange} required/>
                        </div>

                        <label className="clear" htmlFor="company-input">COMPANY NAME</label>
                        <input type="text" name="CompanyName" onChange={this.handleChange}/>

                        <label htmlFor="address-input">ADDRESS*</label>
                        <input type="text" name="Street" placeholder="Street address" onChange={this.handleChange} required/>
                        <input type="text" name="OptionalAddr" placeholder="Apartment, suite, unit etc. (optional)" onChange={this.handleChange}/>

                        <label htmlFor="city-input">TOWN/CITY*</label>
                        <input type="text" name="City" placeholder="Town/City" onChange={this.handleChange} required/>

                        <div className="billcontainer__bill--leftwrapper">
                            <label htmlFor="county-input">COUNTY</label>
                            <input type="text" name="County" placeholder="State/County" onChange={this.handleChange}/>
                        </div>
                        <div className="billcontainer__bill--rightwrapper">
                            <label htmlFor="postcode-input">POSTCODE*</label>
                            <input type="text" name="Postcode" placeholder="Poscode/Zip" onChange={this.handleChange} required/>
                        </div>

                        <div className="billcontainer__bill--leftwrapper clear billcontainer__bill--afterwrapper">
                            <label htmlFor="email-input">EMAIL ADDRESS*</label>
                            <input type="text" name="Email" onChange={this.handleChange} required/>
                        </div>
                        <div className="billcontainer__bill--rightwrapper billcontainer__bill--afterwrapper">
                            <label htmlFor="phone-input">PHONE*</label>
                            <input type="text" name="Phone" onChange={this.handleChange} required/>
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


