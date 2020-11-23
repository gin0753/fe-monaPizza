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
      <li className={expand && "auto-height"}>
        <span className={expand && "top65"}>{this.props.children}</span>
        <i onClick={this.setExpand} className={expand && "top65"}>
          {expand && "-"}
          {!expand && "+"}
        </i>
        <main className={expand ? "block" : "none"}>{this.props.details}</main>
      </li>
    );
  }
}

export default QuestionItem;
