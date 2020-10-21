import React from "react";
import "./style/Home.scss";
import Margherita from "./img/Margherita.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='home'>
        <div className='frontPage'>
          <div className='frontPage_banner'>
            <h1>Get it while it’s hot!</h1>
            <h2>
              We create custom, personal pizzas with quality ingredients in only
              five minutes.
            </h2>
            <a className='button'>ORDER ONLINE</a>
          </div>
        </div>
        <div className='restPage'>
          <header>
            <img src={Margherita} alt='Margherita' />
          </header>
          <section className='restPage_info'>
            <div className='restPage_info_wrap'>
              <div className='restPage_info_top'>
                <h2>
                  We are pizza makers, and our mission is to make cool pizza
                  which feeds all your senses.
                </h2>
                <p>
                  We prefer to rely on instinct and feel, measuring by hand, not
                  by the gram. This is the authentic way to make pizza. Sure
                  it’s a little unrefined, but we’re proud of that. It’s pizza
                  like this which feeds your sense of sharing, adding flavour to
                  those occasions when you get together with friends and family.
                  And really, isn’t that what it’s all about? Because when pizza
                  feeds all your senses, it’s not just great, it’s sensational.
                </p>
              </div>
              <ul className='restPage_info_bottom'>
                <li>
                  <div className='icon_leaf'></div>
                  <h2>We’re Careful</h2>
                  <p>
                    The crust is stored in a separate container, on a separate
                    shelf in our fridge. The cheese, marinara sauce and
                    pepperoni are stored in a designated kit, and every pizza is
                    freshly baked on designated parchment paper in our ovens.
                  </p>
                </li>
                <li>
                  <div className='icon_badge'></div>
                  <h2>We’re Certified</h2>
                  <p>
                    Our cheese-only and cheese-and-pepperoni gluten-free pizzas
                    are prepared using the procedures certified by the Gluten
                    Intolerance Group (GIG), and we take specific caution when
                    making these pizzas.
                  </p>
                </li>
                <li>
                  <div className='icon_rocket'></div>
                  <h2>You’re Creative</h2>
                  <p>
                    For those simply looking to reduce gluten in their diets, we
                    offer a Create Your Own pizza option. The cheese, pepperoni
                    and marinara come from our gluten-free kit, but all
                    additional toppings are stored at our standard make table.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className='restPage_choices'>
            <span>
              <h3>5</h3>
              <p>crusts</p>
            </span>
            <span>
              <h3>17</h3>
              <p>sauces</p>
            </span>
            <span>
              <h3>8</h3>
              <p>cheeses</p>
            </span>
            <span>
              <h3>20</h3>
              <p>veggies</p>
            </span>
            <span>
              <h3>11</h3>
              <p>meats</p>
            </span>
            <span>
              <h3>36</h3>
              <p>toppings</p>
            </span>
          </section>
          <section className='restPage_feedBack'>
            <div className='restPage_feedBack_wrap'>
              <h2>Here's what some customers are saying...</h2>
              <p>
                Customer service and product quality are our top priority.
                Although we strive to make every customer experience as easy as
                possible, it’s how our customers rate us that really matters.
                Because it makes our customers happy! And we love making people
                happy.
              </p>
              <ul>
                <li>
                  <mark></mark>
                  <h4>Florentine Ricotta</h4>
                  <section>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </section>
                  <main>
                    “ We are serving pizza, your pizza is the fave of our
                    family. Pick us as the pizza winner! ”
                  </main>
                  <h5 className='customerName'>Daniela Black</h5>
                  <a href='#'>www.pizzatempo.com</a>
                </li>
                <li>
                  <mark></mark>
                  <h4>Florentine Ricotta</h4>
                  <section>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </section>
                  <main>
                    “ We are serving pizza, your pizza is the fave of our
                    family. Pick us as the pizza winner! ”
                  </main>
                  <h5 className='customerName'>Daniela Black</h5>
                  <a href='#'>www.pizzatempo.com</a>
                </li>
                <li>
                  <mark></mark>
                  <h4>Florentine Ricotta</h4>
                  <section>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </section>
                  <main>
                    “ We are serving pizza, your pizza is the fave of our
                    family. Pick us as the pizza winner! ”
                  </main>
                  <h5 className='customerName'>Daniela Black</h5>
                  <a href='#'>www.pizzatempo.com</a>
                </li>
              </ul>
              <nav></nav>
            </div>
          </section>
          <section className='restPage_mobileApp'>
            <div className='restPage_mobileApp_wrap'>
              <aside></aside>
              <main>
                <h2>
                  Get the newest version of our mobile app for your phone.
                </h2>
                <p>
                  Do you have an iPhone, Android device or an web-enabled
                  mobile? Then it’s easier than ever to order hot and fresh
                  pizza – no phone calls necessary! Mobile ordering lets you
                  access all the best features in a format that’s tailored to
                  the screen size of your mobile phone, find special online
                  offers and order your favorite pizza and sides in a flash.
                </p>
                <h3>Here's why it's great:</h3>
                <ul>
                  <li>It's free</li>
                  <li>No registration required</li>
                  <li>Order from the full menu</li>
                  <li>Find local deals</li>
                  <li>Pay directly from the app</li>
                </ul>
                <a className='ios'>download iPhone App</a>
                <a className='android'>download Android App</a>
              </main>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Home;
