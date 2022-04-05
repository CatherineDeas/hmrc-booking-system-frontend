import React from "react";
import { render } from "@testing-library/react";
import StartButton from "./StartButton";

describe("StartButton tests", () => {
  it("should render", () => {
    expect(render(<StartButton />)).toBeTruthy();
  });
});
