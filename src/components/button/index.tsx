import React from "react";
import classnames from "classnames";
import "./style.scss";

type ButtonProps = {
  count: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ count, text, isActive, onClick }) => {
  console.log(isActive);
  return (
    <>
      <div
        className={classnames("btn", { "btn-active": isActive })}
        onClick={onClick}
      >
        <h5>{count}</h5>
        <h5>{text}</h5>
      </div>
    </>
  );
};

export default Button;
