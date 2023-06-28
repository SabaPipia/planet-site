import React from "react";
import data from "./data.json";

import { useParams } from "react-router-dom";

function Planet() {
  const params = useParams();
  const fetchData = () => {
    const pl = data.find((item) => item.name.toLowerCase() === params.planet);
    console.log(pl);
  };
  fetchData();
  console.log(params);
  return <div></div>;
}

export default Planet;
