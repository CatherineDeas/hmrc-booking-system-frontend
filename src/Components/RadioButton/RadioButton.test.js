import React from "react";
import { render } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("RadioButton tests", () => {
  it("should render", () => {
    expect(render(<RadioButton />)).toBeTruthy();
  });
});
