import React from "react";
import { Input } from "govuk-react-jsx/govuk/components/input";
import styles from "./DefaultInput.module.scss";

const DefaultInput = ({ hint, label }) => {
  return (
    <>
      <Input
        hint={{
          children:
            hint
        }}
        id="input-with-hint-text"
        label={{
          children: label,
        }}
        name="test-name-2"
        type="text"
      />
    </>
  );
};

export default DefaultInput;
