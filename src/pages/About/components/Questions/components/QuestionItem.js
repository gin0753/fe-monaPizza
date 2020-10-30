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
      <li style={expand ? { height: "auto" } : { height: "124px" }}>
        <span style={expand ? { top: "65px" } : {}}>{this.props.children}</span>
        <i onClick={this.setExpand}>{expand ? "-" : "+"}</i>
        <main style={expand ? { display: "block" } : { display: "none" }}>
          {this.props.details}
        </main>
      </li>
    );
  }
}

export default QuestionItem;
