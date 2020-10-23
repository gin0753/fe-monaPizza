import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import ContactUs from './pages/ContactUs/contactUs';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/users" component={Users} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/shopping-cart" component={ShoppingCart} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
