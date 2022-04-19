import React from "react";
import styles from "./BackButton.module.scss";
import { BackLink } from "govuk-react-jsx/govuk/components/back-link";

const BackButton = ({ path, label = "Back" }) => {
  return <BackLink href={ path }>{ label }</BackLink>;
};

export default BackButton;