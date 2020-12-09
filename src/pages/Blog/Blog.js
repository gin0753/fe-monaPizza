import React, { Component } from "react";
import "./style/Blog.scss";
import CrumbHeader from "../../components/CrumbHeader";
import { connect } from "react-redux";
import { loadBlogs } from "../../action/blogAction";

import BlogImg from "./img/BlogImg";

class Blog extends Component {
  componentDidMount() {
    const { loadBlogs } = this.props;
    loadBlogs();
  }

  render() {
    const { loading, results } = this.props;

    if (loading) return <h1>Loading...</h1>;
    // console.log("22222222", results[0].author);
    return (
      <section className='blog'>
        <CrumbHeader path='blog' thisPage='blog' />
        <div className='top'>
          <a className='toppicture' href='/'>
            <img src={BlogImg[4]} alt='' />
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
            <a href='/'>READ MORE</a>
          </div>
        </div>
        <ul>
          {results.map((item, index) => {
            return (
              <li key={index} className='blogContent'>
                <a className='contentPic' href='/'>
                  <img src={BlogImg[index]} alt='blog-img' />
                </a>
                <div className='blogBody'>
                  <p className='writers'>
                    {item.date} <span className='by'>by</span> {item.author}
                  </p>
                  <p className='bigTitle'>{item.title}</p>
                  <p className='contents'>{item.body}</p>
                  <div className='readmore'>
                    <a href='/'>READ MORE</a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    blogReducer: { loading, totalBlogs, results },
  } = state;
  return {
    loading,
    totalBlogs,
    results,
  };
};

const mapActionToProps = {
  loadBlogs,
};

export default connect(mapStateToProps, mapActionToProps)(Blog);
