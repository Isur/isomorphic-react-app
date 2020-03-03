import React from "react";
import { Link as LinkTo } from "react-router-dom";

interface ILink {
  to: string,
  content: string,
}

const Link = (props: ILink) => {
  const { to, content } = props;
  return <LinkTo to={to}> {content} </LinkTo>;
};

export default Link;
