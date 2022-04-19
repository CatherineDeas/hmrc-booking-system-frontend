import React from "react";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const saveToLocalStorage = (data) => {
    localStorage.setItem("Name", data.Name);
    localStorage.setItem("Email", data.Email);
    localStorage.setItem("Phone", data.Phone);
  };

  const handlePost = async(data) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}`, data)
      .then(res => {
        console.log(res.status);
    })
  }

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    saveToLocalStorage(data);
    handlePost(data);
    routeChange();
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/appointments`;
    navigate(path);
  };

  return (
    <div className="govuk-grid-row">
      <form
        className="govuk-grid-column-two-thirds"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="govuk-form-group">
          <label className="govuk-label">Name</label>
          <input
            className="govuk-input govuk-input--width-20"
            type="text"
            required
            {...register("name")}
          />
        </div>

        <div className="govuk-form-group">
          <label className="govuk-label">Email</label>
          <div id="event-name-hint" className="govuk-hint">
            We'll use this to send you your booking details
          </div>
          <input
            className="govuk-input govuk-input--width-20"
            type="email"
            required
            {...register("email")}
          />
        </div>

        <div className="govuk-form-group">
          <label htmlFor="telephone-number" className="govuk-label">
            Telephone number
          </label>
          <input 
            className="govuk-input govuk-input--width-20"
            type="number"
            required 
            {...register("phone", { minLength:10, maxLength:14}, { pattern: /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/ })} />
        </div>
        <input className="govuk-button" type="submit" value="Continue" />
      </form>
      <div className="govuk-grid-column-one-third"></div>
    </div> 
  );
};

export default Form;
