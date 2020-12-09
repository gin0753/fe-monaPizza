import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Florentine from "./img/Florentine.png";
import Garlic from "./img/Garlic.png";
import Kimchi from "./img/Kimchi.png";

class Items extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <mark>
            <img src={Florentine} alt="florentine"/>
          </mark>
          <h4>Florentine Ricotta</h4>
          <section>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </section>
          <p>
            “ We are serving pizza, your pizza is the fave of our family. Pick
            us as the pizza winner! ”
          </p>
          <h5 className='customerName'>Daniela Black</h5>
          <a href='/'>www.pizzatempo.com</a>
        </li>
        <li>
          <mark>
            <img src={Garlic} alt ="garlic"/>
          </mark>
          <h4>Garlic Prawn</h4>
          <section>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </section>
          <p>
            “ Very Good! Very generous with the cheese! Don't know how it could
            get any better. ”
          </p>
          <h5 className='customerName'>Eliz Bellarosa</h5>
          <a href='/'>www.pizzatempo.com</a>
        </li>
        <li>
          <mark>
            <img src={Kimchi} alt="kimchi"/>
          </mark>
          <h4>Kimchi BBQ Chicken</h4>
          <section>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </section>
          <p>
            “ I enjoy a classic pizza with quality ingredients. Quick delivery
            and always friendly service. ”
          </p>
          <h5 className='customerName'>Bradley Taylor</h5>
          <a href='/'>www.pizzatempo.com</a>
        </li>
        <li>
          <mark>
            <img src={Florentine} alt="florentine"/>
          </mark>
          <h4>Florentine Ricotta</h4>
          <section>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </section>
          <p>
            “ We are serving pizza, your pizza is the fave of our family. Pick
            us as the pizza winner! ”
          </p>
          <h5 className='customerName'>Daniela Black</h5>
          <a href='/'>www.pizzatempo.com</a>
        </li>
        <li>
          <mark>
            <img src={Garlic} alt="garlic"/>
          </mark>
          <h4>Garlic Prawn</h4>
          <section>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </section>
          <p>
            “ Very Good! Very generous with the cheese! Don't know how it could
            get any better. ”
          </p>
          <h5 className='customerName'>Eliz Bellarosa</h5>
          <a href='/'>www.pizzatempo.com</a>
        </li>
        <li>
          <mark>
            <img src={Kimchi} alt="kimchi"/>
          </mark>
          <h4>Kimchi BBQ Chicken</h4>
          <section>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </section>
          <p>
            “ I enjoy a classic pizza with quality ingredients. Quick delivery
            and always friendly service. ”
          </p>
          <h5 className='customerName'>Bradley Taylor</h5>
          <a href='/'>www.pizzatempo.com</a>
        </li>
      </ul>
    );
  }
}

export default Items;
