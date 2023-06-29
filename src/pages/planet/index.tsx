import React, { useState, useEffect } from "react";
import data from "./data.json";
import classnames from "classnames";
import { ReactComponent as Earth } from "../../assets/earth/planet-earth.svg";
import { ReactComponent as Earthv2 } from "../../assets/earth/planet-earth-internal.svg";
import EarthL from "../../assets/earth/geology-earth.png";
import { ReactComponent as ExternalLink } from "../../assets/icon/icon-external-link-alt.svg";
import Button from "../../components/button";
import { Route, useParams } from "react-router-dom";

import "./style.scss";
import Card from "../../components/card";

function Planet() {
  const [isActive, setIsActive] = useState<string>("1");
  const [isIconHidden, setIsIconHidden] = useState<boolean>(true);
  const params = useParams();
  const fetchData = () => {
    const pl = data.find((item) => item.name.toLowerCase() === params.planet);
    console.log(pl);
  };
  fetchData();
  const handleClick = (count: string) => {
    setIsActive(count);
  };
  useEffect(() => {
    if (isActive === "3") {
      setIsIconHidden(false);
    } else {
      setIsIconHidden(true);
    }
  }, [isActive]);

  console.log("gidd", isIconHidden);
  console.log(typeof isActive);

  return (
    <>
      <div className={classnames("main-seciton grid-container-2")}>
        <div className={classnames("planet-icon")}>
          {isActive === "1" ? <Earth /> : null}
          {isActive === "2" ? <Earthv2 /> : null}
          {isActive === "3" ? <Earth /> : null}
          <img
            className={classnames("geology", { "icon-hidden": isIconHidden })}
            src={EarthL}
            alt="icon"
          />
        </div>
        <div className={classnames("planet-info")}>
          <div className={classnames("planet-info-inner-div")}>
            <h1>earth</h1>
            <p>
              Third planet from the Sun and the only known planet to harbor
              life. About 29.2% of Earth's surface is land with remaining 70.8%
              is covered with water. Earth's distance from the Sun, physical
              properties and geological history have allowed life to evolve and
              thrive.
            </p>
            <h3>
              Source: <a href="google.com">Wikipedia</a>
              <ExternalLink />
            </h3>
            <div className={classnames("btn-wrapper")}>
              <Button
                count="01"
                text="overview"
                isActive={isActive === "1"}
                onClick={() => handleClick("1")}
              />
              <Button
                count="02"
                text="internal structure"
                isActive={isActive === "2"}
                onClick={() => handleClick("2")}
              />
              <Button
                count="03"
                text="surface geology"
                isActive={isActive === "3"}
                onClick={() => handleClick("3")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classnames("cards-wrapper")}>
        <Card title="rotation Time" info="58 Days" />
        <Card title="Revolution Time" info="87 days" />
        <Card title="radius" info="2,483 KM" />
        <Card title="Average Temp" info="430C" />
      </div>
    </>
  );
}

export default Planet;
