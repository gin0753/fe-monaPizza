import React, { Component } from 'react';
import './Menu.css';
import Header from '../../images/pizza-header.jpg'
import Orange from '../../images/Orange.jpg'
import Bgi from '../../images/Pizza-bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const ArrowLeft = <FontAwesomeIcon icon={faArrowLeft} />
const ArrowRight = <FontAwesomeIcon icon={faArrowRight} />

class Menu extends Component {
  render() {
    return (
      <div className="menu" style={{ backgroundImage: `url(${Bgi})` }}>
        <nav className="navbar">
          <div className="nav__sidebar--left">
            <header>
              <input type="checkbox" id="nav__sidebar--left" />
              <label htmlFor="nav__sidebar--left">
                <div className="hamburger-container">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </label>
            </header>
          </div>
          <div className="nav__logo"><h2>Margherita</h2></div>
          <div className="nav__sidebar--cart"><span> </span></div>
        </nav>
        <div className="page__header">
          <div className="header__image">
            <img src={Header} alt="page-header" />
          </div>
          <div className="page__header--details">
            <h1>Pizza Menu</h1>
          </div>
        </div>
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
                          <input type="radio" checked="checked" name="radio" />
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
                          <input type="radio" checked="checked" name="radio" />
                          <h4>Party</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <h3>SAUCES</h3>
                      <div>
                        <label className="filter__options">
                          <input type="checkbox" checked="checked" />
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
                          <input type="checkbox" checked="checked" />
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
                          <input type="checkbox" checked="checked" />
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
                          <input type="checkbox" checked="checked" />
                          <h4>Feta cheese</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Cheddar</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" checked="checked" />
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
                          <input type="checkbox" checked="checked" />
                          <h4>Grilled chicken</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" checked="checked" />
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
                          <input type="checkbox" checked="checked" />
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
                          <input type="checkbox" checked="checked" />
                          <h4>Mushrooms</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Black olives</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" checked="checked" />
                          <h4>Tomatoes</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Pineapple</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" checked="checked" />
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
                          <input type="checkbox" checked="checked" />
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
                          <input type="checkbox" checked="checked" />
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
                <h3>Pepperoni</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aliquam soluta quibusdam atque expedita voluptatem
              </p>
              </div>
              <h4 className="product__price">$23.00</h4>
              <form action="/action_page.php" className="size--selection">
                <label htmlFor="product__size"></label>
                <select name="product__size" id="product__size" className="product__size">
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
        <div className="subscription">
          <div className="subscription__details">
            <h2>Sign up for the newsletter and get exclusive deals.</h2>
            <input
              type="text"
              placeholder="Enter your email address"
              name="subscribe"
            />
            <button type="subscribe">SUBSCRIBE</button>
          </div>
        </div>
        <div>
          <div className="contact">
            <div className="contact__box">
              <h2 className="phonenumber">+34 9 368 7050</h2>
              <h3 className="emailaddress">order@pizza.com</h3>
            </div>
          </div>
          <div className="socialmedia">
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Pinterest</a></li>
              <li><a href="#">Flickr</a></li>
            </ul>
          </div>
          <div className="footer">
            <h3>Copyright @ 2015 Mixer All rights reserved </h3>
          </div>
        </div>
      </div>);
  }
}

export default Menu;
