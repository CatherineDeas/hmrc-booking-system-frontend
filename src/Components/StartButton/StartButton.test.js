import React from "react";
import { render } from "@testing-library/react";
import StartButton from "./StartButton";

xdescribe("StartButton tests", () => {
  it("should render", () => {
    let button = render(<StartButton />)
    expect(button).toBeTruthy();
  });
});
