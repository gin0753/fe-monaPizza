import React from "react";
import "./style/OrderHistory.scss";
import CrumbHeader from "../../components/CrumbHeader";

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
  }


  
  render() {
    return (
      <section className='order-history'>
        <CrumbHeader thisPage='order History' path='order-history' />
        <div className='order-history__wrap'>
          <nav>
            <ul>
              <li>All Orders</li>
              <li>Paid</li>
              <li>Unpaid</li>
              <li>Pending</li>
            </ul>
          </nav>
          <ul className='order-history__wrap__title'>
            <li>Items</li>
            <li>Total</li>
            <li>Status</li>
          </ul>
          <div className='order-history__wrap__handle'>
            <form>
              <input></input>
              <button type='submit'>Search Orders</button>
            </form>
            <aside>
              <p>Sort by Time:</p>
              <span>↑</span>
              <span>↓</span>
            </aside>
          </div>
          <ul className='order-history__wrap__orders'>
            <li className='order-history__wrap__orders__item'>
              <h2>
                <strong>2020-11-17 </strong>order number: #3453
              </h2>
              <div className='order-bottom'>
                <ul>
                  <li>
                    <span>Meat Deluxe x 1</span>
                    <span>$20</span>
                  </li>
                  <li>
                    <span>Kimchi BBQ Chicken x 1</span>
                    <span>$31</span>
                  </li>
                </ul>
                <div className='total-price'>
                  <h3>$35</h3>
                </div>
                <div className='order-status'>
                  <h3>Pending</h3>
                </div>
              </div>
            </li>
            <li className='order-history__wrap__orders__item'>
              <h2>
                <strong>2020-11-17 </strong>order number: #3453
              </h2>
              <div className='order-bottom'>
                <ul>
                  <li>
                    <span>Meat Deluxe x 1</span>
                    <span>$20</span>
                  </li>
                  <li>
                    <span>Kimchi BBQ Chicken x 1</span>
                    <span>$31</span>
                  </li>
                </ul>
                <div className='total-price'>
                  <h3>$35</h3>
                </div>
                <div className='order-status'>
                  <h3>Pending</h3>
                </div>
              </div>
            </li>
            <li className='order-history__wrap__orders__item'>
              <h2>
                <strong>2020-11-17 </strong>order number: #3453
              </h2>
              <div className='order-bottom'>
                <ul>
                  <li>
                    <span>Meat Deluxe x 1</span>
                    <span>$20</span>
                  </li>
                  <li>
                    <span>Kimchi BBQ Chicken x 1</span>
                    <span>$31</span>
                  </li>
                </ul>
                <div className='total-price'>
                  <h3>$35</h3>
                </div>
                <div className='order-status'>
                  <h3>Pending</h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default OrderHistory;
