import React from "react";
import { Template } from "govuk-react-jsx";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import DefaultLabel from "./Components/DefaultLabel";
import LandingPage from "./Pages/LandingPage";
import AppointmentSelection from "./Pages/AppointmentSelection";

function App() {
  return (
    <Router>
      <Template
        title="HMRC Booking System"
        header={{ serviceName:"HMRC Booking System", serviceUrlHref:"/" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/appointments" element={<AppointmentSelection />} />
        </Routes>
      </Template>
    </Router>
  );
}

export default App;
