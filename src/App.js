import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import ViewOrder from "./pages/ViewOrder/ViewOrder";
import ContactUs from "./pages/ContactUs/contactUs";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Blog from "./pages/Blog/Blog";
import Menu from "./pages/Menu/Menu";
import SignIn from "./components/SignIn/SignIn";
import Checkout from "./pages/Checkout/Checkout";
import SideBar from "./components/SideBar/SideBar/SideBar";
import CartTotals from "./components/Cart/CartTotal/CartTotal";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import Media from "./components/Media/Media";
import Footer from "./components/Footer/Footer";
import OrderCreated from "./pages/OrderCreated/OrderCreated";
import Mydetails from "./pages/Dashboard/mydetails/mydetails"
import ManageAccount from './pages/manageAccount/manageAccount';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import GrandFooter from './components/GrandFooter/GrandFooter';
import GrandHeader from './components/GrandHeader/GrandHeader';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <Switch>
                <Route exact path="/">
                    <GrandHeader />
                    <Home />
                    <GrandFooter />
                </Route>
                <Route path="/about">
                    <GrandHeader />
                    <About />
                    <GrandFooter />
                </Route>
                <Route path="/viewOrder" component={ViewOrder} />
                <Route path="/contact-us">
                    <GrandHeader />
                    <ContactUs />
                    <GrandFooter />
                </Route>
                <Route path="/shopping-cart">
                    <GrandHeader />
                    <ShoppingCart />
                    <GrandFooter />
                </Route>
                <Route path="/blog">
                    <GrandHeader />
                    <Blog />
                    <GrandFooter />
                </Route>
                <Route path="/menu">
                    <GrandHeader />
                    <Menu />
                    <GrandFooter />
                </Route>
                <Route path="/sign-in" component={SignIn} />
                <Route path="/checkout">
                    <GrandHeader />
                    <Checkout />
                    <GrandFooter />
                </Route>
                <Route path='/order-created'>
                    <GrandHeader />
                    <OrderCreated />
                    <GrandFooter />
                </Route>
                <Route path='/mydetails'>
                    <GrandHeader />
                    <Mydetails />
                    <GrandFooter />
                </Route>
                <ProtectedRoute path="/manage-account">
                    <GrandHeader />
                    <ManageAccount />
                    <GrandFooter />
                </ProtectedRoute>
            </Switch>
            <GrandFooter />
        </Router>;
    }
}

export default App;
