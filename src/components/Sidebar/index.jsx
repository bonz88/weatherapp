import { useState, useContext } from "react";
import axios from "axios";
import Logo from "../Logo";
import SidebarCurrentLocation from "../SidebarCurrentLocation";
import { CurrentCityContext } from "../../contexts/currentCityContext";
//import ListCities from "../ListCities";
//import InputCities from "../InputCities";
//import Unit from "../Unit";

const Sidebar = () => {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { currentCity } = useContext(CurrentCityContext);

  return (
    <>
      <nav className="px-8">
        <Logo />
        <SidebarCurrentLocation currentCity={currentCity} />
      </nav>
    </>
  );
};

export default Sidebar;
