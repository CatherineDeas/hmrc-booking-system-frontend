import React from "react";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ label }) => {
  const [value, setValue] = React.useState(false);

  const handleChange = () => {
    setValue(!value);
    console.log("clicked!");
  }; 

  return (
    <div>
      <label>
        <input name="time-slot" type="radio" checked={value} onChange={handleChange} />
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
