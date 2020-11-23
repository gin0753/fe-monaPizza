import React, { Component } from 'react';
import './ViewOrder.css';
import Header from '../../components/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import Media from '../../components/Media/Media';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar/SideBar';
import CartTotals from '../../components/Cart/CartTotal/CartTotal';

class ViewOrder extends Component {

    render() {
        return <div className="viewOrder">
            <SideBar sidestatus={this.state.sidebarIsClicked}/>
            <CartTotals cartstatus={this.state.cartIsClicked}/>
            <Header toggleSideBar={this.toggleSideBar} toggleCart={this.toggleCart} 
            sidestatus={this.state.sidebarIsClicked} cartstatus={this.state.cartIsClicked}/>
            <div className="title">
                <h1 className="viewOrder_page-title">Orders</h1>
                <div className="viewOrder_navbar">
                    <div className="navbar__element"><p>Incoming</p></div>
                    <div className="navbar__element"><p>Preparing</p></div>
                    <div className="navbar__element"><p>Ready</p></div>
                    <div className="navbar__element"><p>History</p></div>
                </div>
            </div>

            <div className="viewOrder_order-container">
                <div className="viewOrder_order">
                    <div className="viewOrder_order__header">
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
                <div className="viewOrder_order">
                    <div className="viewOrder_order__header">
                        <h2 className="viewOrder_order-number">101</h2>
                        <h2 className="viewOrder_customer-name">Sn</h2>
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
                                    M
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
                                    M
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
                                <div className="viewOrder_earnings__detail">$20.00</div>
                            </li>
                            <li>
                                <div className="viewOrder_earnings__detail">$2.00</div>
                            </li>
                            <li className="viewOrder_earnings__total">
                                <div className="viewOrder_earnings__detail">$22.00</div>
                            </li>
                        </ul>
                    </div>
                    <p className="viewOrder_phone">
                        0421 123 456
                    </p>
                </div>
                <div className="viewOrder_order">
                    <div className="viewOrder_order__header">
                        <h2 className="viewOrder_order-number">101</h2>
                        <h2 className="viewOrder_customer-name">Sn</h2>
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
                                    M
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
                                    M
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
                                <div className="viewOrder_earnings__detail">$20.00</div>
                            </li>
                            <li>
                                <div className="viewOrder_earnings__detail">$2.00</div>
                            </li>
                            <li className="viewOrder_earnings__total">
                                <div className="viewOrder_earnings__detail">$22.00</div>
                            </li>
                        </ul>
                    </div>
                    <p className="viewOrder_phone">
                        0421 123 456
                    </p>
                </div>
                <div className="viewOrder_order">
                    <div className="viewOrder_order__header">
                        <h2 className="viewOrder_order-number">101</h2>
                        <h2 className="viewOrder_customer-name">Sn</h2>
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
                                    M
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
                                    M
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
                                <div className="viewOrder_earnings__detail">$20.00</div>
                            </li>
                            <li>
                                <div className="viewOrder_earnings__detail">$2.00</div>
                            </li>
                            <li className="viewOrder_earnings__total">
                                <div className="viewOrder_earnings__detail">$22.00</div>
                            </li>
                        </ul>
                    </div>
                    <p className="viewOrder_phone">
                        0421 123 456
                    </p>
                </div>
                <div className="viewOrder_order">
                    <div className="viewOrder_order__header">
                        <h2 className="viewOrder_order-number">101</h2>
                        <h2 className="viewOrder_customer-name">Sn</h2>
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
                                    M
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
                                    M
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
                                <div className="viewOrder_earnings__detail">$20.00</div>
                            </li>
                            <li>
                                <div className="viewOrder_earnings__detail">$2.00</div>
                            </li>
                            <li className="viewOrder_earnings__total">
                                <div className="viewOrder_earnings__detail">$22.00</div>
                            </li>
                        </ul>
                    </div>
                    <p className="viewOrder_phone">
                        0421 123 456
                    </p>
                </div>
            </div>
            <Newsletter />
            <Media />
            <Footer />
        </div>
    }
}

export default ViewOrder;