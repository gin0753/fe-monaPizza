import React from 'react';
import CartTotal from './Components/CartTotal';
import OrderResult from './Components/OrderResult';
import './shoppingCartStyle.css';

class ShoppingCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarIsClicked: false,
      cartIsClicked: false
    }
  }

  toggleSideBar = () => {
    this.setState({
      sidebarIsClicked: !this.state.sidebarIsClicked
    })
  }

  toggleCart = () => {
    this.setState({
      cartIsClicked: !this.state.cartIsClicked
    })
  }

  render() {
    return (
      <div className="shopping-cart">
        <div className="main flex-container">
          <OrderResult />
          <CartTotal />
        </div>
      </div>
    );
  }

} 


export default ShoppingCart;
