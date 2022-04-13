import React from "react";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ label, value, handleChange }) => {
  

  return (
    <div>
      <label>
        <input type="radio" checked={value} onChange={handleChange} />
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
