import React from "react";
import styles from "./BackButton.module.scss";
import { BackLink } from "govuk-react-jsx/govuk/components/back-link";

const BackButton = ({ path }) => {
  return <BackLink href= { path }>Back</BackLink>;
};

export default BackButton;
