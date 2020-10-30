import React, { Component } from 'react';
import './Menu.css';
import Orange from '../../images/Orange.jpg'
import Bgi from '../../images/Pizza-bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import Media from '../../components/Media/Media';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar/SideBar';
import CartTotals from '../../components/Cart/CartTotal/CartTotal';


const ArrowLeft = <FontAwesomeIcon icon={faArrowLeft} />
const ArrowRight = <FontAwesomeIcon icon={faArrowRight} />

class Menu extends Component {
  constructor(props){
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
      
      <div className="menu" style={{ backgroundImage: `url(${Bgi})` }}>
        <SideBar sidestatus={this.state.sidebarIsClicked}/>
        <CartTotals cartstatus={this.state.cartIsClicked}/>
        <Header toggleSideBar={this.toggleSideBar} toggleCart={this.toggleCart} 
        sidestatus={this.state.sidebarIsClicked} cartstatus={this.state.cartIsClicked}/>
        <div className="catelogue">
          <div className="catelogue__topbar">
            <div className="catelogue__filter">
              <header>
                <input type="checkbox" id="filter" className="filter" />
                <label htmlFor="filter">
                  <div className="filter-container">
                    <ul>
                      <li className="filter__button">
                        <span></span>
                        <span></span>
                        <span></span>
                      </li>
                      <li className="filter__title"><h4>FILTER</h4></li>
                      <li className="filter__result">Showing 1-12 of 19 results</li>
                    </ul>
                  </div>
                </label>
                <div className="filter__items">
                  <ul>
                    <li>
                      <h3>SIZE</h3>
                      <div className="filter__radio">
                        <label className="filter__options">
                          <input type="radio" defaultChecked="checked" name="radio" />
                          <h4>Small</h4>
                          <span className="checkmark"></span>
                        </label>
                        <label className="filter__options">
                          <input type="radio" name="radio" />
                          <h4>Medium</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="radio" name="radio" />
                          <h4>Large</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="radio" name="radio" />
                          <h4>Jumbo</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="radio" name="radio" />
                          <h4>Party</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <h3>SAUCES</h3>
                      <div>
                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Marinara</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Icing</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Barbeque</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Cheese</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Ranch</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Olive oil</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Garlic</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <h3>CHEESES</h3>
                      <div>
                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Mozzarella</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Goat cheese</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Mascarpone</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Gorgonzola</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Feta cheese</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Cheddar</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Parmigiano</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <h3>MEATS</h3>
                      <div>
                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Pepperoni</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Grilled chicken</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Ham</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Beef</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Italian sausage</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Bacon</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Meatballs</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>

                    <li>
                      <h3>VEGGIES</h3>
                      <div>
                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Onions</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Mushrooms</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Black olives</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Tomatoes</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Pineapple</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Peppers</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Aubergines</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li className="more-options">
                      <h3 className="more-vegetable">&#160;</h3>
                      <div>
                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Hot chillies</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Spinach</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Broccoli</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Cucumber</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Garlic</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Sweet Corn</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                  </ul>
                  <div className="filter--selected">
                    <button className="filter__button--selected">
                      FILTER SELECTED
                  </button>
                  </div>
                </div>
              </header>
            </div>
            <div className="catelogue__default">
              <label htmlFor="default"></label>
              <select name="default" id="default" className="sorting">
                <option value="default">DEFAULT SORTING</option>
              </select>
            </div>
          </div>
          <div className="catelogue__product">
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Kimchi BBQ Chicken</h3>
                <p>
                  Slow Cooked Pulled Chicken marinated in Bulgogi sauce, Shitake Mushrooms, Shallots on a Garlic Base, Gamished with Kimch, Red & Green Chilli.
              </p>
              </div>
              <h4 className="product__price">$21.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Kimchi-BBQ-Chicken" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Peri-Peri</h3>
                <p>
                  Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions & Bocconcini on a Tomato base, topped with Peri-Peri sauce.
              </p>
              </div>
              <h4 className="product__price">$24.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Peri-Peri" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Moorish Lamb</h3>
                <p>
                  Slow Cooked Pulled Lamb marinated in Moorish spices. Tomatoes, Capsicum, Medley, Garbanzos,topped with a Slice of Lemon & Yogurt sauce.
              </p>
              </div>
              <h4 className="product__price">$19.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Moorish-Lamb" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Meat Deluxe</h3>
                <p>
                  Chorizo Sausage, Spanish Onions, Roasted Capsicum, Jalapenos & Chilli on s Spicy Tomato Salsa base, served with Fresh Avocado Salsa.
              </p>
              </div>
              <h4 className="product__price">$20.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Meat-Deluxe" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Sriracha Beef</h3>
                <p>
                  Slow Cooked Pulled Beef, Red capsicum on a Tomato base, Garnished with Pico De Gallo, Avocado, Coriander & Lime, topped with Sriracha Mayo.
              </p>
              </div>
              <h4 className="product__price">$18.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Sriracha Beef" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Wild Mushroom Wagyu</h3>
                <p>
                  4+ Marble Score Wagyu Beef, Portobello, Shiitake & Oyster Mushrooms, Asparagus, Caramelised Onions & Toasted Pine Nuts, on a Béchamel base.
              </p>
              </div>
              <h4 className="product__price">$22.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Wild-Mushroom-Wagyu" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Mediterranean</h3>
                <p>
                  Slow Cooked Marinated Lamb, Tomatoes, Green Capsicum, Spanish Onions, Feta & Oregano on a Garlic infused base, gamished with Mint Yoghurt & Lemon.
              </p>
              </div>
              <h4 className="product__price">$20.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Mediterranean" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Pepperoni</h3>
                <p>
                  Pepperoni Spanish Onions, Fresh Capsicum, Ground Beef, Olive Tapenade & Garlic on a Tomato base (Chilli optional.)
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Pepperoni" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Mexican</h3>
                <p>
                  Chorizo Sausage, Spanish Onions, Roasted Capsicum, Jalapenos & Chilli on s Spicy Tomato Salsa base, served with Fresh Avocado Salsa.
              </p>
              </div>
              <h4 className="product__price">$20.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Mexican" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Smoked Salmon</h3>
                <p>
                  Smoked Salmon on a Spinach & Ricotta base, gamished with Wild Rocked, Hollandaise & Lemon, served with Cracked Pepper & Sea Salt.
              </p>
              </div>
              <h4 className="product__price">$25.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Smoked-Salmon" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Garlic Prawn</h3>
                <p>
                  Marinated Tiger Prawns, Sundried Tomatoes, Shallots, Roasted Capsicum & Feta on a Tomato base, Garnished with Fresh Herbs & Lemon.
              </p>
              </div>
              <h4 className="product__price">$24.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Garlic-Prawn" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Spiced Pumpkin</h3>
                <p>
                  Roasted Pumpkin seasoned with Moroccan Spices, Kalamata Olices, Baby Spinach, Roasted Capsicum & Bocconcini on a Tomato base.
              </p>
              </div>
              <h4 className="product__price">$17.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Spiced-Pumpkin" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Florentine Ricotta</h3>
                <p>
                  Spinach & Ricotta, Kalamata Olives, Spanish Onions, Cherry Tomatoes & Feta served with Cracked Pepper & Sea Salt.
              </p>
              </div>
              <h4 className="product__price">$18.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Florentine-Ricotta" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Margherita</h3>
                <p>
                  Margherita with Authentic Buffalo Mozzarella and Cherry Tomatoes on a Tomato base, garnished with Fresh Basilm served with Cracked Pepper & Sea Salt.
              </p>
              </div>
              <h4 className="product__price">$16.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Margherita" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Vegetarian Supreme</h3>
                <p>
                  Grilled Eggplant, Marinated Artichokes, Baby Spinach, Roasted Capsicum, Mushrooms, Sundried Tomatoes & Bocconcini on a Tomato base, Pesto Aioli.
              </p>
              </div>
              <h4 className="product__price">$22.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Vegetarian-Supreme" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
            <div className="catelogue__product--name">
              <div><img src={Orange} alt="pepperoni" /></div>
              <div className="pizza__description">
                <h3>Roast Beetroot</h3>
                <p>
                  Slowcooked Roasted Beetroot, Baby Spinach, Bocconcini on a Harissa Infused Hummus base, topped with Crushed Walnuts and Honey.
              </p>
              </div>
              <h4 className="product__price">$21.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="Roast-Beetroot" className="product__size">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Large">Large</option>
                </select>
                <input className="add-button" type="submit" value="ADD" />
              </form>
            </div>
          </div>
          <div className="pagination">
            <div className="previouspage"><a href="#">{ArrowLeft}</a></div>
            <div className="pagenumber">
              <a href="#">1</a>
              <a href="#" className="actived">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
            </div>
            <div className="nextpage"><a href="#">{ArrowRight}</a></div>
          </div>
        </div>
        <Newsletter />
        <Media />
        <Footer />
      </div>);
  }
}

export default Menu;
