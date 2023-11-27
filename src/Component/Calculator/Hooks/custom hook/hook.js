import React from "react";
import { useFormInput } from "./useforminput";

export default function Form() {
  const firstNameProps = useFormInput("Sameer");
  const lastNameProps = useFormInput("Adk");

  return (
    <>
      <label>
        FirstName :
        <input {...firstNameProps} />
      </label>
      <br></br>
      <label>
        LastName :
        <input {...lastNameProps} />
      </label>
      <p>
        Good Morning, {firstNameProps.value}
        {lastNameProps.value}
      </p>
    </>
  );
}
