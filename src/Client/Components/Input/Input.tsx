import React from "react";
import { useFormContext } from "react-hook-form";
import { InputProps } from "./Input.interface";
import "./Input.scss";

const Input = (props: InputProps) => {
  const { label, validation, ...rest } = props;
  const methods = useFormContext();

  const error = methods && methods.errors[props.name] ? methods.errors[props.name].message : null;
  return (
    <div className="Input">
      { label && <label> {label} </label> }
      <input {...rest} ref={methods ? methods.register(validation) : null} />
      <div className={`error ${error ? "" : "hidden"}`}> {error} </div>
    </div>
  );
};

export default Input;
