import React, { Component } from 'react';
import "./Blog.css";
import Top1 from './img/top1.JPG';
import ContentPic1 from './img/contentpic1.JPG';
import ContentPic2 from './img/contentpic2.JPG';
import ContentPic3 from './img/contentpic3.JPG';
import ContentPic4 from './img/contentpic4.JPG';

class Blog extends Component {
  
    render() {
        return (<div className="blog">
            <div className="top">
                <div className="toppicture">
                    <img src={Top1} alt="" />
                </div>
                <p className="writers">
                    January 30,2015 <span className="by">by</span> Peter smith
                </p>
                <p className="bigTitle">Want to Win free Pizza?Order using the new Mobile App<br />
                    and you're in with a shot</p>

                <p className="contents">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto<br />
                    psda dsfdeaghew sdasq2trgk dsda</p>

                <div className="readmore">
                    <a href="#">READ MORE</a>
                </div>
            </div>
            <div className="blogContent">
                <div className="contentPic">
                    <img src={ContentPic1} alt="" />
                </div>
                <div className="blogBody">
                    <p className="writers">January 22.2015 <span className="by">by</span> Andrew Brown</p>
                    <p className="bigTitle">Perfect Pizza Using Baking Steel Broiler Method</p>
                    <p className="contents">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Architecto tempore eius, distinctio eaque, sint ill</p>
                    <div className="readmore">
                        <a href="#">READ MORE</a>
                    </div>
                </div>
            </div>
            <div className="blogContent">
                <div className="blogBody">
                    <p className="writers">December 18, 2015 <span className="by">by</span> Eliz Bellarasa</p>
                    <p className="bigTitle">Three Champagne Pizza Recepes</p>
                    <p className="contents">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Architecto tempore eius, distinctio eaque, sint ill</p>
                    <div className="readmore">
                        <a href="#">READ MORE</a>
                    </div>
                </div>
                <div className="contentPic">
                    <img src={ContentPic2} alt="" />
                </div>
            </div>
            <div className="blogContent">
                <div className="contentPic">
                    <img src={ContentPic3} alt="" />
                </div>
                <div className="blogBody">
                    <p className="writers">December10 ,2014 <span className="by">by</span> Bradley Taylor</p>
                    <p className="bigTitle">Brussels Sprouts and Bacon, Oizza Recipe</p>
                    <p className="contents">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Architecto tempore eius, distinctio eaque, sint ill</p>
                    <div className="readmore">
                        <a href="#">READ MORE</a>
                    </div>
                </div>
            </div>
            <div className="blogContent">
                <div className="blogBody">
                    <p className="writers">June 03, 2014 <span className="by">by</span> Cooper Elison</p>
                    <p className="bigTitle">Green Onion and Burrata Cheese Pizza and a Killer Margherita</p>
                    <p className="contents">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto tempore eius, distinctio eaque, sint ill</p>
                    <div className="readmore">
                        <a href="#">READMORE</a>
                    </div>

                </div>
                <div className="contentPic">
                    <img src={ContentPic4} alt="" />
                </div>
            </div>
        </div>)}
} 
export default Blog;