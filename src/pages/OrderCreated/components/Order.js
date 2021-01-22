import React from "react";
import { connect } from "react-redux";
import { updateOrderInfo } from "action/orderCreatedAction";

class Order extends React.Component {
  
  componentDidMount = async () => {
    const { updateOrderInfo, orderId } = this.props;
    await updateOrderInfo(orderId);
  };

  getArrivalTime = (timeOrder) => {
    const year = timeOrder.substring(6, 10);
    const month = timeOrder.substring(3, 5);
    const day = timeOrder.substring(0, 2);
    const time = timeOrder.substring(timeOrder.length - 8);
    let transformTime = `${year}-${month}-${day} ${time}`;
    const timestamp = +new Date(transformTime);

    //arrival time stamp
    const newTimeStamp = timestamp + 900000;
    const arrTime = new Date(newTimeStamp);
    const arrYear = arrTime.getFullYear();
    const arrMonth = arrTime.getMonth() + 1;
    const arrDay = arrTime.getDate();
    const arrHour =
      arrTime.getHours() < 10 ? "0" + arrTime.getHours() : arrTime.getHours();
    const arrMinutes =
      arrTime.getMinutes() < 10
        ? "0" + arrTime.getMinutes()
        : arrTime.getMinutes();
    const arrSeconds =
      arrTime.getSeconds() < 10
        ? "0" + arrTime.getSeconds()
        : arrTime.getSeconds();
    const arrivalTime = `${arrHour}:${arrMinutes}:${arrSeconds}`;
    const arrivalDate = `${arrDay}/${arrMonth}/${arrYear}`;
    return { arrivalTime, arrivalDate };
  };

  render() {
    const {
      loading,
      orderId,
      orderList,
      orderPlacedTime,
      clientFirstName,
      clientLastName,
      billingAddr,
      city,
      postcode,
      contactNumber,
      cartSubTotal,
      totalPrice,
      shippingAddr,
    } = this.props;

    const arrivalTime = this.getArrivalTime(orderPlacedTime).arrivalTime;
    const arrivalDate = this.getArrivalTime(orderPlacedTime).arrivalDate;

      if (loading) return <h1 className='serverErr'>Loading...</h1>;
      else
      return (
        <div className={this.props.orderPlaced ? 'afterPayment' : 'beforePayment'}>
          <div className='order'>
          {!this.props.orderPlaced && 
            <div className='order_top josefin'>
              <h1 className='themeYellow abril'>Order Preview</h1>
            </div>}
          {this.props.orderPlaced && 
            <div className='order_top josefin'>
              <h1 className='themeYellow abril'>Thank You!</h1>
                <h2 className='themeYellow'>
                  Your order #{orderId.substring(orderId.length - 4)} has been
                  placed.
                </h2>
                <p>
                  Time Placed: <span>{orderPlacedTime} AEST</span>
                </p>
            </div>}
            <ul className='order_middle'>
              <li>
                <div className='order_middle_collectMethod_icon'></div>
                <h2>Collection Method</h2>
                <h3>Deliver to:</h3>
                <p>{shippingAddr}</p>
                <p>
                  {postcode} {city}
                </p>
                <p>{contactNumber}</p>
              </li>
              <li>
                <div className='order_middle_billingDetails_icon'></div>
                <h2>Billing Details</h2>
                <h3>
                  {clientFirstName} {clientLastName}
                </h3>
                <p>{billingAddr}</p>
                <p>
                  {city} {postcode}
                </p>
                <p>{contactNumber}</p>
              </li>
              {this.props.orderPlaced && 
                <li>
                <div className='order_middle_estimatedArrival_icon'></div>
                <h2>Estimated Arrival</h2>
                <h3>{arrivalTime}</h3>
                <p>{arrivalDate}</p>
              </li>
              }
              {!this.props.orderPlaced && <></>}
            </ul>
            <div className='order_bottom'>
              <div className='order_bottom_list'>
                <h2 className='themeYellow abril'>Order List</h2>
                <ul>
                  {orderList.map((item, index) => {
                    return (
                      <li key={index}>
                        <span>
                          {item.pizzaName} x {item.qty}
                        </span>
                        <span>${item.totalPrice}.00</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='order_bottom_summary'>
                <div className='order_bottom_summary_wrap'>
                  <h2 className='themeYellow abril'>Order Summary</h2>
                  <ul>
                    <li>
                      <span>Subtotal:</span>
                      <span>${cartSubTotal}.00</span>
                    </li>
                    <li>
                      <span>Shipping:</span>
                      <span>$0.00</span>
                    </li>
                    <li>
                    <span>Discount:</span>
                    <span>${cartSubTotal - totalPrice}.00</span>
                  </li>
                    <li>
                      <span>Total:</span>
                      <span>${totalPrice}.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  const {
    shoppingCartReducer: { productList, cartSubtotal, orderTotal },
    updateOrderId: { orderId },
    orderCreatedReducer: {
      loading,
      orderList,
      _id,
      orderPlacedTime,
      clientFirstName,
      clientLastName,
      billingAddr,
      city,
      postcode,
      contactNumber,
      cartSubTotal,
      totalPrice,
      shippingAddr,
    },
  } = state;
  return {
    cartSubtotal,
    orderTotal,
    productList,
    orderId,
    loading,
    orderList,
    _id,
    orderPlacedTime,
    clientFirstName,
    clientLastName,
    billingAddr,
    city,
    postcode,
    contactNumber,
    cartSubTotal,
    totalPrice,
    shippingAddr,
  };
};

const mapActionsToProps = {
  updateOrderInfo,
};

export default connect(mapStateToProps, mapActionsToProps)(Order);
