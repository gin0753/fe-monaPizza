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
import Navigation from './components/Navigation'

const ArrowLeft = <FontAwesomeIcon icon={faArrowLeft} />
const ArrowRight = <FontAwesomeIcon icon={faArrowRight} />

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: []
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

  render() {
    const updateCart = this.props.updateCart
    return (
      <div className="menu">
        <Navigation />
        <div className="catelogue">
          <Filter />
          <div className="catelogue__product">
            {this.state.pizzas.map((item) =>
              (
                <MenuItems details={item} updateCart={updateCart} />
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