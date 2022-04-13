import React from "react";
import { render } from "@testing-library/react";
import DayAccordion from "./DayAccordion";

describe("DayAccordion tests", () => {
  it("should render", () => {
    expect(render(<DayAccordion />)).toBeTruthy();
  });
});
