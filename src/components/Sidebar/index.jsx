import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../Logo";
import SidebarCurrentLocation from "../SidebarCurrentLocation";
//import ListCities from "../ListCities";
//import InputCities from "../InputCities";
//import Unit from "../Unit";

const Sidebar = (props) => {
    const [cities, setCities] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    return (
        <>
        <nav className="px-8">
            <Logo />
            <SidebarCurrentLocation currentCity={props.currentCity} />
            
        </nav>
        </>
    )
}

export default Sidebar;