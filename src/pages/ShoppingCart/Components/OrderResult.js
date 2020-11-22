import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import sample_pizza from './../images/sample_pizza.png';

import store from '../../../store/index';

import NoPizza from './NoPizza';
import { applyPromoCode, rmProductList, addPizzaList } from '../../../action';

import Axios from 'axios';


class OrderResult extends React.Component {

    constructor() {
        super();

        const pageState = {
            hdDisplay: true,
            downArrow: true
        }

        this.state = {
            ...pageState,
            ...store.getState().shoppingCartReducer
        }

        store.subscribe(this.handleStoreChange)

    }

    handleStoreChange = () => {
        this.setState({
            ...store.getState().shoppingCartReducer
        })
    }


    handleDownClick = () => {
        this.setState({
            hdDisplay: false,
            downArrow: false
        })
    }

    handleUpClick = () => {
        this.setState({
            hdDisplay: true,
            downArrow: true
        })
    }

    handlePromoCodeClick = () => {
        // only a sample here
        const discount = 5;
        const action = applyPromoCode(discount);
        store.dispatch(action);
    }

    handleRmPizzaClick = async (pizza, index) => {

        try {
            const id = pizza._id;
            await Axios.delete(`http://localhost:8000/cart/${id}`);

            const { totalPrice } = pizza;
            const { cartSubtotal } = this.state;

            const action = rmProductList(index, cartSubtotal, totalPrice);
            store.dispatch(action);

            alert('Successfully delete the pizza')

        } catch (e) {
            console.log(Object.entries(e))
        }

    }

    async componentDidMount() {

        try {
            // sample --- it should use userId to get the pizza list, not uuid
            const { data } = await Axios.get('http://localhost:8000/cart/5fb5f99a43dacf343cc93724/1/10');

            let subPrice = 0;
            data.map(item => {
                subPrice = item.totalPrice + subPrice;
            })

            const action = addPizzaList(data, subPrice);
            store.dispatch(action);
        } catch (e) {
            console.log(Object.entries(e))
        }

    }


    render() {

        const displayStyle = {
            display: this.state.hdDisplay ? "none" : "block",
        }

        const { productList } = this.state;

        return (
            <div className="order-result flex-item">
                <div className="order-title">
                    <span className="product">PRODUCT</span>
                    <span className="price">PRICE</span>
                    <span className="qty">QTY</span>
                    <span className="total">TOTAL</span>
                </div>
                { productList.length === 0 && <NoPizza />}
                { productList.length !== 0 &&
                    <ul className="order-list">
                        {
                            productList.map((pizza, index) => {
                                return (
                                    <Fragment>
                                        <li>
                                            <div className="flex-item">
                                                <FontAwesomeIcon
                                                    className="close"
                                                    icon={faTimes}
                                                    onClick={() => this.handleRmPizzaClick(pizza, index)}
                                                />
                                            </div>
                                            <div className="flex-item pizza-name">
                                                <img src={sample_pizza} />
                                                <div className="pizza-info">
                                                    <p>{pizza.pizzaName}</p>
                                                    <p>SIZE: {pizza.pizzaSize}</p>
                                                </div>
                                            </div>
                                            <div className="flex-item price-num">${pizza.pizzaPrice}.00</div>
                                            <div className="flex-item qty-num">
                                                <span>{pizza.qty}</span>
                                            </div>
                                            <div className="flex-item price-total">${pizza.totalPrice}.00</div>
                                            <div className="hd-arrow-down">
                                                {
                                                    this.state.downArrow &&
                                                    <a href="javascript:;" onClick={this.handleDownClick}><FontAwesomeIcon icon={faAngleDoubleDown} /></a>
                                                }
                                                {
                                                    !this.state.downArrow &&
                                                    <a href="javascript:;" onClick={this.handleUpClick}><FontAwesomeIcon icon={faAngleDoubleUp} /></a>
                                                }

                                            </div>
                                            <div className="hd-price-num" style={displayStyle}>
                                                <span>PRICE</span>
                                                <span>${pizza.pizzaPrice}.00</span>
                                            </div>
                                            <div className="hd-qty-num" style={displayStyle}>
                                                <span>QTY</span>
                                                <span>{pizza.qty}</span>
                                            </div>
                                            <div className="hd-price-total" style={displayStyle}>
                                                <span>TOTAL</span>
                                                <span>${pizza.totalPrice}.00</span>
                                            </div>
                                        </li>

                                    </Fragment>
                                )
                            })
                        }
                    </ul>
                }
                <div className="ship-info flex-container">
                    <div className="cal-ship flex-item">
                        <p>Calculate Shipping</p>
                        <form>
                            <input type="text" id="country" name="country" value="United Kingdom (UK)" />
                            <input type="text" id="state" name="state" value="State / Country" />
                            <input type="text" id="state" name="state" value="Postcode / ZIP" />
                        </form>
                        <button>UPDATE TOTALS</button>
                    </div>
                    <div className="pro-code flex-item">
                        <p>Promotional Code</p>
                        <form>
                            <input type="text" id="p-code" name="p-code" value="Enter your promotional" />
                        </form>
                        <button onClick={this.handlePromoCodeClick}>APPLY</button>
                    </div>
                </div>
            </div>
        )
    }

};

export default OrderResult;