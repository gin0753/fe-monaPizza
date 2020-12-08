import React, { Component } from 'react';
import './ViewOrder.css';
import axios from 'axios';

class ViewOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
        }
    }

    render() {
        return <div className="viewOrder">
            <div className="title">
                <h1 className="viewOrder_page-title">Orders</h1>
                <nav className="viewOrder_navbar">
                    <div className="navbar__element"><p>Incoming</p></div>
                    <div className="navbar__element"><p>Preparing</p></div>
                    <div className="navbar__element"><p>Ready</p></div>
                    <div className="navbar__element"><p>History</p></div>
                </nav>
            </div>

            <div className="viewOrder_order-container">
                <div className="viewOrder_order">
                    <div className="viewOrder_order__header">
                        <h2 className="viewOrder_order-number">100</h2>
                        <h2 className="viewOrder_customer-name">Chloe</h2>
                        <h2 className="viewOrder_countdown">10</h2>
                    </div>
                    <div className="viewOrder_details">
                        <ul>
                            <li className="viewOrder_list">
                                <div className="viewOrder_quantity">
                                    1
                            </div>
                                <div className="viewOrder_item-name">
                                    Meat Lover
                            </div>
                                <div className="viewOrder_item-size">
                                    L
                            </div>
                            </li>
                        </ul>
                    </div>
                    <div className="viewOrder_earnings">
                        <ul>
                            <li>
                                <div className="viewOrder_earnings__title">Subtotal</div>
                            </li>
                            <li>
                                <div className="viewOrder_earnings__title">Tax</div>
                            </li>
                            <li className="viewOrder_earnings__total">
                                <div className="viewOrder_earnings__title">Total</div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div className="viewOrder_earnings__detail">$10.00</div>
                            </li>
                            <li>
                                <div className="viewOrder_earnings__detail">$1.00</div>
                            </li>
                            <li className="viewOrder_earnings__total">
                                <div className="viewOrder_earnings__detail">$11.00</div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    }
}

export default ViewOrder;