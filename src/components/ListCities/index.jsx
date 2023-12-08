import { useEffect, useState } from "react";
import getWeatherLocation from "../../utils/getWeatherLocation";
import { useContext } from "react";
import { UnitContext } from "../../contexts/unitContext";

const ListCities = (props) => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;

  const { unit } = useContext(UnitContext);

  const fetchWeatherData = async () => {
    try {
      setIsLoading(true);
      const weather = await getWeatherLocation(props.city, unit, apiKey);
      setWeather(weather);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [unit]);

  return (
    <>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      <div className="flex justify-between items-center">
        <div className="p-2 rounded bg-gray-200">
          <img
            className="w-4"
            src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${weather.sys?.country}.svg`}
            alt=""
          />
        </div>
        <p className="text-blue-900 text-xs font-medium">
          {weather.sys?.country}
        </p>
        <p className="text-blue-900 text-xs font-light">
          {props.city.toUpperCase()}
        </p>
        <p className="text-blue-900 text-xs font-normal">
          {weather.main?.temp.toFixed(1)}
          {unit === "imperial" ? "°F" : "°C"}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
        >
          <path
            d="M9.22171 2.47906L12.4853 5.74263L9.54807 8.67985"
            stroke="#0D084D"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 5.74264H12.4853"
            stroke="#0D084D"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default ListCities;
