import React from "react";
import { render } from "@testing-library/react";
import BackButton from "./BackButton";

describe("BackButton tests", () => {
  it("should render", () => {
    expect(render(<BackButton />)).toBeTruthy();
  });
});
