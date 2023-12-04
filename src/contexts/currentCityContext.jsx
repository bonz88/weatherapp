import { createContext, useState } from "react";

export const CurrentCityContext = createContext();

export const CurrentCityProvider = (props) => {
  const [currentCity, setCurrentCity] = useState({});

  const handleCurrentLocation = (info) => {
    setCurrentCity(info);
  };
  return (
    <CurrentCityContext.Provider value={{ currentCity, handleCurrentLocation }}>
      {props.children}
    </CurrentCityContext.Provider>
  );
};
