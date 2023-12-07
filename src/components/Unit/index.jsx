import { useContext } from "react";
import { UnitContext } from "../../contexts/unitContext";

const Unit = () => {
  const { unit, handleUnit } = useContext(UnitContext);

  const handleClick = (e) => {
    handleUnit(e.target.name);
  };

  //console.log(handleUnit);
  return (
    <div className="flex gap-2 mt-auto mb-2 ml-8">
      <button
        className={`${
          unit === "metric" ? "font-semibold" : "font-light"
        } uppercase bg-none text-inherit border-none p-0 cursor-pointer outline-none focus:outline-none text-blue-900 text-xs font-normal leading-normal`}
        onClick={handleClick}
        name="metric"
      >
        Metric
      </button>
      <button
        className={`${
          unit === "imperial" ? "font-semibold" : "font-light"
        } uppercase bg-none text-inherit border-none p-0 cursor-pointer outline-none focus:outline-none text-blue-900 text-xs font-normal leading-normal`}
        onClick={handleClick}
        name="imperial"
      >
        Imperial
      </button>
    </div>
  );
};

export default Unit;
