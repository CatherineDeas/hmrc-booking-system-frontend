import React from "react";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <input {...register("email")} />
      <input {...register("telephone")} />
      <input type="submit" />
    </form>
  );
}

export default Form;
