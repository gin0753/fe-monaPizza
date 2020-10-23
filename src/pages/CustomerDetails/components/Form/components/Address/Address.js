import React from 'react';
import '../../Form.css';

class Address extends React.Component{

    render(){
        return <div className="billcontainer__address">
                    <h3>Shipping Address</h3>

                    <form>
                        <input type="checkbox" id="differentAddress" name="createAccount" />
                        <label className="inlinelabel" htmlFor="differentAddress">Ship to a different address?</label>

                        <label htmlFor="notes-textarea">ORDER NOTES</label>
                        <textarea name="ordernotes" rows="6" cols="50" placeholder=" Notes about your order. e.g. special notes for delivery." />
                    </form>
               </div>     
    }
}

export default Address;


