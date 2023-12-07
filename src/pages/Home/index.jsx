import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UnitContext } from "../../contexts/unitContext";
import { CurrentCityContext } from "../../contexts/currentCityContext";
import WeatherCast from "../../components/WeatherCast";
import getWeatherLocation from "../../utils/getWeatherLocation";
import getUnsplash from "../../utils/getUnsplash";

const Home = () => {
  const [weather, setWeather] = useState({});
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { unit } = useContext(UnitContext);
  const { handleCurrentLocation } = useContext(CurrentCityContext);

  const apiKey = import.meta.env.VITE_API_KEY;

  const defaultImg =
    "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80";

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(sendLocation, err);
  };

  const sendLocation = async (pos) => {
    try {
      setIsLoading(true);
      const position = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${apiKey}`
      );
      setIsLoading(false);
      const weather = await getWeatherLocation(
        position.data.name,
        unit,
        apiKey
      );
      setWeather(weather);
      handleCurrentLocation(weather);
      const weatherImg = await getUnsplash(weather.weather[0].description);
      setImage(weatherImg ? weatherImg : defaultImg);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, [unit]);

  const err = () => {
    setError("Unable to retrieve your location");
  };

  return (
    <>
      {isLoading && <h1>fetching data...</h1>}
      {error && <h1>{error}</h1>}
      <WeatherCast weather={weather} image={image} />
    </>
  );
};

export default Home;
