import React from "react";
import styles from "./ContactDetails.module.scss";
import BackButton from "../../Components/BackButton";
import DefaultLabel from "../../Components/DefaultLabel";
import Form from "../../Components/Form";

const ContactDetails = () => {
  return (
    <>
      <BackButton path="/" />
      <DefaultLabel title="Contact details" />
      <Form />
    </>
  );
};

export default ContactDetails;
