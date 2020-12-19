import React from 'react';
import '../../Form.css';
import { connect } from 'react-redux';
import { getCartItem } from '../../../../../../api/index';
class Order extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            orderList: [],
            toppings: 0,
            pizzaPrice: 0,
            totalPrice: 0,
            userId: sessionStorage.getItem('userID')
        }
    }
    
    showPizzaList = async () => {
        const { userId, toppings } = this.state;
        if(userId){
            try{
                const response = await getCartItem(userId, 1, 8);
                if(response.status === 200){
                    const orderList = response.data;
                    let totalToppings = orderList.reduce((acc, {toppings}) => acc + toppings.length, toppings)
                    this.setState({
                        orderList: orderList,
                        toppings: totalToppings
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
        const { orderList, toppings} = this.state;
        let totalPrice = 0;
        for(const i of orderList){
            totalPrice += i.totalPrice;
        }
        let pizzaPrice = orderList.reduce((acc, {pizzaPrice}) =>
            acc + pizzaPrice, 0);
        const toppingPrice = totalPrice - pizzaPrice;
        const finalPrice = totalPrice - this.props.discount;
        return <div className="ordercontainer__order">
                    <h3>Your Order</h3>
                    <dl>
                        <dt><h4>PRODUCT</h4></dt>
                        <dd><h4>TOTAL</h4></dd>
                    </dl>
                    <hr/>
                    {orderList.map((item, index) =>{
                        return  <dl key={index}>
                                    <dt>{item.pizzaName}<span> x{item.qty}</span></dt>
                                    <dd>${item.pizzaPrice}.00</dd>
                                </dl>
                    })
                    }
                    <dl>
                        <dt><h6><span>Toppings x{toppings}</span></h6></dt>
                        <dd><h6><span>${toppingPrice}.00</span></h6></dd>
                    </dl>
                    <dl>
                        <dt><h6><span>Shipping and Handling</span></h6></dt>
                        <dd><h6><span>Free Shipping</span></h6></dd>
                    </dl>
                    <dl>
                        <dt><h6><span>Discount</span></h6></dt>
                        <dd><h6><span>${this.props.discount}.00</span></h6></dd>
                    </dl>
                    <hr/>
                    <dl>
                        <dt>
                            <h3><span>ORDER TOTAL</span></h3>
                        </dt>
                        <dd>
                            <h3><span>${finalPrice}</span></h3>
                            </dd>
                    </dl>
               </div>     
    }
}


const mapStateToProps = state => {
    const { updateOrderId:{orderId} } = state;
    const { shoppingCartReducer:{discount, cartSubtotal, productList} } = state;
    return {
      orderId,
      discount,
      cartSubtotal,
      productList
    }
  }

export default connect(mapStateToProps)(Order);



