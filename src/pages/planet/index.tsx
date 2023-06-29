import React, { useState, useEffect } from "react";
import "./style.scss";
import data from "./data.json";
import classnames from "classnames";
import PlanetIcon from "./icons/planetIcon";
import { ReactComponent as ExternalLink } from "../../assets/icon/icon-external-link-alt.svg";
import Button from "../../components/button";
import PlanetImg from "./icons/planetImg";
import { useParams } from "react-router-dom";

import Card from "../../components/card";

type planetDataType = {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
};

function Planet() {
  const [isActive, setIsActive] = useState<string>("1");
  const [isIconHidden, setIsIconHidden] = useState<boolean>(true);
  const [planetData, setPlanetData] = useState<planetDataType>();

  const params = useParams();
  useEffect(() => {
    const pData = data.find(
      (item) => item.name.toLowerCase() === params.planet
    );

    setPlanetData(pData);
  }, [params]);

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

  return (
    <>
      <div className={classnames("main-seciton grid-container-2")}>
        <div className={classnames("planet-icon")}>
          <PlanetImg count={isActive} params={params.planet} />
          <PlanetIcon params={params.planet} isIconHidden={isIconHidden} />
        </div>
        <div className={classnames("planet-info")}>
          <div className={classnames("planet-info-inner-div")}>
            <h1>{planetData?.name}</h1>
            <p>
              {isActive === "1" ? planetData?.overview.content : null}
              {isActive === "2" ? planetData?.structure.content : null}
              {isActive === "3" ? planetData?.geology.content : null}
            </p>
            <h3>
              Source:
              {isActive === "1" ? (
                <a
                  target="_blank"
                  href={planetData?.overview.source}
                  rel="noreferrer"
                >
                  Wikipedia
                </a>
              ) : null}
              {isActive === "2" ? (
                <a
                  target="_blank"
                  href={planetData?.structure.source}
                  rel="noreferrer"
                >
                  Wikipedia
                </a>
              ) : null}
              {isActive === "3" ? (
                <a
                  target="_blank"
                  href={planetData?.geology.source}
                  rel="noreferrer"
                >
                  Wikipedia
                </a>
              ) : null}
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
        <Card title={`rotation Time`} info={planetData?.rotation} />
        <Card title="Revolution Time" info={planetData?.revolution} />
        <Card title="radius" info={planetData?.radius} />
        <Card title="Average Temp" info={planetData?.temperature} />
      </div>
    </>
  );
}

export default Planet;
