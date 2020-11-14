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
          <li style={{ height: "auto" }}>
            <span style={{ top: "65px" }}>{this.props.children}</span>
            <i onClick={this.setExpand} style={{ top: "65px" }}>
              -
            </i>
            <main style={{ display: "block" }}>{this.props.details}</main>
          </li>
        )}
        {!expand && (
          <li style={{ height: "124px" }}>
            <span>{this.props.children}</span>
            <i onClick={this.setExpand}>+</i>
            <main style={{ display: "none" }}>{this.props.details}</main>
          </li>
        )}
      </>
    );
  }
}

export default QuestionItem;
