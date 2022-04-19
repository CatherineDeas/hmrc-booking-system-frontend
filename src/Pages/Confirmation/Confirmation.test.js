import React from "react";
import { render } from "@testing-library/react";
import Confirmation from "./Confirmation";

describe("Confirmation tests", () => {
  it("should render", () => {
    expect(render(<Confirmation />)).toBeTruthy();
  });
});
