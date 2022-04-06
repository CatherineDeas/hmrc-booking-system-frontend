import React from "react";
import { render } from "@testing-library/react";
import SideBody from "./SideBody";

describe("SideBody tests", () => {
  it("should render", () => {
    expect(render(<SideBody />)).toBeTruthy();
  });
});
