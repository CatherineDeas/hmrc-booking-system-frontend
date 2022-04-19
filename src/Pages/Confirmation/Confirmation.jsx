import React from "react";
import styles from "./Confirmation.module.scss";
import BackButton from "../../Components/BackButton";
import { Panel } from "govuk-react-jsx";
import BodyContent from "../../Components/BodyContent";
import LowerBody from "../../Components/LowerBody";

const Confirmation = () => {
  const textContent = ( 
    <>
      <p>You will now receive a confirmation email with the above reference number and booking details.</p>
      <p>If you want to review, edit, or cancel your appointment, you can do so at any time by <a href="/">managing your booking.</a></p>
    </>
  )

  return (
    <>
      <BackButton path="/" label="Home" />
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <Panel titleChildren="Application complete">Your reference number: HDJ2123F</Panel>
          <BodyContent className="govuk-grid-column-two-thirds" content={(<p>We have sent you a confirmation email.</p>)} />
          <LowerBody subheading="What happens next" textContent={ textContent } />
        </div>
      </div>
    </>
  );
};

export default Confirmation;
