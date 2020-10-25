import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

class FeedBack extends React.Component {
  render() {
    return (
      <section className='restPage_feedBack'>
        <div className='restPage_feedBack_wrap'>
          <h2>Here's what some customers are saying...</h2>
          <p>
            Customer service and product quality are our top priority. Although
            we strive to make every customer experience as easy as possible,
            it’s how our customers rate us that really matters. Because it makes
            our customers happy! And we love making people happy.
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
              <p>
                “ We are serving pizza, your pizza is the fave of our family.
                Pick us as the pizza winner! ”
              </p>
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
              <p>
                “ We are serving pizza, your pizza is the fave of our family.
                Pick us as the pizza winner! ”
              </p>
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
              <p>
                “ We are serving pizza, your pizza is the fave of our family.
                Pick us as the pizza winner! ”
              </p>
              <h5 className='customerName'>Daniela Black</h5>
              <a href='#'>www.pizzatempo.com</a>
            </li>
          </ul>
          <nav></nav>
        </div>
      </section>
    );
  }
}

export default FeedBack;
