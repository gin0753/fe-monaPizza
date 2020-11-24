import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { updateOrderInfo } from "../../../action/orderCreatedAction";

class Order extends React.Component {
  constructor(props){
    super(props)
    this.state={
      requestSuccess:true,
      loading:true,
    }
    console.log(this.props.orderId);
  }
  async componentDidMount() {
    console.log('111111111111111111111');

    setTimeout(()=>{
      console.log('11111111111111222222221111111')
    },2000)

    const res = await Axios.get(`/order/${this.props.orderId}`);
    if (res.status === 200) {
      console.log('111111111111111111111',res);
      const {
        data: {
          orderList,
          _id,
          orderPlacedTime,
          clientFirstName,
          clientLastName,
          billingAddr,
          city,
          postcode,
          clientEmail,
          contactNumber,
          cartSubTotal,
          totalPrice,
          shippingAddr,
        },
      } = res;
      this.props.updateOrderInfo({
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
      });
      this.setState({
        loading:false
      })
    }else{
      this.setState({
        requestSuccess:false,
      })
    }
  }

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
      orderId,
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
    } = this.props;

const {requestSuccess, loading} = this.state;

    const arrivalTime = this.getArrivalTime(orderPlacedTime).arrivalTime;
    const arrivalDate = this.getArrivalTime(orderPlacedTime).arrivalDate;

    if(!requestSuccess) return <h1 className="serverErr">404, Item missing...</h1>
    else return (
      <div className='containerAll'>
        <div className='order'>
          <div className='order_top josefin'>
            <h1 className='themeYellow abril'>Thank You!</h1>
            <h2 className='themeYellow'>
              Your order #{loading?"...":orderId.substring(orderId.length - 4)} has been placed.
            </h2>
            <p>
              Time Placed: {loading?"...":<span>{orderPlacedTime} AEST</span>}
            </p>
          </div>
          <ul className='order_middle'>
            <li>
              <div className='order_middle_collectMethod_icon'></div>
              <h2>Collection Method</h2>
              <h3>Deliver to:</h3>
              <p>{loading?"...":shippingAddr}</p>
              <p>
                {loading?"...":postcode} {loading?"...":city}
              </p>
              <p>{loading?"...":contactNumber}</p>
            </li>
            <li>
              <div className='order_middle_billingDetails_icon'></div>
              <h2>Billing Details</h2>
              <h3>
                {loading?"...":clientFirstName} {loading?"...":clientLastName}
              </h3>
              <p>{loading?"...":billingAddr}</p>
              <p>
                {loading?"...":city} {loading?"...":postcode}
              </p>
              <p>{loading?"...":contactNumber}</p>
            </li>
            <li>
              <div className='order_middle_estimatedArrival_icon'></div>
              <h2>Estimated Arrival</h2>
              <h3>{loading?"...":arrivalTime}</h3>
              <p>{loading?"...":arrivalDate}</p>
            </li>
          </ul>
          <div className='order_bottom'>
            <div className='order_bottom_list'>
              <h2 className='themeYellow abril'>Order List</h2>
              <ul>
                {loading?"...":orderList.map((item, index) => {
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
                    {loading?"...":<span>${cartSubTotal}.00</span>}
                  </li>
                  <li>
                    <span>Shipping:</span>
                    {loading?"...":<span>${cartSubTotal - totalPrice}.00</span>}
                  </li>
                  <li>
                    <span>Total:</span>
                    {loading?"...": <span>${totalPrice}.00</span>}
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
