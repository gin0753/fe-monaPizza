import React from "react";
import { connect } from "react-redux";
import Axios from "axios";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNo: "",
      orderPlacedTime: "",
      clientFirstName: "",
      clientLastName: "",
      billingAddr: "",
      city: "",
      postcode: "",
      contactNumber: "",
      clientEmail: "",
    };
  }

  async componentDidMount() {
    const userId = sessionStorage.getItem("userID");
    const res = await Axios.get(`/order/${userId}`);
    console.log(res);
    if (res.status === 200) {
      this.setState({
        orderNo:res.data._id,
        orderPlacedTime:res.data.orderPlacedTime,
      })
    }
  }

  render() {
    const { productList, cartSubtotal, orderTotal } = this.props;

    const {_id} = this.state.orderPlacedTime;
    return (
      <div className='containerAll'>
        <div className='order'>
          <div className='order_top josefin'>
            <h1 className='themeYellow abril'>Thank You!</h1>
            <h2 className='themeYellow'>Your order #{_id} has been placed.</h2>
            <p>
              Time Placed: <span>08/11/2020 8:25 PM AEST</span>
            </p>
          </div>
          <ul className='order_middle'>
            <li>
              <div className='order_middle_collectMethod_icon'></div>
              <h2>Collection Method</h2>
              <h3>Deliver to:</h3>
              <p>2 George Street</p>
              <p>Brisbane 4000 QLD</p>
              <p>0412 123 456</p>
            </li>
            <li>
              <div className='order_middle_billingDetails_icon'></div>
              <h2>Billing Details</h2>
              <h3>James Bond</h3>
              <p>37 Sinnathamby Blvd</p>
              <p>Springfield Central 4300 QLD</p>
              <p>0421 978654</p>
            </li>
            <li>
              <div className='order_middle_estimatedArrival_icon'></div>
              <h2>Estimated Arrival</h2>
              <h3>8:40 PM</h3>
              <p>08/11/2020</p>
            </li>
          </ul>
          <div className='order_bottom'>
            <div className='order_bottom_list'>
              <h2 className='themeYellow abril'>Order List</h2>
              <ul>
                {productList.map((item, index) => {
                  return (
                    <li key={index}>
                      <span>
                        {item.name} x {item.qty}
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
                    <span>${cartSubtotal}.00</span>
                  </li>
                  <li>
                    <span>Shipping:</span>
                    <span>$9.00</span>
                  </li>
                  <li>
                    <span>Total:</span>
                    <span>${orderTotal}.00</span>
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
  } = state;
  return {
    cartSubtotal,
    orderTotal,
    productList,
  };
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Order);
