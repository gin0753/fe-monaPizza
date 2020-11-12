import React from 'react';
import samplePizza from '../images/sample-pizza.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import StarRatings from './Rating';

import { connect } from 'react-redux';
import { addAPizza, deleteAPizza, changePizzaSize } from '../../../action';



class PizzaIntro extends React.Component {

    constructor() {
        super();

        this.state = {
            smallColor: "white",
            mediumColor: "white",
            largeColor: "red",
            jumboColor: "white",
            partyColor: "white"
        }
    }


    handleMinusClick = () => {
        const { deleteAPizza } = this.props;
        deleteAPizza();
    }

    handlePlusClick = () => {
        const { addAPizza } = this.props;
        addAPizza();
    }

    handleSmallClick = () => {
        const { changePizzaSize, size } = this.props;
        changePizzaSize("Small");
        this.setState({
            smallColor: "red",
            mediumColor: "white",
            largeColor: "white",
            jumboColor: "white",
            partyColor: "white"
        })
    }

    handleMediumClick = () => {
        const { changePizzaSize } = this.props;
        changePizzaSize("Medium");
        this.setState({
            smallColor: "white",
            mediumColor: "red",
            largeColor: "white",
            jumboColor: "white",
            partyColor: "white"
        })
    }

    handleLargeClick = () => {
        const { changePizzaSize } = this.props;
        changePizzaSize("Large");
        this.setState({
            smallColor: "white",
            mediumColor: "white",
            largeColor: "red",
            jumboColor: "white",
            partyColor: "white"
        })
    }

    handleJumboClick = () => {
        const { changePizzaSize } = this.props;
        changePizzaSize("Jumbo");
        this.setState({
            smallColor: "white",
            mediumColor: "white",
            largeColor: "white",
            jumboColor: "red",
            partyColor: "white"
        })
    }

    handlePartyClick = () => {
        const { changePizzaSize } = this.props;
        changePizzaSize("Party Size");
        this.setState({
            smallColor: "white",
            mediumColor: "white",
            largeColor: "white",
            jumboColor: "white",
            partyColor: "red"
        })
    }

    render() {

        const { smallColor, mediumColor, largeColor, jumboColor, partyColor } = this.state;
        
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
                        <h1>{this.props.pizzaName}</h1>
                        <p className="rate">
                            <StarRatings num={4} />
                        </p>
                        <p className="pizza-ingred">{this.props.pizzaIngredient}</p>
                        <h4 className="pizza-sizes">
                            AVAILABLE SIZES
                        </h4>
                        <ul>
                            <a onClick={this.handleSmallClick}>
                                <li>
                                    <div style={{ color: `${smallColor}`, borderColor: `${smallColor}` }}>9"</div>
                                    <p style={{ color: `${smallColor}` }}>Small</p>
                                </li>
                            </a>
                            <a onClick={this.handleMediumClick}>
                                <li>
                                    <div style={{ color: `${mediumColor}`, borderColor: `${mediumColor}` }}>12"</div>
                                    <p style={{ color: `${mediumColor}` }}>Medium</p>
                                </li>
                            </a>
                            <a onClick={this.handleLargeClick}>
                                <li>
                                    <div style={{ color: `${largeColor}`, borderColor: `${largeColor}` }}>14"</div>
                                    <p style={{ color: `${largeColor}` }}>Large</p>
                                </li>
                            </a>
                            <a onClick={this.handleJumboClick}>
                                <li>
                                    <div style={{ color: `${jumboColor}`, borderColor: `${jumboColor}` }}>16"</div>
                                    <p style={{ color: `${jumboColor}` }}>Jumbo</p>
                                </li>
                            </a>
                            <a onClick={this.handlePartyClick}>
                                <li>
                                    <div style={{ color: `${partyColor}`, borderColor: `${partyColor}` }}>18"</div>
                                    <p style={{ color: `${partyColor}` }}>Party Size</p>
                                </li>
                            </a>
                        </ul>
                        <p className="pizza-price">Price: ${this.props.price}</p>
                        <p>QUANTITY</p>
                        <div className="pizza-quantity">
                            <a className="flex-item" onClick={this.handleMinusClick}><div >-</div></a>
                            <div className="flex-item">{this.props.quantity}</div>
                            <a className="flex-item" onClick={this.handlePlusClick}><div >+</div></a>
                            <button className="flex-item add-to-cart">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    const { productDetailsReducer: { pizzaName, pizzaIngredient, price, size, quantity } } = state
    return {
        pizzaName,
        pizzaIngredient,
        price,
        quantity,
        size
    }
}

const mapActionsToProps = {
    addAPizza,
    deleteAPizza,
    changePizzaSize
}

export default connect(mapStateToProps, mapActionsToProps)(PizzaIntro)