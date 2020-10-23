import React from 'react';
import './CartTotal.css'
import {CartItems} from '../CartItems/CartItems';
import cross from '../../../images/times-solid.svg';

class CartTotal extends React.Component{

    render(){
        return <>
                    <div className="carttotal">
                    <h3>Cart Totals</h3>
                    <hr/>
                    <ul className="carttotal--pizza">
                        {CartItems.map((item, index) => {
                            return (
                                <>
                                    <li key={index}>
                                    <a><img src={cross} alt="cross"/></a>
                                    <img src={item.img} alt={item.text}/>
                                    <div>
                                        <h5>{item.pizzaName}</h5>
                                        <p><span className="subtitle">SIZE:</span> {item.size}</p>
                                        <p><span  className="red">{item.quantity}x</span> {item.price}</p>
                                    </div>
                                    </li>
                                    <hr />
                                </>
                            )
                        })}
                    </ul>
                    <dl>
                        <dt>
                            <h4><span className="red">Order Total</span></h4>
                        </dt>
                        <dd>
                            <h4><span className="red">$79</span></h4>
                        </dd>
                    </dl>
                    <button className="buttonblack">VIEW SHOPPING CART</button>
                    <button>CHECKOUT</button>
                    </div>  
               </>   
    } 
}

export default CartTotal;