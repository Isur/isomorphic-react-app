import React from "react";
import { useForm } from "react-hook-form";

interface FormProps {
  defaultValues: { [key: string]: unknown },
  children: JSX.Element | JSX.Element[],
  onSubmit: () => void,
}

const Form = ({ defaultValues, children, onSubmit }: FormProps) => {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child => {
        return child.props.name ? React.createElement(child.type, { ...{ ...child.props, register: methods.register, key: child.props.name } }) : child;
      })}
    </form>
  );
};

export default Form;
