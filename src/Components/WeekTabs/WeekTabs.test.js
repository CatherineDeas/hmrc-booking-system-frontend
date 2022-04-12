import React from "react";
import { render } from "@testing-library/react";
import WeekTabs from "./WeekTabs";

describe("WeekTabs tests", () => {
  it("should render", () => {
    expect(render(<WeekTabs />)).toBeTruthy();
  });
});
