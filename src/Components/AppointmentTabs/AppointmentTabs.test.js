import React from "react";
import { render } from "@testing-library/react";
import AppointmentTabs from "./AppointmentTabs";

describe("AppointmentTabs tests", () => {
  it("should render", () => {
    expect(render(<AppointmentTabs />)).toBeTruthy();
  });
});
