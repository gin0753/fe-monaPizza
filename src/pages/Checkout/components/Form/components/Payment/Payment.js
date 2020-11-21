import React from 'react';
import '../../Form.css';
import options from '../../../../../../images/payment-options.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Payment extends React.Component {

    handleClick = () => {
        console.log(1);
        // axios.post('/order');
    }

    render() {
        return <div className="ordercontainer__payment">
            <h3>Payment Methods</h3>

            <form>
                <div className="radio">
                    <input type="radio" id="bank" name="payment" value="bank" />
                    <div className="radio__custom"></div>
                    <label className="inlinelabel" htmlFor="bank">Direct Bank Transfer</label>
                </div>

                <div className="ordercontainer__payment--paymentintro">
                    Make your payment directly into our bank
                    account. Please use your Order ID as the
                    payment reference. Your order won't be shipped
                    until the funds have cleared in our account.
                        </div>

                <div className="radio">
                    <input type="radio" id="cheque" name="payment" value="cheque" />
                    <div className="radio__custom"></div>
                    <label className="inlinelabel" htmlFor="cheque">Cheque Payment</label>
                </div>

                <div className="radio">
                    <input type="radio" id="paypal" name="payment" value="paypal" />
                    <div className="radio__custom"></div>
                    <label className="inlinelabel" htmlFor="paypal">PayPal</label>
                </div>

                <div className="ordercontainer__payment--optionwrapper">
                    <i><img src={options} alt="payment_options" /></i>
                    <h6><span>What is PayPal?</span></h6>
                </div>

                <input type="checkbox" id="accepterm" name="accepterm" />
                <label className="inlinelabel" htmlFor="accepterm">I have read and accept the</label>
                <p><span>Term & Conditions</span></p>

                <Link to="/checkout"><button className="ordercontainer__payment--orderbutton" type="button" onClick={this.handleClick}>PLACE ORDER</button></Link>
            </form>

        </div>
    }
}

export default Payment;

