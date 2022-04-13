import React from "react";
import styles from "./DayAccordion.module.scss";
import { Accordion } from "govuk-react-jsx";
import RadioButton from "../RadioButton/RadioButton";

const DayAccordion = () => {
  

  return (
    <>
      <Accordion
        id="default-example"
        items={[
          {
            content: {
              children: [
                <div key="0">
                  <RadioButton label="9.00am" />
                  <RadioButton label="9.30am" />
                </div>,
              ],
            },
            heading: {
              children: "Monday",
            },
          },
        ]}
      />
    </>
  );
};

export default DayAccordion;
