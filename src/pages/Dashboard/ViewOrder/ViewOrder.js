import React from "react";
import "../Order.scss";
import CrumbHeader from "../../../components/CrumbHeader";
import { connect } from "react-redux";
import { fetchOrder } from "../../../action/historyActions";
import OrderItem from "./components/orderItem";
import UserBar from "../../../components/UserBar/UserBar/UserBar";
import Axios from 'axios';

class ViewOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalOrders: [],
      orders: [],
      filterStatus: "",
      searchOrder: "",
      sortOrder: "ascend",
    };
  }

  componentDidMount = async () => {
    try{
      const status = "Pending";
      const res = await Axios.get(`/order/${status}`);
      const orders = res.data;
      this.setState({
        orders: orders,
        originalOrders: orders,
      });
    }
    catch(err){
      console.log(err);
    }
  };

  originOrder = () => {
    this.setState({
      filterStatus: "",
      orders: this.state.originalOrders,
    });
  };

  pendingOrder = () => {
    this.setState({
      filterStatus: "Pending",
    });
  };

  paidOrder = () => {
    this.setState({
      filterStatus: "Paid",
      orders: this.state.originalOrders,
    });
  };

  handleChange = (e) => {
    this.setState({
      searchOrder: e.target.value,
    });
  };

  searchOrder = (e) => {
    e.preventDefault();
    let matchResult = this.state.originalOrders.filter(
      (order) =>
        order._id.substring(order._id.length - 4) === this.state.searchOrder
    );
    if (matchResult.length > 0) {
      this.setState({
        orders: matchResult,
      });
    } else {
      this.setState({
        orders: [],
      });
    }
  };

  ascendOrder = () => {
    this.setState({
      sortOrder: "ascend",
    });
  };

  descendOrder = () => {
    this.setState({
      sortOrder: "descend",
    });
  };

  render() {
    let filterResult = this.state.orders.filter((order) => {
      return order.orderStatus.indexOf(this.state.filterStatus) !== -1;
    });
    return (
      <>
        <section className='order-history'>
          <CrumbHeader thisPage='View Order' path='/view-order' />
          <div className='order-history__all'>
            <div className='order-history__all__userBar'>
              <UserBar />
            </div>

            <div className='order-history__wrap'>
              <nav>
                <ul>
                  <li onClick={this.originOrder}>All Orders</li>
                  <li onClick={this.pendingOrder}>Preparing</li>
                  <li onClick={this.paidOrder}>Ready</li>
                </ul>
              </nav>
              <div className='order-history__wrap__handle'>
                <form>
                  <input onChange={this.handleChange}></input>
                  <button onClick={this.searchOrder}>Search Orders</button>
                </form>
                <aside>
                  <p>Sort by Time:</p>
                  <span onClick={this.ascendOrder}>↑</span>
                  <span onClick={this.descendOrder}>↓</span>
                </aside>
              </div>
              <ul className='order-history__wrap__title'>
                <li>Items</li>
                <li>Toppings</li>
                <li>Status</li>
              </ul>
              <ul className='order-history__wrap__orders'>
                {this.state.sortOrder === "ascend" &&
                  filterResult.map((item) => <OrderItem details={item} />)}
                {this.state.sortOrder === "descend" &&
                  filterResult
                    .reverse()
                    .map((item) => <OrderItem details={item} />)}
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    historyReducer: { loading, orders },
  } = state;
  return {
    loading,
    orders,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    fetchOrder: () => dispatch(fetchOrder()),
  };
};

export default connect(mapStateToProps, mapActionToProps)(ViewOrder);
