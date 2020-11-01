import React from 'react';
import samplePizza from '../images/sample-pizza.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import StarRatings from './Rating';



class PizzaIntro extends React.Component {

    handleMinusClick = () => {
        console.log("minus");
    }

    handlePlusClick = () => {
        console.log("plus");
    }

    render() {

        return (
            <div className="pizza-intro-wrapper">
                <div className="nav-bar">
                    <button>
                        <FontAwesomeIcon icon={faAngleLeft} />
                        &nbsp;BACK TO MENU
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div className="pizza-details-wrapper">
                    <img src={samplePizza} alt="pizza" />
                    <div className="pizza-details">
                        <h1>Peri-Peri</h1>
                        <p className="rate">
                            <StarRatings num={4}/>
                        </p>
                        <p className="pizza-ingred">
                            Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions
                            & Bocconcini on a Tomato base, topped with Peri-Peri sauce.
                        </p>
                        <h4 className="pizza-sizes">
                            AVAILABLE SIZES
                        </h4>
                        <ul>
                            <li>
                                <div>9"</div>
                                <p>Small</p>
                            </li>
                            <li>
                                <div>12"</div>
                                <p>Medium</p>
                            </li>
                            <li>
                                <div>14"</div>
                                <p>Large</p>
                            </li>
                            <li>
                                <div>16"</div>
                                <p>Jumbo</p>
                            </li>
                            <li>
                                <div>18"</div>
                                <p>Party Size</p>
                            </li>
                        </ul>
                        <p className="pizza-price">Price: $21</p>
                        <p>QUANTITY</p>
                        <div className="pizza-quantity">
                            <a className="flex-item" onClick={this.handleMinusClick}><div >-</div></a>
                            <div className="flex-item">1</div>
                            <a className="flex-item" onClick={this.handlePlusClick}><div >+</div></a>
                            <button className="flex-item add-to-cart">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default PizzaIntro;