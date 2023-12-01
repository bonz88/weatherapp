import { Link } from "react-router-dom";
import { getName } from "country-list";

const SidebarCurrentLocation = (props) => {
  return (
    <ul className="mt-12">
      <li>
        <Link className="flex gap-2 items-center" to="/">
          <div className="p-4 rounded bg-gray-200">
            {props.currentCity && (
              <img
                className="w-5"
                src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${props.currentCity.sys?.country}.svg`}
                alt="country flag"
              />
            )}
          </div>
          <div>
            <p className="text-blue-900 text-sm font-light leading-normal tracking-tighter uppercase">
              Current location
            </p>
            <p className="text-blue-900 text-xs font-medium leading-normal no-underline">
              {props.currentCity.sys
                ? `${getName(props.currentCity.sys.country)} - ${
                    props.currentCity.name
                  }`
                : "Home"}
            </p>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default SidebarCurrentLocation;
