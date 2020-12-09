import React from 'react';
import '../../Form.css';
import { connect } from 'react-redux';
import axios from 'axios';

class Order extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            orderList: []
        }
    }
    
    showPizzaList = async () => {
        const userId = sessionStorage.getItem('userID');
        if(userId){
            try{
                const response = await axios.get(`/cart/${userId}/1/10`);
                if(response.status === 200){
                    const orderList = response.data;
                    this.setState({
                        orderList: orderList
                    })
                }
            }
            catch(err){
                console.log(err)
            }
        }
    }

    componentDidMount = async () => {
        await this.showPizzaList()
    }

    render(){
        const orderList = this.state.orderList;
        let totalPrice = 0;
        for(const i of orderList){
            totalPrice += i.totalPrice;
        }
        return <div className="ordercontainer__order">
                    <h3>Your Order</h3>
                    <dl>
                        <dt><h4>PRODUCT</h4></dt>
                        <dd><h4>TOTAL</h4></dd>
                    </dl>
                    <hr/>
                    {orderList.map((item) =>{
                        return  <dl>
                                    <dt>{item.pizzaName}<span> x{item.qty}</span></dt>
                                    <dd>${item.pizzaPrice}</dd>
                                </dl>
                    })
                    }
                    <dl>
                        <dt><h6><span>Shipping and Handling</span></h6></dt>
                        <dd><h6><span>Free Shipping</span></h6></dd>
                    </dl>
                    <dl>
                        <dt><h6><span>Discount</span></h6></dt>
                        <dd><h6><span>{this.props.discount}</span></h6></dd>
                    </dl>
                    <hr/>
                    <dl>
                        <dt>
                            <h3><span>ORDER TOTAL</span></h3>
                        </dt>
                        <dd>
                            <h3><span>${totalPrice}</span></h3>
                            </dd>
                    </dl>
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

export default connect(mapStateToProps)(Order);



