import React, { Component } from 'react';
import './ViewOrder.css';

class ViewOrder extends Component {
    constructor() {
        super()
    }


    render() {
        return <>
            <h1 className="viewOrder_title">Orders</h1>
            <div className="viewOrder_navbar">
                <div className="viewOrder_navbar__element"><p>Incoming</p></div>
                <div className="viewOrder_navbar__element"><p>Preparing</p></div>
                <div className="viewOrder_navbar__element"><p>Ready</p></div>
                <div className="viewOrder_navbar__element"><p>History</p></div>
            </div>
            <div className="viewOrder_order-container">
                <div className="viewOrder_order">
                    <div className="viewOrder_header">
                        <h2 className="viewOrder_order-number">100</h2>
                        <h2 className="viewOrder_customer-name">Chloe</h2>
                        <h2 className="viewOrder_countdown">10 min</h2>
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
                                    Large
                            </div>
                            </li>
                        </ul>
                    </div>
                    <div className="viewOrder_total">
                        <ul>
                            <li>Subtotal</li>
                            <li>$10.00</li>
                            <li>$1.00</li>
                            <li>$11.00</li>
                        </ul>
                    </div>
                </div>
                <div className="viewOrder_order">
                    <div className="viewOrder_header">
                        <h2 className="viewOrder_order-number">101</h2>
                        <h2 className="viewOrder_customer-name">Mark</h2>
                        <h2 className="viewOrder_countdown">15 min</h2>
                    </div>
                    <div className="viewOrder_details">
                        <ul>
                            <li className="viewOrder_list">
                                <div className="viewOrder_quantity">
                                    1
                            </div>
                                <div className="viewOrder_item-name">
                                    Hawaii
                            </div>
                                <div className="viewOrder_item-size">
                                    Medium
                            </div>
                            </li>
                            <li className="viewOrder_list">
                                <div className="viewOrder_quantity">
                                    1
                            </div>
                                <div className="viewOrder_item-name">
                                    Peperoni
                            </div>
                                <div className="viewOrder_item-size">
                                    Medium
                            </div>
                            </li>
                        </ul>
                    </div>
                    <div className="viewOrder_total">
                        <ul>
                            <li>Subtotal</li>
                            <li>$20.00</li>
                            <li>$2.00</li>
                            <li>$22.00</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    }
}

export default ViewOrder;