import React from "react";
import { render } from "@testing-library/react";
import DayTabs from "./DayTabs";

describe("DayTabs tests", () => {
  it("should render", () => {
    expect(render(<DayTabs />)).toBeTruthy();
  });
});
