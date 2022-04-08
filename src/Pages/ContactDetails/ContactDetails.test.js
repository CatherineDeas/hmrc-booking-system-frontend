import React from "react";
import { render } from "@testing-library/react";
import ContactDetails from "./ContactDetails";

describe("ContactDetails tests", () => {
  it("should render", () => {
    expect(render(<ContactDetails />)).toBeTruthy();
  });
});
