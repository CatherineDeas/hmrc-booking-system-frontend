import React from "react";
import styles from "./BodyContent.module.scss";
import { Label } from "govuk-react-jsx";

const BodyContent = ({ content }) => {
  return (
    <Label>
      { content }
    </Label>
  );
};

export default BodyContent;
