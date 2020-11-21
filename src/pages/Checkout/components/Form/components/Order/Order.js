import React from 'react';
import '../../Form.css';
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

    componentDidMount = async () => {
        await this.showPizzaList()
        console.log(this.state.orderList);
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
                        <dt><h5>PRODUCT</h5></dt>
                        <dd><h5>TOTAL</h5></dd>
                    </dl>
                    <hr/>
                    {orderList.map((item) =>{
                        return  <dl>
                                    <dt>{item.pizzaName}<span> x{item.qty}</span></dt>
                                    <dd>${item.pizzaPrice}</dd>
                                </dl>
                    })
                    }
                    <hr/>
                    <dl>
                        <dt>
                            <h4><span>Order Total</span></h4>
                        </dt>
                        <dd>
                            <h4><span>${totalPrice}</span></h4>
                            </dd>
                    </dl>
               </div>     
    }
}

export default Order;


