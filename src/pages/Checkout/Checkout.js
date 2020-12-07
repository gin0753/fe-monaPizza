import React from 'react';
import './Checkout.css';
import Navigation from '../../components/Navigation/Navigation';
import Form from './components/Form/Form';

class Checkout extends React.Component {
        
    render() {
        return (
            <div className="background">
                <Navigation />
                <Form {...this.props}/>
            </div>
        );
    }
}

export default Checkout;