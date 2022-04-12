import React from "react";
import DefaultLabel from "../../Components/DefaultLabel";
import BodyContent from "../../Components/BodyContent";
import StartButton from "../../Components/StartButton";
import LowerBody from "../../Components/LowerBody";
import SideBody from "../../Components/SideBody";
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
    <p>If you already have an appointment, you can view, amend, or cancel an existing <a className="govuk-link" href="/">booking here.</a></p>
  )

  return (
    <>
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <DefaultLabel title="Book an appointment"/>
        <BodyContent content={ bodyContent }/>
        <StartButton buttonLabel="Start now" buttonUrl="/contactdetails" />
      </div>

      <div className="govuk-grid-column-one-third">
        <SideBody subheading="Already have an appointment?" link="Manage your booking" />
      </div>
    </div>
    
      <LowerBody subheading="Before you start" textContent={ textContent }/>
    </>
  );
};

export default LandingPage;
