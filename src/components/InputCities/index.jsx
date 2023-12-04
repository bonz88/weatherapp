import { useState } from "react";

const InputCities = (props) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(value);
        setValue("");
      };

    const divStyle = {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="%230D084D"><path d="M9.90532 9.45615L7.32343 6.91552C7.99954 6.18094 8.41497 5.20945 8.41497 4.14043C8.41464 1.85359 6.53104 0 4.20732 0C1.8836 0 0 1.85359 0 4.14043C0 6.42726 1.8836 8.28085 4.20732 8.28085C5.21133 8.28085 6.13218 7.93358 6.8555 7.35624L9.44741 9.90689C9.5737 10.0313 9.77873 10.0313 9.90502 9.90689C10.0316 9.78249 10.0316 9.58056 9.90532 9.45615ZM4.20732 7.64382C2.2412 7.64382 0.647356 6.0753 0.647356 4.14043C0.647356 2.20555 2.2412 0.637029 4.20732 0.637029C6.17346 0.637029 7.76729 2.20555 7.76729 4.14043C7.76729 6.0753 6.17346 7.64382 4.20732 7.64382Z" fill="%230D084D"/></svg>')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "5% center"
      };
    return (
        <form onSubmit={handleSubmit}><input className="flex items-center w-full bg-gray-200 text-xs text-blue-900 my-8 rounded border-0 outline-none py-3 pl-10 placeholder-blue-900 font-light leading-normal" style={divStyle} onChange={handleChange} value={value} placeholder="Current location"/></form>
        
    )
}

export default InputCities;