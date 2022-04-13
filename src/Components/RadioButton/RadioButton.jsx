import React from "react";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ label, id }) => {
  const [value, setValue] = React.useState(false);

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <div className="govuk-radios__item">
      <input
        id={id}
        className="govuk-radios__input"
        name="time-slot"
        type="radio"
        defaultValue={true}
        onChange={handleChange}
      />
      <label for={id} className="govuk-label govuk-radios__label">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
