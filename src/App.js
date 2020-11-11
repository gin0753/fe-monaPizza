import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import ViewOrder from './pages/ViewOrder/ViewOrder';
import ContactUs from './pages/ContactUs/contactUs';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Blog from './pages/Blog/Blog';
import Menu from './pages/Menu/Menu';
import SignIn from './components/SignIn/SignIn';
import Checkout from './pages/Checkout/Checkout';



function App() {

    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/users" component={Users} />
                <Route path="/viewOrder" component={ViewOrder} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/shopping-cart" component={ShoppingCart} />
                <Route path="/product-details" component={ProductDetails} />
                <Route path="/blog" component={Blog} />
                <Route path="/home" component={Home} />
                <Route path="/menu" component={Menu} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
