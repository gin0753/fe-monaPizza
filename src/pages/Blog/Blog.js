import React, { Component } from "react";
import "./style/Blog.scss";
import CrumbHeader from "../../components/CrumbHeader";
import Axios from "axios";
import { connect } from "react-redux";
import { loadBlogs, updateBlogs } from "../../action/blogAction";

import Top1 from "./img/top1.JPG";
import ContentPic1 from "./img/pic1.jpg";
import ContentPic2 from "./img/pic2.jpg";
import ContentPic3 from "./img/pic3.jpg";
import ContentPic4 from "./img/pic4.jpg";

class Blog extends Component {
  async componentDidMount() {
    const { loadBlogs, updateBlogs } = this.props;

    const res = await Axios.get("/blog/1/4");
    const { data } = res;
    updateBlogs(data);

    // this method cannot use,don't know why
    // loadBlogs();

    console.log("00000000", this.props.results[0].author);
  }

  render() {
    const { totalBlogs, results } = this.props;
    console.log('1111111111111',totalBlogs);
    console.log("2222222222222", results);

    return (
      <section className='blog'>
        <CrumbHeader path='blog' thisPage='blog' />
        <div className='top'>
          <a className='toppicture' href='#'>
            <img src={Top1} alt='' />
          </a>
          <p className='writers'>
            January 30,2015 <span className='by'>by</span> Peter smith
          </p>
          <p className='bigTitle'>
            Want to Win free Pizza?Order using the new Mobile App
            <br />
            and you're in with a shot
          </p>

          <p className='contents'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            <br />
            psda dsfdeaghew sdasq2trgk dsda
          </p>

          <div className='readmore'>
            <a href='#'>READ MORE</a>
          </div>
        </div>
        <ul>
          <li className='blogContent'>
            <a className='contentPic' href='#'>
              <img src={ContentPic1} alt='' />
            </a>
            <div className='blogBody'>
              <p className='writers'>
                January 22.2015 <span className='by'>by</span> {"111"}
              </p>
              <p className='bigTitle'>
                Perfect Pizza Using Baking Steel Broiler Method
              </p>
              <p className='contents'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tempore eius, distinctio eaque, sint ill
              </p>
              <div className='readmore'>
                <a href='#'>READ MORE</a>
              </div>
            </div>
          </li>
          <li className='blogContent'>
            <div className='blogBody'>
              <p className='writers'>
                December 18, 2015 <span className='by'>by</span> Eliz Bellarasa
              </p>
              <p className='bigTitle'>Three Champagne Pizza Recepes</p>
              <p className='contents'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tempore eius, distinctio eaque, sint ill
              </p>
              <div className='readmore'>
                <a href='#'>READ MORE</a>
              </div>
            </div>
            <a className='contentPic' href='#'>
              <img src={ContentPic2} alt='' />
            </a>
          </li>
          <li className='blogContent'>
            <a className='contentPic' href='#'>
              <img src={ContentPic3} alt='' />
            </a>
            <div className='blogBody'>
              <p className='writers'>
                December10 ,2014 <span className='by'>by</span> Bradley Taylor
              </p>
              <p className='bigTitle'>
                Brussels Sprouts and Bacon, Oizza Recipe
              </p>
              <p className='contents'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tempore eius, distinctio eaque, sint ill
              </p>
              <div className='readmore'>
                <a href='#'>READ MORE</a>
              </div>
            </div>
          </li>
          <li className='blogContent'>
            <div className='blogBody'>
              <p className='writers'>
                June 03, 2014 <span className='by'>by</span> Cooper Elison
              </p>
              <p className='bigTitle'>
                Green Onion and Burrata Cheese Pizza and a Killer Margherita
              </p>
              <p className='contents'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tempore eius, distinctio eaque, sint ill
              </p>
              <div className='readmore'>
                <a href='#'>READMORE</a>
              </div>
            </div>
            <a className='contentPic' href='#'>
              <img src={ContentPic4} alt='' />
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    blogReducer: { totalBlogs, results },
  } = state;
  return {
    totalBlogs,
    results,
  };
};

const mapActionToProps = {
  loadBlogs,
  updateBlogs,
};

export default connect(mapStateToProps, mapActionToProps)(Blog);
