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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarIsClicked: false,
          cartIsClicked: false,
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

    render() {
        return (
            <>
            <Router>
            {
                window.location.pathname !== '/sign-in' ?
                <>
                <SideBar sidestatus={this.state.sidebarIsClicked} />
                <CartTotals cartstatus={this.state.cartIsClicked} />
                <Header
                  toggleSideBar={this.toggleSideBar}
                  toggleCart={this.toggleCart}
                  sidestatus={this.state.sidebarIsClicked}
                  cartstatus={this.state.cartIsClicked}
                />
                </> : <></>
            }
              <Switch>
                <Route exact path="/" component={Home} />
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
                <Route path='/order-created' component={OrderCreated} />
                <Route path='/mydetails' component={Mydetails} />
                <Route path='/' component={Home} />
                <ProtectedRoute path="/manage-account" component={ManageAccount} />
              </Switch>
              {
                window.location.pathname !== '/sign-in' ?
                <>
                <Newsletter />
                <Media />
                <Footer />
                </> : <></>
            }
            </Router>
          </>
        )
    }
}

export default App;
