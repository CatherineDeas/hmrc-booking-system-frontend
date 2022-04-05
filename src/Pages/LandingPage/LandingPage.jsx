import React from "react";
import DefaultLabel from "../../Components/DefaultLabel";
import BodyContent from "../../Components/BodyContent";
import StartButton from "../../Components/StartButton";
import LowerBody from "../../Components/LowerBody";
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
  const textContent = (
    <p>If you already have an appointment, you can view, amend, or cancel an existing <a href="/">booking here.</a></p>
  )
  return (
    <>
      <DefaultLabel title="Book an appointment"/>
      <BodyContent content={ bodyContent }/>
      <StartButton buttonLabel="Start now" buttonUrl="/" />
      <LowerBody subheading="Before you start" textContent={ textContent }/>
    </>
  );
};

export default LandingPage;
