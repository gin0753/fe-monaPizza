import React, { Component } from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { PizzaImages } from '../../PizzaImages'
import { connect } from 'react-redux'
import { fetchPizza } from '../../action/menuActions'
import MenuItems from './components/MenuItems'
import Filter from './components/Filter'
import CrumbHeader from "../../components/CrumbHeader/CrumbHeader";

const ArrowLeft = <FontAwesomeIcon icon={faArrowLeft} />
const ArrowRight = <FontAwesomeIcon icon={faArrowRight} />

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      Toppings: [],
      Marinara: null,
      Icing: null,
      Barbeque: null,
      Cheese: null,
      Ranch: null,
      'Olive Oil': null,
      GarlicSauce: null,
      Mozzarella: null,
      'Goat Cheese': null,
      Mascarpone: null,
      Gorgonzola: null,
      'Feta Cheese': null,
      Cheddar: null,
      Parmigiano: null,
      Pepperoni: null,
      'Grilled Chicken': null,
      Ham: null,
      Beef: null,
      'Italian Sausage': null,
      Bacon: null,
      Meatballs: null,
      Onions: null,
      Mushrooms: null,
      'Black Olives': null,
      Tomatoes: null,
      Pineapple: null,
      Peppers: null,
      Aubergines: null,
      'Hot Chillies': null,
      Spinach: null,
      Broccoli: null,
      Cucumber: null,
      Garlic: null,
      'Sweet Corn': null
    }
  }

  displayContent = async () => {
    const { pizzas: { pizzas } } = this.props;
    const pizzaImage = PizzaImages;
    pizzas.forEach(ele => {
      pizzaImage.forEach(i => {
        if (i.PizzaName === ele.PizzaName) {
          let index = pizzaImage.indexOf(i);
          ele.Img = pizzaImage[index].Img;
        }
      })
    })
    this.setState({
      pizzas: pizzas
    });
  }

  componentDidMount = async () => {
    const { fetchPizza } = this.props;
    await fetchPizza();
    await this.displayContent();
  }

  handleClick = (e) => {
    const { Toppings } = this.state
    if(this.state.[e.target.name]){
        this.setState({
            [e.target.name]: null
        })
        let index = Toppings.indexOf(e.target.name);
        if(index !== -1){
          Toppings.splice(index, 1);
        }
    }
    else{
        this.setState({
            [e.target.name]: e.target.value
        })
        Toppings.push(e.target.value);
    }
}

  render() {
    const updateCart = this.props.updateCart
    console.log(this.state)
    return (
      <div className="menu">
        <CrumbHeader thisPage='Menu' path='/menu'/>
        <div className="catelogue">
          <Filter clickEvent={this.handleClick}/>
          <div className="catelogue__product">
            {this.state.pizzas.map((item) =>
              (
                <MenuItems key={item._id} details={item} updateCart={updateCart} />
              )
            )}
          </div>
          <div className="pagination">
            <div className="previouspage"><a href="/">{ArrowLeft}</a></div>
            <div className="pagenumber">
              <a href="/" className="actived">1</a>
            </div>
            <div className="nextpage"><a href="/">{ArrowRight}</a></div>
          </div>
        </div>
      </div>);
  }
}

const mapStateToProps = state => {
  const { menuReducer: { loading, pizzas } } = state;
  return {
    loading,
    pizzas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPizza: () => dispatch(fetchPizza())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);