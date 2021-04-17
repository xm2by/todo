import React, { Component } from "react";
import PropTypes from "prop-types";
import "./inputBox.scss";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnkeyPress = this.handleOnkeyPress.bind(this);
  }
  handleOnChange(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }
  handleOnkeyPress(e) {
    if (e.key.toUpperCase() === "ENTER") {
      this.props.addTask(this.state.inputVal);
      this.setState({
        inputVal: "",
      });
    }
  }
  render() {
    return (
      <div className="input-box-wrapper">
        <input
          className="input"
          type="text"
          placeholder="添加任务"
          value={this.state.inputVal}
          onChange={this.handleOnChange}
          onKeyPress={this.handleOnkeyPress}
        ></input>
      </div>
    );
  }
}

InputBox.propTypes = {
  addTask: PropTypes.func,
};

export default InputBox;
