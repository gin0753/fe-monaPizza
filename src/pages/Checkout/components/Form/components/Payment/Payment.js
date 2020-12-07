import React from 'react';
import '../../Form.css';
import { connect } from 'react-redux';
import { updateOrderId } from '../../../../../../action/updateOrderID';
import Lottie from 'react-lottie'
import * as delivering from '../../../../../../delivering.json'
import Axios from 'axios';

class Payment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            finishingOrder: false,
            fieldCheck: false,
            orderCheck: false,
            userId: sessionStorage.getItem('userID'),
            config: {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('login-token')}`
                }
            }
        }
    }
    
    handleClick = async () => {
        let { clientFirstName, clientLastName, billingAddr, city, postcode, clientEmail, contactNumber, shippingAddr, orderNote,
        country, companyName, billingUnit, county, shippingUnit} = this.props.inputValue;
        if(shippingAddr === ''){
            shippingAddr = billingAddr
        }

        const d = new Date();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();
        const orderPlacedTime = `${d.toLocaleDateString()} ${hours}:${minutes}:${seconds}`;

        const {userId} = this.state;
        const res = await Axios.get(`/cart/${userId}/1/10`)
        const orderList = res.data;
        const discount = this.props.discount;
        const cartSubTotal = this.props.cartSubtotal;
        const totalPrice = cartSubTotal - discount;

        try{
            const orderInfo = {
                userId,
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
                orderNote,
                orderStatus: 'Unpaid'
            }
            const orderResponse = await Axios.post('/order', orderInfo);
            if(orderResponse.status === 201 && +totalPrice > 1){
                const orderId = orderResponse.data._id;
                const { updateOrderId } = this.props;
                updateOrderId({
                    orderId: orderId
                })

                await new Promise((resolve) => {    
                    this.setState({finishingOrder: true,
                                   fieldCheck: false,
                                   orderCheck: false
                                });
                    resolve();
                });
                
                await new Promise((resolve)=>setTimeout(() => {
                const cleanCart = async() => {
                    try{
                        const res = await Axios.delete(`cart/`);
                        if(res.status === 200){
                            await this.props.updateCart();
                            const { history } = this.props.history;
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
            else if(+totalPrice < 1){
                this.setState({
                    orderCheck: true,
                    fieldCheck: false
                })
            }
        } catch (e) {
            console.log(e);
            this.setState({
                fieldCheck: true
            })
        }

        try{
            const userInfo = {
                userId,
                country,
                clientFirstName,
                clientLastName,
                companyName,
                billingAddr,
                billingUnit,
                city,
                county,
                postcode,
                clientEmail,
                contactNumber,
                shippingAddr,
                shippingUnit
            }
            await Axios.post('/client', userInfo);
        }
        catch(err){
            console.log(err.message)
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

                    {this.state.finishingOrder && <Lottie options={defaultOptions} width={150} height={150} />}
                    {!this.state.finishingOrder && <button className="ordercontainer__payment--orderbutton" 
                    type="button" onClick={this.handleClick}>CHECKOUT</button>}

                    {this.state.fieldCheck ? <div className="errorPrompt">Please Complete Your Billing Details</div> : <></>}
                    {this.state.orderCheck ? <div className="errorPrompt">The Order Cannot be Empty</div> : <></>}
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
