import React from "react";
import styles from "./DayAccordion.module.scss";
import { Accordion } from "govuk-react-jsx";
import RadioButton from "../RadioButton/RadioButton";

const DayAccordion = () => {
  const [value, setValue] = React.useState('none');

  const handleChange = (selectedValue) => {
    setValue(selectedValue);
  };

  
  return (
    <>
    <Accordion
  id="default-example"
  items={[
    {
      content: {
        children: [
          <div key="0">
            <RadioButton label='9.00am' value={value} onChange={handleChange} />
          </div>
        ]
      },
      heading: {
        children: 'Monday'
      }
    },
  ]}
/>
    </>
  );
};

export default DayAccordion;
