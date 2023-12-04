import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../Logo";
import SidebarCurrentLocation from "../SidebarCurrentLocation";
import ListCities from "../ListCities";
import InputCities from "../InputCities";
import Unit from "../Unit";
import { CurrentCityContext } from "../../contexts/currentCityContext";

const Sidebar = () => {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { currentCity } = useContext(CurrentCityContext);

  const handleSubmit = async(value) => {
    const trimmedValue = value.trim();
    if(cities.find((city) => city === trimmedValue)) return;

    try {
      setIsLoading(true);
      await axios(`https://api.openweathermap.org/data/2.5/weather?q=${trimmedValue}&appid=1fb24a4d9df7fe564611dea433db08b0`);
      setCities([...cities, trimmedValue]);
      setIsLoading(false);

    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }

  const handleDelete = (city) => {
    const newCitiesList = cities.filter((cityWeather) => cityWeather !== city);
    setCities(newCitiesList);
  };

  return (
    <>
      <nav className="px-8">
        <Logo />
        <SidebarCurrentLocation currentCity={currentCity} />
        <InputCities handleSubmit={handleSubmit}/>
        {isLoading && <div>searching for the city...</div>}
        {error && <div>{error}</div>}
        <ul>
          {cities.map((city) => (
            <li className="flex items-center gap-1 mb-8" key={city}>
              <svg
                onClick={() => handleDelete(city)}
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clipRule="evenodd"
                />
              </svg>
              <Link to={`/city/${city}`} style={{ width: "90%" }}>
                <ListCities city={city} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Unit />
    </>
  );
};

export default Sidebar;
