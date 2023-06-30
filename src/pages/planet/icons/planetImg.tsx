import React from "react";
import {
  Earth,
  Earth2,
  Jupiter,
  Jupiter2,
  Mars,
  Mars2,
  Mercury,
  Mercury2,
  Neptune,
  Neptune2,
  Saturn,
  Saturn2,
  Uranus,
  Uranus2,
  Venus,
  Venus2,
} from "../imports";

import "./planetImg.scss";

type PlanetImgProps = {
  count: string;
  params?: string;
};
const PlanetImg: React.FC<PlanetImgProps> = ({ count, params }) => {
  // console.log(params);
  const handleChange = () => {
    if (count === "1" || count === "3") {
      if (params === "earth") {
        return <Earth />;
      }
      if (params === "jupiter") {
        return <Jupiter />;
      }
      if (params === "mars") {
        return <Mars />;
      }
      if (params === "mercury") {
        return <Mercury />;
      }
      if (params === "neptune") {
        return <Neptune />;
      }
      if (params === "saturn") {
        return <Saturn />;
      }
      if (params === "venus") {
        return <Venus />;
      }
      if (params === "uranus") {
        return <Uranus />;
      }
    }
    if (count === "2") {
      if (params === "earth") {
        return <Earth2 />;
      }
      if (params === "jupiter") {
        return <Jupiter2 />;
      }
      if (params === "mars") {
        return <Mars2 />;
      }
      if (params === "mercury") {
        return <Mercury2 />;
      }
      if (params === "neptune") {
        return <Neptune2 />;
      }
      if (params === "saturn") {
        return <Saturn2 />;
      }
      if (params === "venus") {
        return <Venus2 />;
      }
      if (params === "uranus") {
        return <Uranus2 />;
      }
    }
  };
  return <div className="planet-img">{handleChange()}</div>;
};

export default PlanetImg;
