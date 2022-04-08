import React from "react";
import { Input } from "govuk-react-jsx/govuk/components/input";
import styles from "./DefaultInput.module.scss";

const DefaultInput = ({ label, type }) => {
  return (
    <>
      <Input
        label={{
          children: label,
          // children: 'National Insurance number'
        }}
        type={type}
      />
    </>
  );
};

export default DefaultInput;
