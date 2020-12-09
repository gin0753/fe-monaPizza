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
// import ManageAccount from './pages/manageAccount/manageAccount';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import RedirectPage from './pages/RedirectPage/RedirectPage';
import AdminRoute from "./components/AdminRoute/AdminRoute";
import {ChangePassword, ManagePizza, Mydetails, OrderHistory} from './pages/Dashboard';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarIsClicked: false,
            cartIsClicked: false,
            amountChanged: 0,
        };
    }

    toggleSideBar = () => {
        this.setState({
            sidebarIsClicked: !this.state.sidebarIsClicked,
        });
    };

    toggleCart = () => {
        this.setState({
            cartIsClicked: !this.state.cartIsClicked,
        });
    };

    updateCart = () => {
        this.setState({
            amountChanged: this.state.amountChanged + 1,
        });
    };

    render() {
        return (
            <>
                <Router>
                    {window.location.pathname !== "/sign-in" ? (
                        <>
                            <SideBar
                                sidestatus={this.state.sidebarIsClicked}
                                toggleSideBar={this.toggleSideBar}
                            />
                            <CartTotals
                                cartstatus={this.state.cartIsClicked}
                                toggleCart={this.toggleCart}
                                amountChanged={this.state.amountChanged}
                            />
                            <Header
                                toggleSideBar={this.toggleSideBar}
                                toggleCart={this.toggleCart}
                                sidestatus={this.state.sidebarIsClicked}
                                cartstatus={this.state.cartIsClicked}
                            />
                        </>
                    ) : (
                            <></>
                        )}
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/users' component={Users} />
                        <Route path='/viewOrder' component={ViewOrder} />
                        <Route path='/contact-us' component={ContactUs} />
                        <Route
                            path='/shopping-cart'
                            render={(props) => <ShoppingCart updateCart={this.updateCart} />}
                        />
                        <Route path='/product-details' component={ProductDetails} />
                        <Route path='/blog' component={Blog} />
                        <Route path='/redirect' component={RedirectPage} />
                        <Route
                            path='/menu'
                            render={(props) => <Menu updateCart={this.updateCart} />}
                        />
                        <Route path='/sign-in' component={SignIn} />
                        <Route
                            path='/checkout'
                            render={(history) => (
                                <Checkout history={history} updateCart={this.updateCart} />
                            )}
                        />
                        <Route
                            path='/order-created'
                            render={(history) => (
                                <OrderCreated history={history} updateCart={this.updateCart} />
                            )}
                        />
                        <ProtectedRoute path='/order-history' component={OrderHistory} />
                        <ProtectedRoute path='/mydetails' component={Mydetails} />
                        <ProtectedRoute
                            path='/change-password'
                            component={ChangePassword}
                        />
                        <AdminRoute path='/manage-pizza' component={ManagePizza} />
                    </Switch>
                    {window.location.pathname !== "/sign-in" ? (
                        <>
                            <Newsletter />
                            <Media />
                            <Footer />
                        </>
                    ) : (
                            <></>
                        )}
                </Router>
            </>
        );
    }
}

export default App;




