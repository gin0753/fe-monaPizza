import React from "react";
import "./style/OrderHistory.scss";
import CrumbHeader from "../../components/CrumbHeader";
import { connect } from "react-redux";
import { fetchOrder } from '../../action/historyActions';
import OrderItem from './components/orderItem';

class OrderHistory extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      filterStatus: '',
      searchOrder: '',
      sortOrder: 'ascend'
    }
  }

  componentDidMount = async() => {
    const { fetchOrder } = this.props;
    await fetchOrder();
    const { orders: { orders } } = this.props;
    this.setState({
      orders: orders
    })
  }

  originOrder = () => {
    this.setState({
      filterStatus: ''
    })
  }

  paidOrder = () => {
    this.setState({
      filterStatus: 'Paid'
    })
  }

  unpaidOrder = () => {
    this.setState({
      filterStatus: 'Unpaid'
    })
  }

  pendingOrder = () => {
    this.setState({
      filterStatus: 'Pending'
    })
  }

  handleChange = (e) => {
    this.setState({
      searchOrder: e.target.value
    })
  }

  searchOrder = (e) => {
    e.preventDefault();
    let matchResult = this.state.orders.filter (
      order => order._id.substring(order._id.length - 4) === this.state.searchOrder
    )
    if (matchResult.length > 0){
      this.setState({
        orders: matchResult
      })
    }
    else{
      const { orders: { orders } } = this.props;
      this.setState({
        orders: orders
      })
    }
  }

  ascendOrder = () => {
    this.setState({
      sortOrder: 'ascend'
    })
  }

  descendOrder = () => {
    this.setState({
      sortOrder: 'descend'
    })
  }

  render() {
    let filterResult = this.state.orders.filter(
      (order) => {
        return order.orderStatus.indexOf(this.state.filterStatus) !== -1;
      }
    );
    return (
      <section className='order-history'>
        <CrumbHeader thisPage='order History' path='order-history' />
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
            {this.state.sortOrder === 'ascend' && 
            filterResult.map((item) => 
              (
              <OrderItem details={item}/>
              )
              )}
            {this.state.sortOrder === 'descend' && 
            filterResult.reverse().map((item) => 
              (
              <OrderItem details={item}/>
              )
              )}
          </ul>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const { historyReducer: { loading, orders } } = state;
  return {
    loading,
    orders
  }
};

const mapActionToProps = dispatch => {
  return {
    fetchOrder: () => dispatch(fetchOrder())
  }
}

export default connect(mapStateToProps,mapActionToProps)(OrderHistory);
