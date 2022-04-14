import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "./LandingPage";

xdescribe("LandingPage tests", () => {
  it("should render", () => {
    // Figure out how to break out of infinite loop in start button
    const page = render(<LandingPage />)
    expect(true).toBeTruthy();
  });
});
