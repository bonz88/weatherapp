import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home";
import City from "./pages/City";

const cities = ["london", "paris"]; // make this list dynamic, aka hate it as state in app

export default function App() {
  const [currentCity, setCurrentCity] = useState({});

  return (
    <Router>
      <div className="container flex max-w-screen-xl mx-auto bg-white">
        <div className="left-container flex flex-col w-1/4 border-r-2 border-gray-300">
          <Sidebar currentCity={currentCity} />
        </div>
        <div className="right-container flex flex-col w-3/4">
          <div className="right-top flex items-center pt-12 pr-20 pb-12 border-b-2 border-gray-300">
            <div className="right-top-left w-8/12">
              <h1 className="text-blue-900 text-3xl font-medium leading-10">Here you can find a word
                  <br /> wide weather forecast</h1>
            </div>
            <div className="right-top-right w-4/12">
              <h3 className="text-blue-800 text-10px font-medium">
                  Contented get distrusts certainty nay are frankness concealed
                  ham. On unaffected resolution on considered of. No thought me
                  husband or colonel forming effects. End sitting shewing who
                  saw besides son musical adapted. Contrasted interested eat
                  alteration pianoforte sympathize was.
              </h3>
            </div>
          </div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/city/:cityId" component={City} />
        </Switch>
        </div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {cities.map((city) => (
              <li>
                <Link to={`/city/${city}`}>{city}</Link>
              </li>
            ))}
          </ul>
        </nav> */}
       
      </div>
    </Router>
  );
}
