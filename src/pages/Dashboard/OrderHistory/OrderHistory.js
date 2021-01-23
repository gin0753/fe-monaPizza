import React from "react";
import "../Order.scss";
import CrumbHeader from "components/CrumbHeader";
import { connect } from "react-redux";
import { updateOrderHistory } from "action/orderHistoryPagination";
import OrderItem from "./components/orderItem";
import UserBar from "components/UserBar/UserBar/UserBar";
import { getOrder } from 'api/index';
import Pagination from './components/pagination';
class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalOrders: [],
      orders: [],
      filterStatus: "",
      searchOrder: "",
      sortOrder: "ascend",
      userId: sessionStorage.getItem('userID'),
      total: 0,
      page: 1,
      pageSize: 6
    };
  }

  updateHistory = async () => {
    const { page, pageSize, userId } = this.state;
    const res = await getOrder(userId, page, pageSize);
    const { orders, total } = res.data;
    this.setState({
      total: total,
      orders: orders,
      originalOrders: orders,
    })
  }

  componentDidMount = async () => {
    try{
      await this.updateHistory();
    }
    catch(err){
      console.log(err);
    }
  };

  componentDidUpdate = async (prevPage) => {
    if(prevPage.pageNum !== this.props.pageNum){
      await this.setState({
          page: this.props.pageNum
        })

      try{
        await this.updateHistory();
      }
      catch(err){
        console.log(err)
      }
    }
  }

  originOrder = () => {
    this.setState({
      filterStatus: "",
      orders: this.state.originalOrders,
    });
  };

  paidOrder = () => {
    this.setState({
      filterStatus: "Paid"
    });
  };

  unpaidOrder = () => {
    this.setState({
      filterStatus: "Unpaid"
    });
  };

  pendingOrder = () => {
    this.setState({
      filterStatus: "Pending"
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
      this.props.updateOrderHistory({
        pageNum: this.props.pageNum - 1
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
      this.props.updateOrderHistory({
        pageNum: this.props.pageNum + 1
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
          <CrumbHeader thisPage='Order History' path='order-history' />
          <div className='order-history__all'>
            <div className='order-history__all__userBar'>
              <UserBar props={this.props}/>
            </div>

            <div className='order-history__wrap'>
              <nav>
                <ul>
                  <li onClick={this.originOrder}>All Orders</li>
                  <li onClick={this.paidOrder}>Paid</li>
                  <li onClick={this.unpaidOrder}>Unpaid</li>
                  <li onClick={this.pendingOrder}>Pending</li>
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
                <li>Total</li>
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
    updateOrderHistory: { pageNum },
  } = state;
  return {
    pageNum
  };
};

const mapActionToProps = {
  updateOrderHistory
};

export default connect(mapStateToProps, mapActionToProps)(OrderHistory);

