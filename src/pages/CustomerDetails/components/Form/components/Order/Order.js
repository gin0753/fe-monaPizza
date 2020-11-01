import React from 'react';
import '../../Form.css';

class Order extends React.Component{

    render(){
        return <div className="ordercontainer__order">
                    <h3>Your Order</h3>
                    <dl>
                        <dt><h5>PRODUCT</h5></dt>
                        <dd><h5>TOTAL</h5></dd>
                    </dl>
                    <hr/>
                    <dl>
                        <dt>Moorish Lamb <span>x1</span></dt>
                        <dd>$19.00</dd>
                    </dl>
                    <dl>
                        <dt>Vegetarian Supreme <span>x1</span></dt>
                        <dd>$34.00</dd>
                    </dl>
                    <dl>
                        <dt>Spiced Pumpkin <span>x1</span></dt>
                        <dd>$26.00</dd>
                    </dl>
                    <hr/>
                    <dl>
                        <dt>
                            <h4><span>Order Total</span></h4>
                        </dt>
                        <dd>
                            <h4><span>$79.00</span></h4>
                            </dd>
                    </dl>
               </div>     
    }
}

export default Order;


