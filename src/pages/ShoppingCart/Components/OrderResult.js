import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import sample_pizza from './../images/sample_pizza.png';

import store from 'store/index';

import NoPizza from './NoPizza';
import { applyPromoCode, rmProductList, addPizzaList } from 'action';

import { removeCartItem, getPromoCode, getCartItem } from 'api';


class OrderResult extends React.Component {

    constructor() {
        super();

        const pageState = {
            hdDisplay: true,
            downArrow: true,
            wrnDisplay: false,
            validDisplay: false,
            codeNum: undefined,
            validColor: "white"
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

    handleRmPizzaClick = async (pizza, index) => {
        try {
            const id = pizza._id;
            await removeCartItem(id);
            await this.props.updateCart();

            const { totalPrice } = pizza;
            const { cartSubtotal } = this.state;

            const action = rmProductList(index, cartSubtotal, totalPrice);
            store.dispatch(action);

        } catch (e) {
            console.log(Object.entries(e))
        }

    }


    handleProChange = (e) => {
        this.setState({
            codeNum: e.target.value
        })
    }


    handlePromoCodeClick = async () => {

        const reg = /^[0-9]*$/;
        const { codeNum } = this.state;

        if (codeNum === undefined) {
            console.log("please enter a promotional code")
        } else {
            if (reg.test(codeNum) && codeNum.length === 6) {

                try {
                    const { data } = await getPromoCode(codeNum);
                    const { discount } = data;
                    const action = applyPromoCode(discount);
                    store.dispatch(action);

                    console.log("It is a valid code")
                    this.setState({
                        validColor: "green",
                        wrnDisplay: false,
                        validDisplay: true
                    })

                } catch (e) {
                    console.log(Object.entries(e))
                    console.log("It is an invalid code")
                    this.setState({
                        validColor: "red",
                        wrnDisplay: true,
                        validDisplay: false
                    })
                }

            } else {
                console.log("It is an invalid code")
                this.setState({
                    validColor: "red",
                    wrnDisplay: true,
                    validDisplay: false
                })
            }
        }
    }


    async componentDidMount() {

        const userId = sessionStorage.getItem('userID');

        try {
            // sample --- it should use userId to get the pizza list, not uuid
            const { data } = await getCartItem(userId, 1, 8);

            let subPrice = 0;
            data.map(item => {
                return subPrice = item.totalPrice + subPrice;
            })

            const action = addPizzaList(data, subPrice);
            store.dispatch(action);
        } catch (e) {
            console.log(Object.entries(e))
        }

    }


    render() {

        const displayStyle = {
            display: this.state.hdDisplay ? "none" : "block"
        }

        const inputStyle = {
            borderColor: this.state.validColor
        }

        const warningStyle = {
            display: this.state.wrnDisplay ? "block" : "none"
        }

        const validStyle = {
            display: this.state.validDisplay ? "block" : "none"
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
                                        <li key={index}>
                                            <div className="flex-item fa-times">
                                                <FontAwesomeIcon
                                                    className="close"
                                                    icon={faTimes}
                                                    onClick={() => this.handleRmPizzaClick(pizza, index)}
                                                />
                                            </div>
                                            <div className="flex-item pizza-name">
                                                <img src={sample_pizza} alt="sample_pizza"/>
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
                                                    <a href="/" onClick={this.handleDownClick}><FontAwesomeIcon icon={faAngleDoubleDown} /></a>
                                                }
                                                {
                                                    !this.state.downArrow &&
                                                    <a href="/" onClick={this.handleUpClick}><FontAwesomeIcon icon={faAngleDoubleUp} /></a>
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
                            <input type="text" id="country" name="country" defaultValue="United Kingdom (UK)" />
                            <input type="text" id="state" name="state" defaultValue="State / Country" />
                            <input type="text" id="postcode" name="state" defaultValue="Postcode / ZIP" />
                        </form>
                        <button>UPDATE TOTALS</button>
                    </div>
                    <div className="pro-code flex-item">
                        <p className="code-title">Promotional Code</p>
                        <form>
                            <input
                                type="text"
                                id="p-code"
                                name="p-code"
                                placeholder="Enter your promotional Code"
                                onChange={this.handleProChange}
                                style={inputStyle}
                            />
                        </form>
                        <p style={warningStyle}>Please enter a valid code !</p>
                        <p style={validStyle}>Valid promotional code !</p>
                        <button onClick={this.handlePromoCodeClick}>APPLY</button>
                    </div>
                </div>
            </div>
        )
    }

};

export default OrderResult;