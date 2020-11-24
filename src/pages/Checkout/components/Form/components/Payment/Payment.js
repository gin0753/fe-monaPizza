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
            paymentSucceeded: false,
            paymentFailed: false,
            bankTransfer: true,
            chequePayment: false,
            fieldCheck: false,
            paypal: false
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
        console.log(this.props)
        const userId = sessionStorage.getItem('userID');
        const resp = await axios.get(`/cart/${userId}/1/10`)
        const orderList = resp.data;
        const totalPrice = (this.props.cartSubtotal - this.props.discount) * 100;
        const product = {
            name: orderList,
            price: totalPrice
        }

        try{
            const res = await axios.post('/checkout', {
                token,
                product
            })
            if(res.status === 200){
                this.setState({
                    paymentSucceeded: true
                })
            }
            else{
                this.setState({
                    paymentFailed: true
                })
            }
        }
        catch(err){
            console.log(err)
        }
    }

    handleClick = async () => {
        let { clientFirstName, clientLastName, billingAddr, city, postcode, clientEmail, contactNumber, shippingAddr, orderNote} = this.props.inputValue;
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
            shippingAddr,
            orderNote
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
                const cleanCart = async() => {
                    try{
                        const res = await axios.delete(`cart/`);
                        console.log(res)
                        if(res.status === 200){
                            const { history } = this.props;
                            history.replace('/order-created');
                        }
                    } catch(err) {
                        console.log(err);
                    }
                }
                cleanCart();
                resolve();
                }, 2500));
            }
        } catch (e) {
            console.log(e);
            this.setState({
                fieldCheck: true
            })
        }
    }

    handleChange = (e) => {
      if(e.target.value === 'bankTransfer'){
        this.setState({
          bankTransfer: true,
          chequePayment: false,
          paypal: false
        })
      }
      else if(e.target.value === 'chequePayment'){
        this.setState({
          bankTransfer: false,
          chequePayment: true,
          paypal: false
        })
      }
      else{
        this.setState({
          bankTransfer: false,
          chequePayment: false,
          paypal: true
        })
      }
    }

    render() {
        const defaultOptions = {
            loop: true,
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
                    <input type="radio" id="bank" name="payment" value="bankTransfer" defaultChecked onChange={this.handleChange}/>
                    <div className="radio__custom"></div>
                    <label className="inlinelabel" htmlFor="bank">Direct Bank Transfer</label>
                </div>

                {this.state.bankTransfer &&
                <div className="ordercontainer__payment--paymentintro">
                    Make your payment directly into our bank
                    account. Please use your Order ID as the
                    payment reference. Your order won't be shipped
                    until the funds have cleared in our account.
                </div>}

                <div className="radio">
                    <input type="radio" id="cheque" name="payment" value="chequePayment" onChange={this.handleChange}/>
                    <div className="radio__custom"></div>
                    <label className="inlinelabel" htmlFor="cheque">Cheque Payment</label>
                </div>
                
                {this.state.chequePayment &&
                <div className="ordercontainer__payment--paymentintro">
                    A banker's draft, also known as a banker's cheque,
                    is like asking a bank to write a cheque for you. 
                    You give them your money and they give you a cheque
                    for that amount to give to the person you're paying.
                </div>}

                <div className="radio">
                    <input type="radio" id="paypal" name="payment" value="paypal" onChange={this.handleChange}/>
                    <div className="radio__custom"></div>
                    <label className="inlinelabel" htmlFor="paypal">PayPal</label>
                </div>
                
                {this.state.paypal &&
                <div className="ordercontainer__payment--paymentintro">
                    PayPal allows you to make payments using a variety
                    of methods including: PayPal Cash or PayPal Cash 
                    Plus account balance, a bank account, PayPal Credit,
                    debit or credit cards, and rewards balance.
                </div>}

                <div className="ordercontainer__payment--optionwrapper">
                    <i><img src={options} alt="payment_options" /></i>
                </div>

                <div className="ordercontainer__payment--cardpayment">
                    {(this.props.cartSubtotal - this.props.discount) * 100 > 1 &&  
                    <button onClick={this.stripeClick}>
                        <StripeCheckout stripeKey="pk_test_51Hqd19DahGEftvCwCfESiCwRc4gDqRPDAFXKu25hQTIly6eww8VGDPefwMTumyF5juGykHRiEN8DKsDh7yf8iDUZ00E7uLGGX4"
                        token={this.handleToken} amount={(this.props.cartSubtotal - this.props.discount) * 100} billingAddress shippingAddress name={'tera'}
                        product />
                    </button>}

                    {(this.props.cartSubtotal - this.props.discount) * 100 <= 1 &&  
                            <button onClick={this.stripeClick}>
                                <StripeCheckout stripeKey="pk_test_51Hqd19DahGEftvCwCfESiCwRc4gDqRPDAFXKu25hQTIly6eww8VGDPefwMTumyF5juGykHRiEN8DKsDh7yf8iDUZ00E7uLGGX4"
                                token={this.handleToken} amount={(this.props.cartSubtotal - this.props.discount) * 100} billingAddress shippingAddress name={'tera'}
                                product disabled/>
                            </button>}

                    { this.state.paymentSucceeded && <h6 className="green">Payment Succeed</h6> }
                    { this.state.paymentFailed && <h6 className="red">Payment Failed</h6> }

                </div>

                <input type="checkbox" id="accepterm" name="accepterm" />
                <label className="inlinelabel" htmlFor="accepterm" onClick={this.acceptTerm}>I have read and accept the</label>
                <p><span>Term & Conditions</span></p>

                {this.state.finishingOrder && <Lottie options={defaultOptions} width={150} height={150} />}
                {!this.state.finishingOrder && this.state.readTerm && <Link to="/checkout"><button className="ordercontainer__payment--orderbutton" 
                type="button" onClick={this.handleClick}>PLACE ORDER</button></Link>}
                {!this.state.finishingOrder && !this.state.readTerm && <Link to="/checkout"><button className="ordercontainer__payment--orderbutton inactive" 
                type="button" onClick={this.handleClick} disabled>PLACE ORDER</button></Link>}

                {this.state.fieldCheck && <div className="errorPrompt">Please Complete Your Billing Details and The Payment</div>}
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
  updateOrderId,
};

export default connect(mapStateToProps, mapActionToProps)(Payment);
