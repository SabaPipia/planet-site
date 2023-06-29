import React from "react";
import "./style.scss";

type CardProps = {
  title: string;
  info: string;
};

const Card: React.FC<CardProps> = ({ title, info }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <h2>{info}</h2>
    </div>
  );
};

export default Card;
