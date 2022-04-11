import React from "react";
import AppointmentTabs from "../AppointmentTabs"
import styles from "./CalendarTabs.module.scss";

const CalendarTabs = () => {
  const tabs = [
    {
      id: "test-1",
      label: "test 1",
      panel: {
        children: [
          <p key = "0">This is a test</p>
        ]
      }
    }
  ]

  return (
    <AppointmentTabs tabs={ tabs } />
  );
};

export default CalendarTabs;
