import React from "react";
import styles from "./StartButton.module.scss";
import { Button } from "govuk-react-jsx";

const StartButton = ({ buttonLabel, buttonUrl }) => {
  return (
      <Button isStartButton href={ buttonUrl }>{ buttonLabel }</Button>
  );
};

export default StartButton;
