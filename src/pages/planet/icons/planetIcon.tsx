import React from "react";
import classnames from "classnames";
import Earth3 from "../../../assets/earth/geology-earth.png";
import Jupiter3 from "../../../assets/jupiter/geology-jupiter.png";
import Mars3 from "../../../assets/mars/geology-mars.png";
import Mercury3 from "../../../assets/mercury/geology-mercury.png";
import Neptune3 from "../../../assets/neptune/geology-neptune.png";
import Saturn3 from "../../../assets/saturn/geology-saturn.png";
import Uranus3 from "../../../assets/uranus/geology-uranus.png";
import Venus3 from "../../../assets/venus/geology-venus.png";

type PlanetProps = {
  isIconHidden: boolean;
  params?: string;
};

const PlanetIcon: React.FC<PlanetProps> = ({ isIconHidden, params }) => {
  const getIcon = () => {
    switch (params) {
      case "earth":
        return Earth3;
      case "jupiter":
        return Jupiter3;
      case "mars":
        return Mars3;
      case "mercury":
        return Mercury3;
      case "neptune":
        return Neptune3;
      case "saturn":
        return Saturn3;
      case "uranus":
        return Uranus3;
      case "venus":
        return Venus3;
    }
  };
  console.log(params);
  return (
    <div>
      <img
        className={classnames("geology", { "icon-hidden": isIconHidden })}
        src={getIcon()}
        alt="icon"
      />
    </div>
  );
};

export default PlanetIcon;
