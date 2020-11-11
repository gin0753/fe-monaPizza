import React from 'react';
import '../../Form.css';
import options from '../../../../../../images/payment-options.png';

class Payment extends React.Component{
    
    render(){
        return <div className="ordercontainer__payment">
                    <h3>Payment Methods</h3>

                    <form>
                        <div>
                            <input type="radio" id="bank" name="payment" value="bank" />
                            <label className="inlinelabel" htmlFor="bank">Direct Bank Transfer</label>
                        </div>

                        <div className="ordercontainer__payment--paymentintro">
                        Make your payment directly into our bank 
                        account. Please use your Order ID as the
                        payment reference. Your order won't be shipped
                        until the funds have cleared in our account.
                        </div>

                        <div>
                            <input type="radio" id="cheque" name="payment" value="cheque" />
                            <label className="inlinelabel" htmlFor="cheque">Cheque Payment</label>
                        </div>

                        <div>
                            <input type="radio" id="paypal" name="payment" value="paypal" />
                            <label className="inlinelabel" htmlFor="paypal">PayPal</label>
                        </div>

                        <div className="ordercontainer__payment--optionwrapper">
                            <i><img src={options} alt="payment_options"/></i>
                            <h6><span>What is PayPal?</span></h6>
                        </div>

                        <input type="checkbox" id="accepterm" name="accepterm" />
                        <label className="inlinelabel" htmlFor="accepterm">I have read and accept the</label>
                        <p><span>Term & Conditions</span></p>
                        
                        <button className="ordercontainer__payment--orderbutton" form="billingDetails" type="submit" >PLACE ORDER</button>
                    </form>

               </div>     
    }
}

export default Payment;

