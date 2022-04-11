import React from "react";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => (console.log(data));
  
  return (
    
    <div className="govuk-grid-row">
      <form className="govuk-grid-column-two-thirds" onSubmit={handleSubmit(onSubmit)}
      >
        <div className="govuk-form-group">
          <label className="govuk-label">Name</label>
          <input className="govuk-input govuk-input--width-20" type="text" required {...register("nam")} />
        </div>

        <div className="govuk-form-group">
          <label className="govuk-label">Email</label>
          <div id="event-name-hint" class="govuk-hint">
            We'll use this to send you your booking details
          </div>
          <input className="govuk-input govuk-input--width-20" type="email" required {...register("email")} />
        </div>
        
        <div className="govuk-form-group">
          <label className="govuk-label">Telephone number</label>
          <input className="govuk-input govuk-input--width-20" pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$" required {...register("telephone")} />
        </div>
          <input className="govuk-button" type="submit" value="Continue" />
      </form>
      <div className="govuk-grid-column-one-third"></div>
    </div>
  );
};

export default Form;
