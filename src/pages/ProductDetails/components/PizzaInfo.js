import React from 'react';
import StarRatings from './Rating';


class PizzaInfo extends React.Component {

    render() {
        return (
            <div className="pizza-info-wrapper">
                <div className="nav-bar flex-container">
                    <span className="flex-item">DESCRIPTION</span>
                    <span className="flex-item">NUTRITIONAL INFO</span>
                    <span className="flex-item">ORDER DELIVERY</span>
                    <span className="flex-item">REVIEWS(1)</span>
                </div>
                <div className="customers-reviews">
                    <div className="prev-reviews">
                        <div className="ind-review">
                            <span className="user-name">Bradley Taylor</span>
                            <p className="rate">
                                <StarRatings num={4} />
                            </p>
                            <p className="rv-date">October 2, 2014</p>
                            <p className="rv-comment">
                                Delicious, fresh and juicy pizza. Can't wait to order again.
                            </p>
                        </div>
                    </div>
                    <div className="new-review">
                        <h1>Add a review</h1>
                        <p>NAME*</p>
                        <input type="text" id="nameInput" />
                        <p>EMAIL*</p>
                        <input type="text" id="emailInput" />
                        <p>YOUR RATING</p>
                        <p>
                            <StarRatings />
                        </p>
                        <p>YOUR REVIEW</p>
                        <textarea />
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default PizzaInfo;