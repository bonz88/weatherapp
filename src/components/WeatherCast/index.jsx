import { useContext } from "react";
import { UnitContext } from "../../contexts/unitContext";
import {
    VisibilityIcon,
    WindIcon,
    CloudsIcon,
    HumidityIcon
  } from "../../icons";

const WeatherCast = (props) => {
    const {main, name, visibility, wind, clouds} = props.weather;
    const weather = props.weather.weather ? props.weather.weather[0] : null;

    const unit = useContext(UnitContext);
    return (
        <div className="rightContainerBottom flex">
        <div className="RightContainerBottomLeft w-3/5 pt-12 pl-8 border-r border-solid border-gray-300">
          <h1 className="text-blue-900 text-xl font-semibold leading-6 mb-8">
            Recent place
          </h1>
          <div
            className="py-6 mr-8 bg-cover bg-center bg-no-repeat bg-fixed flex flex-col gap-2"
            style={{ backgroundImage: `url(${props.image})`, opacity: 0.6 }}
          >
            {/* <img src={props.image} /> */}
            <div className="ml-10 flex items-center gap-4">
              {weather && (
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                  alt="icon"
                  className="icon"
                />
              )}
              <p className="text-white text-xl font-medium">
                {weather && weather.description}
              </p>
            </div>
            <h1 className="ml-10 text-white text-5xl font-medium">
              {main && main.temp.toFixed(1)}
              {unit === "imperial" ? "°F" : "°C"}
            </h1>
            <p className="ml-10 text-white text-xl font-medium">{name}</p>
          </div>
          <h1 className="text-blue-900 text-xl font-semibold leading-6 mt-8">
            Recent place
          </h1>
          <div className="flex gap-6 mt-4 mr-8">
            <div
              className="py-2 px-8 flex flex-col justify-center items-center bg-gray-300 bg-opacity-50 bg-cover bg-no-repeat"
              style={{
                background: `url(https://i.ibb.co/zbdGWFN/Rectangle-6.png)`
              }}
            >
              <p className="text-white text-base font-medium">Feels Like</p>
              <h2 className="text-white text-4xl font-medium">
                {main && main.feels_like.toFixed(1)}°
              </h2>
              <p className="text-white text-base font-medium">
                {weather && weather.main}
              </p>
            </div>
            <div
              className="py-2 px-8 flex flex-col justify-center items-center bg-gray-300 bg-opacity-50 bg-cover bg-no-repeat"
              style={{
                background: `url(https://i.ibb.co/zbdGWFN/Rectangle-6.png)`
              }}
            >
              <p className="text-white text-base font-medium">Max Temp.</p>
              <h2 className="text-white text-4xl font-medium">
                {main && main.temp_max.toFixed(1)}°
              </h2>
              <p className="text-white text-base font-medium">
                {weather && weather.description}
              </p>
            </div>
            <div
              className="py-2 px-8 flex flex-col justify-center items-center bg-gray-300 bg-opacity-50 bg-cover bg-no-repeat"
              style={{
                background: `url(https://i.ibb.co/zbdGWFN/Rectangle-6.png)`
              }}
            >
              <p className="text-white text-base font-medium">Min Temp.</p>
              <h2 className="text-white text-4xl font-medium">
                {main && main.temp_min.toFixed(1)}°
              </h2>
              <p className="text-white text-base font-medium">
                {weather && weather.description}
              </p>
            </div>
          </div>
        </div>
        <div className="RightContainerBottomRight w-2/5">
          <div className="flex flex-col p-12 border-b border-solid border-gray-300">
            <VisibilityIcon />
            <div className="mt-4 flex justify-between">
              <h3 className="text-blue-900 text-xl font-semibold leading-normal mb-2">
                Visibility
              </h3>
              <h3 className="text-blue-900 text-xl font-semibold leading-normal mb-2">
                {visibility}m
              </h3>
            </div>
            <p className="text-blue-900 text-10px font-normal capitalize">
              The air quality is generally acceptable for most individuals.
              However, sensitive groups may experience minor to moderate symptoms
              from long-term exposure
            </p>
          </div>
          <div className="flex flex-col p-12 border-b border-solid border-gray-300">
            <WindIcon />
            <div className="mt-4 flex justify-between">
              <h3 className="text-blue-900 text-xl font-semibold leading-normal mb-2">
                Wind Speed
              </h3>
              <h3 className="text-blue-900 text-xl font-semibold leading-normal mb-2">
                {wind && wind.speed} m/s
              </h3>
            </div>
            <p className="text-blue-900 text-10px font-normal capitalize">
              The air quality is generally acceptable for most individuals.
              However, sensitive groups may experience minor to moderate symptoms
              from long-term exposure
            </p>
          </div>
          <div className="flex flex-col p-12 border-b border-solid border-gray-300">
            <CloudsIcon />
            <div className="mt-4 flex justify-between">
              <h3 className="text-blue-900 text-xl font-semibold leading-normal mb-2">
                Clouds
              </h3>
              <h3 className="text-blue-900 text-xl font-semibold leading-normal mb-2">
                {clouds && clouds.all}%
              </h3>
            </div>
            <p className="text-blue-900 text-10px font-normal capitalize">
              The air quality is generally acceptable for most individuals.
              However, sensitive groups may experience minor to moderate symptoms
              from long-term exposure
            </p>
          </div>
          <div className="flex flex-col p-12 border-b border-solid border-gray-300">
            <HumidityIcon />
            <div className="mt-4 flex justify-between">
              <h3 className="text-blue-900 text-xl font-semibold leading-normal mb-2">
                Humidity
              </h3>
              <h3 className="text-blue-900 text-xl font-semibold leading-normal mb-2">
                {main && main.humidity}%
              </h3>
            </div>
            <p className="text-blue-900 text-10px font-normal capitalize">
              The air quality is generally acceptable for most individuals.
              However, sensitive groups may experience minor to moderate symptoms
              from long-term exposure
            </p>
          </div>
        </div>
      </div>
    )
}

export default WeatherCast;