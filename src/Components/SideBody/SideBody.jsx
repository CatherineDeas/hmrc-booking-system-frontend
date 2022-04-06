import React from "react";
import BodyContent from "../BodyContent";
import styles from "./SideBody.module.scss";

const SideBody = ({ subheading, link }) => {
  const sideContent = (
    <>
      <h2>{ subheading }</h2>
      <a className="govuk-link" href="/">{ link }</a>
    </>
  )

  return (
    <BodyContent content={ sideContent } />
  );
};

export default SideBody;
