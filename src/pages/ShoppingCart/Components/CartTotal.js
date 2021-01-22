import React from 'react';
import { Link } from 'react-router-dom';

import store from 'store/index';

import { updateOrderTotal } from "action/shoppingCartCreator";


class CartTotal extends React.Component {

    constructor() {
        super()

        this.state = store.getState().shoppingCartReducer;

        store.subscribe(this.handleStoreChange)
    }


    handleStoreChange = () => {
        this.setState({
            ...store.getState().shoppingCartReducer
        })
    }

    handleToCheckOutClick = () => {
        const { discount, cartSubtotal } = store.getState().shoppingCartReducer;
        const orderTotal = cartSubtotal - discount;

        const action = updateOrderTotal(orderTotal);

        store.dispatch(action)
    }


    render() {

        const { discount, cartSubtotal } = this.state;
        const orderTotal = cartSubtotal - discount;

        return (
            <div className="cart-total flex-item">
                <p>Cart Totals</p>
                <ul>
                    <li className="flex-container">
                        <span className="price-label flex-item">CART SUBTOTAL</span>
                        <span className="price-num flex-item">${cartSubtotal}.00</span>
                    </li>
                    <li className="flex-container">
                        <span className="ship-label flex-item">SHIPPING AND HANDLING</span>
                        <span className="ship-sit flex-item">Free Shipping</span>
                    </li>
                    <li className="flex-container">
                        <span className="discount-label flex-item">DISCOUNT</span>
                        <span className="discount-value flex-item">${discount}.00</span>
                    </li>
                </ul>
                <div className="order-total">
                    <p className="flex-container">
                        <span className="flex-item">Order Total</span>
                        <span className="flex-item">${orderTotal}.00</span>
                    </p>
                </div>
                <button className="upd-cart">UPDATE CART</button>
                <Link to="/checkout"><button
                    className="checkout"
                    onClick={this.handleToCheckOutClick}
                >PROCEED TO CHECKOUT</button></Link>
            </div>
        )
    }
};

export default CartTotal;
