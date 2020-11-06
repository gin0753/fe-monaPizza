import React from 'react';
import './Form.css'
import Address from './components/Address/Address';
import Billing from './components/Billing/Billing';
import Order from './components/Order/Order';
import Payment from './components/Payment/Payment';
import Loginbtn from './components/Login/Login';
import Coupon from './components/Coupon/Coupon';

class Form extends React.Component{

    render(){
        return <div className="Checkout"> 
                    <section className="form">
                    <div className="billcontainer">
                            <Loginbtn />  
                        <div className="billwrapper">
                            <Billing />
                            <Address />
                        </div>
                    </div>
                    <div className="ordercontainer">
                        <Coupon />
                        <div className="orderwrapper">
                            <Order />
                            <Payment />
                        </div>
                    </div>
                    </section> 
               </div> 
    }
}

export default Form;


