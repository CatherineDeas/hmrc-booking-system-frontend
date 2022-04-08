import React from "react";
import { render } from "@testing-library/react";
import DefaultInput from "./DefaultInput";

describe("DefaultInput tests", () => {
  it("should render", () => {
    expect(render(<DefaultInput />)).toBeTruthy();
  });
});
