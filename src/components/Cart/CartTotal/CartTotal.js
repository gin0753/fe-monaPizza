import React from 'react';
import './CartTotal.css'
import { getCartItem } from '../../../api/index';
import { PizzaImages } from '../../../PizzaImages'; 
import { Link } from 'react-router-dom';
import CartItem from './components/cartItem';
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
            if(userId){
                const response = await getCartItem(userId, 1, 8);
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
        }
        catch(err){
            console.log(err)
        }
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
                    {orderList.map( item => {
                        return (
                            <>
                                <CartItem key={item._id} details={item} />
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
                        <h4><span className="red">${totalPrice}.00</span></h4>
                    </dd>
                </dl>
                <Link to="/shopping-cart"><button className="buttonblack" onClick={this.handleClick}>VIEW SHOPPING CART</button></Link>
                <Link to="/checkout"><button onClick={this.handleClick}>CHECKOUT</button></Link>
            </div>
        </div >
    }
}

export default CartTotal;