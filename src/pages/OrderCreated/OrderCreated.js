import React from "react";
import "./style/OrderCreated.scss";
import Order from "./components/Order";
import Payment from './components/Payment';
class OrderCreated extends React.Component {

  render() {
    return (
      <section className='order-created w'>
        <Order />
        <Payment />
      </section>
    );
  }
}

export default OrderCreated;
