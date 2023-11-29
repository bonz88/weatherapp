import { createContext, useState } from "react";

export const UnitContext = createContext();

export const UnitProvider = (props) => {
    const [unit, setUnit] = useState("metric");

    const handleUnit = () => {
        if(unit === "imperial"){
            setUnit("imperial")
        }else {
            setUnit("metric");
        }
    }
    return (
        <UnitContext.Provider value={{unit, handleUnit}}>
           {props.children} 
        </UnitContext.Provider>
    )
}