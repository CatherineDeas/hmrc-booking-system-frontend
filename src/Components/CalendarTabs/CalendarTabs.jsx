import React, { useLayoutEffect } from "react";
import AppointmentTabs from "../AppointmentTabs"
import styles from "./CalendarTabs.module.scss";

const CalendarTabs = () => {
  const weeks = []
  const currentDate = new Date()
  const currentWeekDay = currentDate.toString().slice(0, 3)

  // Check if it's the weekend
  const todayIsWeekend = () => { 
    if (currentWeekDay === "Sat" || currentWeekDay === "Sun") { return true }
    return false
  }

  // Populate weeks with week objects
  const populateWeeks = () => {
    const mondays = getAllWeeks()

    mondays.forEach((monday, index) => {
      const week = {
        id: `week-${index+1}`,
        label: formatDateToWeek(new Date(monday)),
        panel: {
          children: [
            <p key = "0">hello { `${monday}` }</p>
          ]
        }
      }
      weeks.push(week)

    })
  }

  // add days to date as part of Date prototype
  Date.prototype.addDays = function(days) {
    var result = new Date(this.valueOf());
    result.setDate(result.getDate() + days);
    return result;
  }

  // Identify first week in series
  const monOfFirstWeek = () => {
    let firstMonday = currentDate
    if (todayIsWeekend()) {
      if (currentWeekDay === "Sun") {
        firstMonday.addDays(1)
      }
      if (currentWeekDay === "Sat") {
        firstMonday.addDays(2)
      }
    }

    if (!todayIsWeekend()) {
      if (currentDate.getDay() != 0 && currentDate.getDay() != 6) {
        const todayNumber = currentDate.getDay()
        firstMonday = firstMonday.addDays(1 - todayNumber)
      }
    }

    return firstMonday
  }

  // store all 4 weeks
  const getAllWeeks = () => {
    let weeks = []

    for (let i = 0; i < 28; i += 7) {
      let currentMonday = new Date(monOfFirstWeek())
      currentMonday.setDate(currentMonday.getDate() + i)
      weeks.push(currentMonday)
    }
    return weeks
  }

  // Format week into tab label
  const formatDateToWeek = date => {
    let month = date.getMonth() + 1
    let day = date.getDate()
    if ( month < 10 ) month = "0" + month
    if ( day < 10 ) day = "0" + day
    return `Week of ${ day }/${ month }/${ date.getFullYear() }`
  }

  populateWeeks()

  return (
    <AppointmentTabs tabs={ weeks } />
  );
};

export default CalendarTabs;
