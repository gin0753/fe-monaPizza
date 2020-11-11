import React from "react";
import './style/OrderCreated.scss';
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar/SideBar";
import CartTotals from "../../components/Cart/CartTotal/CartTotal";
import Newsletter from "../../components/Newsletter/Newsletter";
import Media from "../../components/Media/Media";
import Footer from "../../components/Footer/Footer";
import Order from "./components/Order";


class OrderCreated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarIsClicked: false,
      cartIsClicked: false,
    };
  }

  toggleSideBar = () => {
    this.setState({
      sidebarIsClicked: !this.state.sidebarIsClicked,
    });
  };

  toggleCart = () => {
    this.setState({
      cartIsClicked: !this.state.cartIsClicked,
    });
  };
  render() {
    return (
      <section className='order-created w'>
        <SideBar sidestatus={this.state.sidebarIsClicked} />
        <CartTotals cartstatus={this.state.cartIsClicked} />
        <Header
          toggleSideBar={this.toggleSideBar}
          toggleCart={this.toggleCart}
          sidestatus={this.state.sidebarIsClicked}
          cartstatus={this.state.cartIsClicked}
        />
        <Order />
        <Newsletter />
        <Media />
        <Footer />
      </section>
    );
  }
}

export default OrderCreated;
