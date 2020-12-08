import React from "react";
import "./style/OrderCreated.scss";
import Order from "./components/Order";
import Payment from './components/Payment';
import { connect } from 'react-redux';
import { updateOrderId } from '../../action/updateOrderID';
import Axios from 'axios';
class OrderCreated extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orderPlaced: false,
      isAnimated: false,
      userId: sessionStorage.getItem('userID'),
      config: {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('login-token')}`
            }
          }
      }
  }

  handleClick = async () => {
      try{
          const d = new Date();
          const hours = d.getHours();
          const minutes = d.getMinutes();
          const seconds = d.getSeconds();
          const orderPlacedTime = `${d.toLocaleDateString()} ${hours}:${minutes}:${seconds}`;
          const res = await Axios.put(`/order/${this.props.orderId}`, {orderStatus: 'Pending', orderPlacedTime}, this.state.config)
          if(res.status === 200){
              await new Promise((resolve) => {    
                  this.setState({isAnimated: true});
                  resolve();
              });

              await new Promise((resolve)=>setTimeout(() => {
                  this.setState({
                      orderPlaced: true
                  });
                  const cleanCart = async() => {
                    try{
                        const res = await Axios.delete(`cart/`);
                        if(res.status === 200){
                            await this.props.updateCart();
                        }
                    } catch(err) {
                        console.log(err);
                    }
                }
                cleanCart();
                resolve();
                }, 2500));
          }
      }
      catch(err){
          console.log(err)
      }
}

  render() {
    return (
      <section className='order-created w'>
        {this.state.orderPlaced && <></>}
        {!this.state.orderPlaced && <Payment clickEvent={this.handleClick} animation={this.state.isAnimated}/>}
        <Order orderPlaced={this.state.orderPlaced}/>
      </section>
    );
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

export default connect(mapStateToProps, mapActionToProps)(OrderCreated);
