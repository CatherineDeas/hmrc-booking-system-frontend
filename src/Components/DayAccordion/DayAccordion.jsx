import React from "react";
import styles from "./DayAccordion.module.scss";
import { Accordion } from "govuk-react-jsx";
import AvailableAppointments from "../AvailableAppointments";

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
                  <AvailableAppointments />
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
