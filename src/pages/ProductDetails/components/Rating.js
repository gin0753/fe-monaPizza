import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class StarRatings extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    const realRating = this.props.num ? this.props.num : rating;

    return (
      <div>
        <StarRatingComponent
          name="rateStars"
          starCount={5}
          value={realRating}
          onStarClick={this.onStarClick.bind(this)}
          starColor="#D9502B"
          emptyStarColor="#FFFFFF"
        />
      </div>
    );
  }
}

export default StarRatings;
