import React from 'react';
import './Checkout.css';
import CrumbHeader from "../../components/CrumbHeader/CrumbHeader";
import Form from './components/Form/Form';

class Checkout extends React.Component {
        
    render() {
        return (
            <div className="background">
                <CrumbHeader thisPage='Checkout' path='/checkout'/>
                <Form {...this.props}/>
            </div>
        );
    }
}

export default Checkout;