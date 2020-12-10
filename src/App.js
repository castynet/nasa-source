import React, { useEffect, useState } from "react";
import "./App.css";
import Asteroids from "./components/asteroid";
import ImageoftheDay from "./components/image";
import NavBar from "./components/navbar";
import Outro from "./components/outro";

const App = () => {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    getAsteroids();
  }, []);

  const getAsteroids = async () => {
    const response = await fetch(
      "https://www.neowsapp.com/rest/v1/neo/browse?page=1920&size=12&api_key=bjuVUgfTLhIEoL8tiVwkom7V20gV7fquf0cNagKg"
    );
    const data = await response.json();
    setAsteroids(data.near_earth_objects);
    //console.log(data.near_earth_objects);
  };

  return (
    <>
      <NavBar />
      <div className="page">
        <ImageoftheDay />
      </div>
      <div className="page">
        {asteroids.map((NearEarthObject) => (
          <Asteroids
            key={NearEarthObject.id}
            name={NearEarthObject.designation}
            lastSeen={NearEarthObject.orbital_data.last_observation_date}
            maxDiameter={
              NearEarthObject.estimated_diameter.meters.estimated_diameter_max
            }
            minDiameter={
              NearEarthObject.estimated_diameter.meters.estimated_diameter_min
            }
            dangerous={NearEarthObject.is_potentially_hazardous_asteroid}
          />
        ))}
      </div>
      <Outro />
    </>
  );
};

export default App;
