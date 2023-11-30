import axios from "axios";

const getWeatherLocation = async (value, unit) => {
    try {
        const {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=1fb24a4d9df7fe564611dea433db08b0&units=${unit}`)
        return data;
    } catch(err){
        throw new Error(err.message)
    }
}

export default getWeatherLocation;