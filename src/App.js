import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import ViewOrder from './pages/ViewOrder/ViewOrder';
import ContactUs from './pages/ContactUs/contactUs';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import CustomerDetails from './pages/CustomerDetails/CustomerDetails';
import Blog from './pages/Blog/Blog';
import Menu from './pages/Menu/Menu'



function App() {
    
    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/users" component={Users} />
                <Route path="/viewOrder" component={ViewOrder} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/shopping-cart" component={ShoppingCart} />
                <Route path="/customer-details" component={CustomerDetails} />
                <Route path="/blog" component={Blog} />
                <Route path="/Home" component={Home} />
                <Route path="/menu" component={Menu} />
            </Switch>
        </Router>
    );
}

export default App;
