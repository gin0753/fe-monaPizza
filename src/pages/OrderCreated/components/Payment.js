import React from 'react';
import '../style/OrderCreated.css';
import options from '../../../images/payment-options.png';
import { connect } from 'react-redux';
import { updateOrderId } from '../../../action/updateOrderID';
import * as delivering from '../../../delivering.json'
import Lottie from 'react-lottie'
import StripeCheckout from 'react-stripe-checkout'
import { getCartItem, checkoutPayment} from '../../../api/index';
import Margherita from '../../../images/sriracha.png';

class Payment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            readTerm: false,
            cartItem: false,
            paymentSucceeded: false,
            paymentFailed: false,
            orderPlaced: false,
            userId: sessionStorage.getItem('userID'),
            config: {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('login-token')}`
                }
            }
        }
    }
    
    acceptTerm = () => {
        this.setState((prevState) => {
            return { readTerm: !prevState.readTerm }
        })
    }
    handleToken = async (token, addresses) => {
        const {userId, config} = this.state;
        const resp = await getCartItem(userId, 1, 8);
        const orderList = resp.data;
        const totalPrice = (this.props.cartSubtotal - this.props.discount) * 100;
        const product = {
            name: orderList,
            price: totalPrice
        }

        try{
            const res = await checkoutPayment(token, product, config);
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
            this.setState({
                paymentFailed: true
            })
            console.log(err)
        }
    }

    stripeClick = (e) => {
        e.preventDefault();
    }

    componentDidMount = async() => {
        try{
            const res = await getCartItem(this.state.userId, 1, 10);
            if(res.data.length > 0){
                this.setState({
                    cartItem: true
                })
            }
        }
        catch(err){
            console.log(err)
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
        return <div className="payment">
                <section>
                    <h2>Payment Methods</h2>
                    <hr />
                    <form>
                        <div className="payment__radio">
                            <input type="radio" id="bank" name="payment" value="bankTransfer" defaultChecked onChange={this.handleChange}/>
                            <label htmlFor="bank">Direct Bank Transfer</label>
                        </div>

                        <div className="payment__paymentintro">
                            Make your payment directly into our bank
                            account. Please use your Order ID as the
                            payment reference. Your order won't be shipped
                            until the funds have cleared in our account.
                        </div>

                        <div className="payment__optionwrapper">
                            <i><img src={options} alt="payment_options" /></i>
                        </div>

                        <div className="payment__cardpayment">
                            {this.state.cartItem &&
                            <button onClick={this.stripeClick}>  
                                <StripeCheckout stripeKey="pk_test_51Hqd19DahGEftvCwCfESiCwRc4gDqRPDAFXKu25hQTIly6eww8VGDPefwMTumyF5juGykHRiEN8DKsDh7yf8iDUZ00E7uLGGX4"
                                token={this.handleToken} amount={(this.props.cartSubtotal - this.props.discount) * 100} billingAddress shippingAddress name={'MonaPizza'}
                                alipay image={Margherita} locale="en" product onClick={this.stripeClick}/>
                            </button>}

                            {!this.state.cartItem &&  
                            <button onClick={this.stripeClick}>  
                                <StripeCheckout stripeKey="pk_test_51Hqd19DahGEftvCwCfESiCwRc4gDqRPDAFXKu25hQTIly6eww8VGDPefwMTumyF5juGykHRiEN8DKsDh7yf8iDUZ00E7uLGGX4"
                                token={this.handleToken} amount={(this.props.cartSubtotal - this.props.discount) * 100} billingAddress shippingAddress name={'MonaPizza'}
                                alipay image={Margherita} locale="en" product disabled/>
                            </button>}

                            { this.state.paymentSucceeded && <h6 className="green">Payment Succeed</h6> }
                            { this.state.paymentFailed && <h6 className="red">Payment Failed</h6> }
                        </div>
          
                        {this.props.animation && <Lottie options={defaultOptions} width={150} height={150} />}
                        {!this.props.animation && 
                        <>
                            <div className="payment__term">
                                <input type="checkbox" id="accepterm" name="accepterm" />
                                <label className="inlinelabel" htmlFor="accepterm" onClick={this.acceptTerm}>I have read and accept the</label>
                                <p><span>Term & Conditions</span></p>
                            </div> 
                            {this.state.readTerm &&
                            <div>
                                {this.state.paymentSucceeded && <button className="payment__orderBtn" 
                                type="button" onClick={this.props.clickEvent}>PLACE ORDER</button>}
                                {!this.state.paymentSucceeded && <button className="payment__orderBtn disabled" 
                                type="button" onClick={this.props.clickEvent} disabled>PLACE ORDER</button>}
                            </div>
                            }
                            {!this.state.readTerm &&
                                <div>
                                    <button className="payment__orderBtn disabled" 
                                    type="button" onClick={this.props.clickEvent} disabled>PLACE ORDER</button>
                                </div>
                            }
                        </>}

                    </form>
                </section>
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
