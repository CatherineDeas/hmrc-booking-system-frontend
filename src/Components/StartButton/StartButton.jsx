import React from "react";
import styles from "./StartButton.module.scss";
import { Button } from "govuk-react-jsx";

const StartButton = ({ buttonLabel }) => {
  return (
      <Button isStartButton>{ buttonLabel }</Button>
  );
};

export default StartButton;
