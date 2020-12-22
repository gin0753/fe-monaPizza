import React from 'react';
import '../../Form.scss';

class Coupon extends React.Component{

    handleClick = () => {
        const {history} = this.props.history;
        history.replace('/shopping-cart');
    }

    render(){
        return <div className="ordercontainer__coupon">
                    <h6>Have a coupon? <span className="ordercontainer__coupon--redirect" onClick={this.handleClick}>  Enter your code</span></h6>
               </div>     
    }
}

export default Coupon;

