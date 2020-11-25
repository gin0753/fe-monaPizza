import React from 'react';
import './CartTotal.css'
import axios from 'axios';
import { PizzaImages } from '../../../PizzaImages' 
import cross from '../../../images/times-solid.svg';
import { Link } from 'react-router-dom';

class CartTotal extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            orderList: [],
            amountChanged: 0
        }
    }

    handleClick() {
        this.props.toggleCart();
    }

    showPizzaList = async () => {
        const userId = sessionStorage.getItem('userID');
        try{
            const response = await axios.get(`/cart/${userId}/1/10`);
            if(response.status === 200){
                const orderList = response.data;
                const pizzaImage = PizzaImages;
                orderList.forEach( ele => {
                    pizzaImage.forEach( i => {
                      if(i.PizzaName === ele.pizzaName){
                        let index = pizzaImage.indexOf(i);
                        ele.Img = pizzaImage[index].Img;
                      }
                    })
                  })
                this.setState({
                    orderList: orderList
                })
            }
        }
        catch(err){
            console.log(err)
        }
    }

    removePizzas = async(item, index) => {
        const pizzaID = item._id;
        await axios.delete(`/cart/${pizzaID}`);
        await this.showPizzaList();
    }

    componentDidMount = async () => {
        await this.showPizzaList()
    }

    componentDidUpdate = () => {
        const { amountChanged } = this.props;
        if( amountChanged !== this.state.amountChanged ){
            this.setState({
                amountChanged: amountChanged
            })
            this.showPizzaList();
        }
    }

    render() {
        const orderList = this.state.orderList;
        let totalPrice = 0;
        for(const i of orderList){
            totalPrice += i.totalPrice;
        }
        return <div className="Checkout">
            <div className={this.props.cartstatus ? "carttotal cartactive" : "carttotal"}>
                <h3>Cart Totals</h3>
                <hr />
                <ul className="carttotal--pizza">
                    {orderList.map((item, index) => {
                        return (
                            <>
                                <li key={index}>
                                    <a onClick={() => this.removePizzas(item, index)}><img src={cross} alt="cross" /></a>
                                    <img src={item.Img} alt={item.text} />
                                    <div>
                                        <h5>{item.pizzaName}</h5>
                                        <p><span className="subtitle">SIZE:</span> {item.pizzaSize}</p>
                                        <p><span className="red">{item.qty}x</span> ${item.pizzaPrice}</p>
                                    </div>
                                </li>
                                <hr />
                            </>
                        )
                    })}
                </ul>
                <dl>
                    <dt>
                        <h4><span className="red">Order Total</span></h4>
                    </dt>
                    <dd>
                        <h4><span className="red">${totalPrice}</span></h4>
                    </dd>
                </dl>
                <Link to="/shopping-cart"><button className="buttonblack" onClick={this.handleClick}>VIEW SHOPPING CART</button></Link>
                <Link to="/checkout"><button onClick={this.handleClick}>CHECKOUT</button></Link>
            </div>
        </div >
    }
}

export default CartTotal;