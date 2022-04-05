import React from "react";
import { render } from "@testing-library/react";
import LowerBody from "./LowerBody";

describe("LowerBody tests", () => {
  it("should render", () => {
    expect(render(<LowerBody />)).toBeTruthy();
  });
});
