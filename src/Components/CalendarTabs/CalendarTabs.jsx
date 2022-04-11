import React from "react";
import AppointmentTabs from "../AppointmentTabs"
import styles from "./CalendarTabs.module.scss";

const CalendarTabs = () => {
  const weeks = [
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

  // Fetch current date
  const currentDate = new Date()
  const currentWeekDay = currentDate.toString().slice(0, 3)
  const todayIsWeekend = () => { 
    if (currentWeekDay === "Sat" || currentWeekDay === "Sun") { return true }
    return false
  }

  // Identify first week in series
  const monOfFirstWeek = () => {
    let firstMonday = currentDate

    if (todayIsWeekend()) {
      if (currentWeekDay === "Sun") {
        firstMonday = firstMonday.setDate(firstMonday.getDate() + 1)
      }
      if (currentWeekDay === "Sat") {
        firstMonday = firstMonday.setDate(firstMonday.getDate() + 2)
      }
    }

    if (!todayIsWeekend() && currentDate.getDay() != 1) {
      if (currentDate.getDay() != 0 && currentDate.getDay() != 6) {
        const todayNumber = currentDate.getDay()
        firstMonday = firstMonday.setDate(firstMonday - (todayNumber - 1))
      }
    }

    return firstMonday
  }


  // store all 4 weeks

  // Format week into tab label
  const formatDateToWeek = date => {
    let month = date.getMonth() + 1
    let day = date.getDate()
    if ( month < 10 ) month = "0" + month
    if ( day < 10 ) day = "0" + day
    return `Week of ${ day }/${ month }/${ date.getFullYear() }`
  }
console.log(formatDateToWeek(currentDate))

  return (
    <AppointmentTabs tabs={ weeks } />
  );
};

export default CalendarTabs;
