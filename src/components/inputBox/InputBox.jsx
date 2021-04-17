import React, { useRef } from "react";
import PropTypes from "prop-types";

function InputBox({ addTask }) {
  const inputRef = useRef();
  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === "ENTER") {
      const inputVal = inputRef.current.value;
      addTask(inputVal);
      inputRef.current.value = "";
    }
  };
  return (
    <div className="input-box-wrapper">
      <input
        className="input"
        ref={inputRef}
        type="text"
        placeholder="添加任务"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

InputBox.propTypes = {
  addTask: PropTypes.func,
};

export default InputBox;
