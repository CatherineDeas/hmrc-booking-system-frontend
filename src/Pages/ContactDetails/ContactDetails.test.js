import React from "react";
import { render } from "@testing-library/react";
import ContactDetails from "./ContactDetails";
import { Route, Router } from "react-router";

xdescribe("ContactDetails tests", () => {
  it("should render", () => {
    expect(render(
      <Router>
          // <Route path="/contact-details-test" element={<ContactDetails />} />
      </Router>
    )).toBeTruthy();
  });
});
