import React from "react";
import DefaultLabel from "../../Components/DefaultLabel";
import BodyContent from "../../Components/BodyContent";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  const bodyContent = (
    <>
      <p>Use this service to:</p>
      <ul>
        <li>Book an appointment with an HMRC officer</li>
      </ul>
      <p>Booking takes around 5 minutes.</p>
    </>
  );
  return (
    <>
      <DefaultLabel title="Book an appointment"/>
      <BodyContent content={ bodyContent }/>
    </>
  );
};

export default LandingPage;
