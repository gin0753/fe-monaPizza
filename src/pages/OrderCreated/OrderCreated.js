import React from "react";
import "./style/OrderCreated.scss";
import Order from "./components/Order";

class OrderCreated extends React.Component {

  render() {
    return (
      <section className='order-created w'>
        <Order />
      </section>
    );
  }
}

export default OrderCreated;
