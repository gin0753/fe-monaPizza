import React from "react";
import "../Order.scss";
import CrumbHeader from "../../../components/CrumbHeader";
import { connect } from "react-redux";
import { updatePage } from "../../../action/viewOrderPagination";
import OrderItem from "./components/orderItem";
import UserBar from "../../../components/UserBar/UserBar/UserBar";
import Axios from 'axios';
import Pagination from './components/pagination';


class ViewOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalOrders: [],
      orders: [],
      filterStatus: "",
      searchOrder: "",
      sortOrder: "ascend",
      total: 0,
      page: this.props.pageNumber,
      pageSize: 6
    };
  }

  componentDidMount = async () => {
    try{
      const { page, pageSize } = this.state;
      const status = "Pending";
      const res = await Axios.post(`/order/${status}/${page}/${pageSize}`);
      const { orders, total } = res.data;
      await this.setState({
        total: total,
        orders: orders,
        originalOrders: orders,
      });
    }
    catch(err){
      console.log(err);
    }
  };

  componentDidUpdate = async (prevPage) => {
    if(prevPage.pageNumber !== this.props.pageNumber){
      await this.setState({
          page: this.props.pageNumber
        })
    }

    try{
      const { page, pageSize } = this.state;
      const status = "Pending";
      const res = await Axios.post(`/order/${status}/${page}/${pageSize}`);
      const { orders } = res.data;
      await this.setState({
        orders: orders,
      });
    }
    catch(err){
      console.log(err)
    }
  }

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

  leftArr = async(e) => {
    e.preventDefault();
    const { page } = this.state;
    if(page > 1){
      this.setState((prevPage) => {
        return {page: prevPage.page - 1}
      })
    }
  }

  rightArr = async(e) => {
    e.preventDefault();
    const { page, pageSize, total } = this.state;
    const pages = total/pageSize;
    if(page < pages){
      this.setState((prevPage) => {
        return {page: prevPage.page + 1}
      })
    }
  }

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
              <UserBar props={this.props}/>
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
                  filterResult.map((item) => <OrderItem key={item._id} details={item} />)}
                {this.state.sortOrder === "descend" &&
                  filterResult
                    .reverse()
                    .map((item) => <OrderItem key={item._id} details={item} />)}
              </ul>
            </div>
          </div>
          <div className="order-history__footer">
            <Pagination state={this.state} leftArr={this.leftArr} rightArr={this.rightArr}/>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    updatePage: { pageNumber },
  } = state;
  return {
    pageNumber
  };
};

const mapActionToProps = {
  updatePage
};

export default connect(mapStateToProps, mapActionToProps)(ViewOrder);
