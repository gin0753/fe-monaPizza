import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import sample_pizza from './../images/sample_pizza.png';

class OrderResult extends React.Component {

    constructor() {
        super();

        this.state = {
            hdDisplay: true,
            downArrow: true
        }
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

    render() {

        const displayStyle = {
            display: this.state.hdDisplay ? "none" : "block",
        }

        return (
            <div className="order-result flex-item">
                <div className="order-title">
                    <span className="product">PRODUCT</span>
                    <span className="price">PRICE</span>
                    <span className="qty">QTY</span>
                    <span className="total">TOTAL</span>
                </div>
                <ul className="order-list">
                    <li>
                        <div className="flex-item">
                            <FontAwesomeIcon className="close" icon={faTimes} />
                        </div>
                        <div className="flex-item pizza-name">
                            <img src={sample_pizza} />
                            <div className="pizza-info">
                                <p>Moorish Lamb</p>
                                <p>SIZE: Large</p>
                            </div>
                        </div>
                        <div className="flex-item price-num">$19.00</div>
                        <div className="flex-item qty-num">
                            <span>1</span>
                        </div>
                        <div className="flex-item price-total">$19.00</div>
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
                            <span>$19.00</span>
                        </div>
                        <div className="hd-qty-num" style={displayStyle}>
                            <span>QTY</span>
                            <span>1</span>
                        </div>
                        <div className="hd-price-total" style={displayStyle}>
                            <span>TOTAL</span>
                            <span>$19.00</span>
                        </div>
                    </li>
                </ul>
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
                        <button>APPLY</button>
                    </div>
                </div>
            </div>
        )
    }

};

export default OrderResult;