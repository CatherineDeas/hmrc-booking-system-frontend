import React from "react";
import { render } from "@testing-library/react";
import AppointmentSelection from "./AppointmentSelection";

describe("AppointmentSelection tests", () => {
  it("should render", () => {
    expect(render(<AppointmentSelection />)).toBeTruthy();
  });
});
