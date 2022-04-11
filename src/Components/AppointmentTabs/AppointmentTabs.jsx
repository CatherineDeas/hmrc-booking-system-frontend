import React from "react";
import { Tabs } from "govuk-react-jsx";
import styles from "./AppointmentTabs.module.scss";


const AppointmentTabs = ({ tabs }) => {
  return (
    <Tabs
      idPrefix=""
      items={ tabs }
      title="Contents"
    />
  );
};

export default AppointmentTabs;
