import React from "react";
import { render } from "@testing-library/react";
import DefaultLabel from "./DefaultLabel";

describe("DefaultLabel tests", () => {
  it("should render", () => {
    expect(render(<DefaultLabel />)).toBeTruthy();
  });
});
