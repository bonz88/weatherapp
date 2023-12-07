import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getWeatherLocation from "../../utils/getWeatherLocation";
import getUnsplash from "../../utils/getUnsplash";
import WeatherCast from "../../components/WeatherCast";
import { useContext } from "react";
import { UnitContext } from "../../contexts/unitContext";

const City = () => {
  const [weather, setWeather] = useState({});
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { cityId } = useParams();

  const { unit } = useContext(UnitContext);

  const defaultImg =
    "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80";

  const fetchWeatherData = async () => {
    try {
      setIsLoading(true);
      const weather = await getWeatherLocation(cityId, unit);
      setWeather(weather);
      const weatherImg = await getUnsplash(weather.weather[0].description);
      setImage(weatherImg ? weatherImg : defaultImg);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setImage("");
    fetchWeatherData();
  }, [cityId, unit]);

  return (
    <div>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      <WeatherCast weather={weather} image={image} />
    </div>
  );
};

export default City;
