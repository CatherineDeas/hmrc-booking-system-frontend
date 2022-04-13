import React from "react";
import { render } from "@testing-library/react";
import AvailableAppointments from "./AvailableAppointments";

describe("AvailableAppointments tests", () => {
  it("should render", () => {
    expect(render(<AvailableAppointments />)).toBeTruthy();
  });
});
