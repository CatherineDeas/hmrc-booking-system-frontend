import React from "react";
import styles from "./AvailableAppointments.module.scss";
import RadioButton from "../RadioButton/RadioButton";

const AvailableAppointments = ({ label }) => {
  return (
    <>
      <RadioButton label={label} id="test" />
    </>
  );
};

export default AvailableAppointments;
