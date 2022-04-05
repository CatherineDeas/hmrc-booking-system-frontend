import React from "react";
import { render } from "@testing-library/react";
import BodyContent from "./BodyContent";

describe("BodyContent tests", () => {
  it("should render", () => {
    expect(render(<BodyContent />)).toBeTruthy();
  });
});
