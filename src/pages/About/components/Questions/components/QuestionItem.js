import React from "react";

class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    };
  }

  setExpand = () => {
    this.setState({ expand: !this.state.expand });
  };

  render() {
    const { expand } = this.state;
    return (
      <>
        {expand && (
          <li className='auto-height'>
            <span className="top65">{this.props.children}</span>
            <i onClick={this.setExpand} className="top65">
              -
            </i>
            <main className="block">{this.props.details}</main>
          </li>
        )}
        {!expand && (
          <li className="fixed-height">
            <span>{this.props.children}</span>
            <i onClick={this.setExpand}>+</i>
            <main className="none">{this.props.details}</main>
          </li>
        )}
      </>
    );
  }
}

export default QuestionItem;
