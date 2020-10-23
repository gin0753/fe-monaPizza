import React from 'react';

class CartTotal extends React.Component {

    render() {
        return (
            <div className="cart-total flex-item">
                <p>Cart Totals</p>
                <ul>
                    <li className="flex-container">
                        <span className="price-label flex-item">CART SUBTOTAL</span>
                        <span className="price-num flex-item">$79.00</span>
                    </li>
                    <li className="flex-container">
                        <span className="ship-label flex-item">SHIPPING AND HANDLING</span>
                        <span className="ship-sit flex-item">Free Shipping</span>
                    </li>
                </ul>
                <div className="order-total">
                    <p className="flex-container">
                        <span className="flex-item">Order Total</span>
                        <span className="flex-item">$79.00</span>
                    </p>
                </div>
                <button className="upd-cart">UPDATE CART</button>
                <button className="checkout">PROCEED TO CHECKOUT</button>
            </div>
        )
    }
};

export default CartTotal;