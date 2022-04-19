import React from "react";
import styles from "./DayAccordion.module.scss";
import { Accordion } from "govuk-react-jsx";
import AvailableAppointments from "../AvailableAppointments";
import state from "../../data/state.js"

const DayAccordion = ({ day }) => {
  const availableTimes = 
    state.availableAppointments.map(time => {
      return (
        <AvailableAppointments label={time} />
      )
      // return time
    })
  console.log(availableTimes);
  // console.log(state.availableAppointments[0]);
  return (
    <>
      <Accordion
        id="default-example"
        items={[
          {
            content: {
              children: [
                <div key="0">
                  {availableTimes}
                </div>,
              ],
            },
            heading: {
              children: day,
            },
          },
        ]}
      />
    </>
  );
};

export default DayAccordion;
