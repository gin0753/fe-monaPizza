import React from 'react';
import './Checkout.css';
import Navigation from '../../components/Navigation/Navigation';
import Form from './components/Form/Form';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarIsClicked: false,
            cartIsClicked: false
        }
    }

    toggleSideBar = () => {
        this.setState({
            sidebarIsClicked: !this.state.sidebarIsClicked
        })
    }

    toggleCart = () => {
        this.setState({
            cartIsClicked: !this.state.cartIsClicked
        })
    }

    render() {
        return (
            <div className="background">
                <Navigation />
                <Form />
            </div>
        );
    }
}

export default Checkout;