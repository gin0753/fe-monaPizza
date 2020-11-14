import React from 'react';
import './manageAccount.css';
import UserProfile from './components/userProfile';
import OrderHistory from './components/orderHistory';
import ChangePassword from './components/changePassword';
import PaymentDetails from './components/paymentDetails';

class Media extends React.Component{

    render(){
        return <div className="manageAccount">
                    <UserProfile />
               </div>   
    }
}

export default Media;