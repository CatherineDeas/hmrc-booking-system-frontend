import React from "react";
import { render } from "@testing-library/react";
import DefaultHeader from "./DefaultHeader";

describe("DefaultHeader tests", () => {
  it("should render", () => {
    expect(render(<DefaultHeader />)).toBeTruthy();
  });
});
