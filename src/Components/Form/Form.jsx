import React from "react";
import styles from "./Form.module.scss";
import DefaultInput from "../DefaultInput/DefaultInput";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    
    <div className="govuk-grid-row">
      <form className="govuk-grid-column-two-thirds"       onSubmit={handleSubmit(onSubmit)}
      >
        <div className="govuk-form-group">
          <label className="govuk-label">Name</label>
          <input className="govuk-input govuk-input--width-20" {...register("nam")} />
        </div>

        <div className="govuk-form-group">
          <label className="govuk-label">Email</label>
          <div id="event-name-hint" class="govuk-hint">
            We'll use this to send you your booking details
          </div>
          <input className="govuk-input govuk-input--width-20" {...register("email")} />
        </div>
        
        <div className="govuk-form-group">
          <label className="govuk-label">Telephone number</label>
          <input className="govuk-input govuk-input--width-20" {...register("telephone")} />
        </div>
          <input type="submit" />
      </form>
      <div className="govuk-grid-column-one-third"></div>
    </div>
  );
};

export default Form;
