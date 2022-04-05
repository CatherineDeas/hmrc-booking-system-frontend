import React from "react";
import styles from "./LowerBody.module.scss";
import BodyContent from "../BodyContent";

const LowerBody = ({ subheading, textContent }) => {
  const bodyContent = (
    <>
      <h2>{ subheading }</h2>
      <div>{ textContent }</div>
    </>
  )
  return (
    <BodyContent content={ bodyContent }/>
  );
};

export default LowerBody;
