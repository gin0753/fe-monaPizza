import React from 'react';
import CartTotal from './Components/CartTotal';
import OrderResult from './Components/OrderResult';
import './shoppingCartStyle.css';
import Header from '../../components/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import Media from '../../components/Media/Media';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar/SideBar';
import CartTotals from '../../components/Cart/CartTotal/CartTotal';

class ShoppingCart extends React.Component{

  constructor(props){
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
        <SideBar sidestatus={this.state.sidebarIsClicked}/>
        <CartTotals cartstatus={this.state.cartIsClicked}/>
        <Header toggleSideBar={this.toggleSideBar} toggleCart={this.toggleCart} 
        sidestatus={this.state.sidebarIsClicked} cartstatus={this.state.cartIsClicked}/>
        <div className="main flex-container">
          <OrderResult />
          <CartTotal />
        </div>
        <Newsletter />
        <Media />
        <Footer />
      </div>
    );
  }
} 

export default ShoppingCart;
