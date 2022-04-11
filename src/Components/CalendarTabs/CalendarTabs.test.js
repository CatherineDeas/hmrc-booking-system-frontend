import React from "react";
import { render } from "@testing-library/react";
import CalendarTabs from "./CalendarTabs";

describe("CalendarTabs tests", () => {
  it("should render", () => {
    expect(render(<CalendarTabs />)).toBeTruthy();
  });
});
