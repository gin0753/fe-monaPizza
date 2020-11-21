import React from 'react';
import '../../Form.css';

class Address extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            optionalAddr: false
        }
    }

    handleClick = () => {
        this.setState(
            {optionalAddr: !this.state.optionalAddr}
        );
    }

    render(){
        return <div className="billcontainer__address">
                    <h3>Shipping Address</h3>

                    <form>
                        <input type="checkbox" id="differentAddress" name="createAccount" onClick={this.handleClick}/>
                        <label className="inlinelabel" htmlFor="differentAddress">Ship to a different address?</label>

                        <div>
                            {this.state.optionalAddr ? 
                                <>
                                <label htmlFor="address-input">Alternative Address</label>
                                <input type="text" name="phone" placeholder="Street address" minLength="1" maxLength="25" />
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
    }
}

export default Address;


