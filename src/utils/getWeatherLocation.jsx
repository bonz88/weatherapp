import axios from "axios";

const getWeatherLocation = async (value, unit, api) => {
  try {
    const { data } = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${api}0&units=${unit}`
    );
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default getWeatherLocation;
