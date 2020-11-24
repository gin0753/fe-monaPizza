import React from "react";
import "../../Form.css";
import options from "../../../../../../images/payment-options.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateOrderId } from "../../../../../../action/updateOrderID";
import axios from "axios";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readTerm: false,
    };
  }

  acceptTerm = () => {
    this.setState({
      readTerm: !this.state.readTerm,
    });
  };

  handleClick = async () => {
    let {
      clientFirstName,
      clientLastName,
      billingAddr,
      city,
      postcode,
      clientEmail,
      contactNumber,
      shippingAddr,
    } = this.props.inputValue;
    if (shippingAddr === "") {
      shippingAddr = billingAddr;
    }

    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const orderPlacedTime = `${d.toLocaleDateString()} ${hours}:${minutes}:${seconds}`;

    const userId = sessionStorage.getItem("userID");
    const res = await axios.get(`/cart/${userId}/1/10`);
    const orderList = res.data;
    const discount = 5;
    let cartSubTotal = 0;
    for (const i of orderList) {
      cartSubTotal += i.totalPrice;
      i.status = "Confirmed";
    }

    const totalPrice = cartSubTotal - discount;

    const userInfo = {
      orderPlacedTime,
      clientFirstName,
      clientLastName,
      billingAddr,
      city,
      postcode,
      clientEmail,
      contactNumber,
      orderList,
      discount,
      cartSubTotal,
      totalPrice,
      shippingAddr,
    };

    const orderMsg = await axios.post("/order", userInfo);
    const orderId = orderMsg.data._id;
    const { updateOrderId } = this.props;
    updateOrderId({
      orderId: orderId,
    });
  };

  render() {
    return (
      <div className='ordercontainer__payment'>
        <h3>Payment Methods</h3>

        <form>
          <div className='radio'>
            <input type='radio' id='bank' name='payment' value='bank' />
            <div className='radio__custom'></div>
            <label className='inlinelabel' htmlFor='bank'>
              Direct Bank Transfer
            </label>
          </div>

          <div className='ordercontainer__payment--paymentintro'>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order won't be shipped until
            the funds have cleared in our account.
          </div>

          <div className='radio'>
            <input type='radio' id='cheque' name='payment' value='cheque' />
            <div className='radio__custom'></div>
            <label className='inlinelabel' htmlFor='cheque'>
              Cheque Payment
            </label>
          </div>

          <div className='radio'>
            <input type='radio' id='paypal' name='payment' value='paypal' />
            <div className='radio__custom'></div>
            <label className='inlinelabel' htmlFor='paypal'>
              PayPal
            </label>
          </div>

          <div className='ordercontainer__payment--optionwrapper'>
            <i>
              <img src={options} alt='payment_options' />
            </i>
            <h6>
              <span>What is PayPal?</span>
            </h6>
          </div>

          <input type='checkbox' id='accepterm' name='accepterm' />
          <label
            className='inlinelabel'
            htmlFor='accepterm'
            onClick={this.acceptTerm}
          >
            I have read and accept the
          </label>
          <p>
            <span>Term & Conditions</span>
          </p>

          {this.state.readTerm ? (
            <Link to='/order-created'>
              <button
                className='ordercontainer__payment--orderbutton'
                type='button'
                onClick={this.handleClick}
              >
                PLACE ORDER
              </button>
            </Link>
          ) : (
            <Link to='/checkout'>
              <button
                className='ordercontainer__payment--orderbutton inactive'
                type='button'
                onClick={this.handleClick}
                disabled
              >
                PLACE ORDER
              </button>
            </Link>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    updateOrderId: { orderId },
  } = state;
  return {
    orderId,
  };
};

const mapActionToProps = {
  updateOrderId,
};

export default connect(mapStateToProps, mapActionToProps)(Payment);
