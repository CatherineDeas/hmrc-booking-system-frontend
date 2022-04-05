import React from "react";
import { Label } from "govuk-react-jsx"

const DefaultLabel = ({title}) => {
  return (
    <>
      <Label className="govuk-label--xl" isPageHeading>
        {title}
        
      </Label>
    </>
  );
};

export default DefaultLabel;
