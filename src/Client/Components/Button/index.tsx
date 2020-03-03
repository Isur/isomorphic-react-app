import React from "react";

interface IButton {
  content: string,
  action: () => void,
}

const Button = (props: IButton) => {
  const { content, action } = props;
  return <button onClick={action}> {content} </button>;
};

export default Button;
