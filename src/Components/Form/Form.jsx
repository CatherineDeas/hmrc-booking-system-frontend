import React from "react";
import styles from "./Form.module.scss";
import DefaultInput from "../DefaultInput/DefaultInput";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <DefaultInput label="Name" {...register("name")} /> */}
      <div className="govuk-form-group">
      <label className="govuk-label">Name</label>
        <input className="govuk-input" {...register("nam")} />
        <input type="submit" />
        <input {...register("email")} />
        <input {...register("telephone")} />
      </div>
    </form>
  );
};

export default Form;
