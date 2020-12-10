import React from "react";
import "./css/asteroid.css";

const NearEarthObject = ({
  name,
  lastSeen,
  maxDiameter,
  minDiameter,
  dangerous,
}) => {
  return (
    <div className="card" id="idAsteroid">
      <h1 className="title">{name}</h1>
      <p className="neo">
        Date the Asteroid was Last Seen:
        <br />
        <span className="date">{lastSeen}</span>
      </p>
      <p className="neo">
        Diameter in meters, between:
        <br />
        <span className="diam">{Math.round(maxDiameter)}m</span> &{" "}
        <span className="diam">{Math.round(minDiameter)}m</span>
      </p>
      <p className="neo">Fairly harmless Boy {dangerous}</p>
    </div>
  );
};

export default NearEarthObject;
