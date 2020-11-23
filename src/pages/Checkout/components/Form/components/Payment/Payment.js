import React from 'react';
import '../../Form.css';
import options from '../../../../../../images/payment-options.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateOrderId } from '../../../../../../action/updateOrderID';
import Lottie from 'react-lottie'
import * as delivering from '../../../../../../delivering.json'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';


class Payment extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            readTerm: false,
            finishingOrder: false,
            paymentSucceeded: false
        }
    }
    
    acceptTerm = () => {
        this.setState({
            readTerm: !this.state.readTerm
        });
    }

    stripeClick = (e) => {
        e.preventDefault();
    }

    handleToken = async (token, addresses) => {
        const res = await axios.post('/checkout', {
                        token
                    })
        const {status} = res;
        if(status === 200){
            console.log('Payment Succeeded');
            this.setState({
                paymentSucceeded: true
            })
        }
        else{
            console.log('Payment Declined');
        }
    }

    handleClick = async () => {
        let { clientFirstName, clientLastName, billingAddr, city, postcode, clientEmail, contactNumber, shippingAddr} = this.props.inputValue;
        if(shippingAddr === ''){
            shippingAddr = billingAddr
        }

        const d = new Date();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();
        const orderPlacedTime = `${d.toLocaleDateString()} ${hours}:${minutes}:${seconds}`;

        const userId = sessionStorage.getItem('userID');
        const res = await axios.get(`/cart/${userId}/1/10`)
        const orderList = res.data;
        const discount = this.props.discount;
        const cartSubTotal = this.props.cartSubtotal;
        const totalPrice = cartSubTotal - discount;

        const userInfo = {
            orderPlacedTime,
            clientFirstName,
            clientLastName,
            billingAddr,
            city,
            postcode,
            clientEmail,
            contactNumber,
            orderList,
            discount,
            cartSubTotal,
            totalPrice,
            shippingAddr
        }

        try{
            const orderMsg = await axios.post('/order', userInfo);
            if(orderMsg.status === 201 && this.state.paymentSucceeded){
                const orderId = orderMsg.data._id;
                const { updateOrderId } = this.props;
                updateOrderId({
                    orderId: orderId
                })

                await new Promise((resolve) => {    
                    this.setState({finishingOrder: true});
                    resolve();
                });
                
                await new Promise((resolve)=>setTimeout(() => {
                    this.setState({finishingOrder: false});
                    resolve();
                }, 2000)); 

                await new Promise((resolve)=> {
                    const { history } = this.props;
                    console.log(this.props);
                    history.replace('/order-created');
                    resolve();
                }); 
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const defaultOptions = {
            loop: false,
            autoplay: true, 
            animationData: delivering.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
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

                <div className="ordercontainer__payment--cardpayment">
                    <button onClick={this.stripeClick}>
                        <StripeCheckout stripeKey="pk_test_51Hqd19DahGEftvCwCfESiCwRc4gDqRPDAFXKu25hQTIly6eww8VGDPefwMTumyF5juGykHRiEN8DKsDh7yf8iDUZ00E7uLGGX4"
                        token={this.handleToken}/>
                    </button>
                </div>

                <input type="checkbox" id="accepterm" name="accepterm" />
                <label className="inlinelabel" htmlFor="accepterm" onClick={this.acceptTerm}>I have read and accept the</label>
                <p><span>Term & Conditions</span></p>

                {this.state.finishingOrder && <Lottie options={defaultOptions} width={150} height={150} />}
                {!this.state.finishingOrder && this.state.readTerm && <Link to="/checkout"><button className="ordercontainer__payment--orderbutton" 
                type="button" onClick={this.handleClick}>PLACE ORDER</button></Link>}
                {!this.state.finishingOrder && !this.state.readTerm && <Link to="/checkout"><button className="ordercontainer__payment--orderbutton inactive" 
                type="button" onClick={this.handleClick} disabled>PLACE ORDER</button></Link>}
            </form>

        </div>
    }
}

const mapStateToProps = state => {
    const { updateOrderId:{orderId} } = state;
    const { shoppingCartReducer:{discount, cartSubtotal} } = state;
    return {
      orderId,
      discount,
      cartSubtotal
    }
  }
  
const mapActionToProps = {
    updateOrderId
}
  
export default connect(mapStateToProps, mapActionToProps)(Payment);

