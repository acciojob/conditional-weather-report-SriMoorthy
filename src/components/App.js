
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay"


const def = {temperature : 0 , condition : "Cool"}

const App = () => {

  const[data,setData] = useState(def)

  useEffect(()=>{
    setTimeout(()=>{
      setData({ temperature : 25, condition : "Sunny"})
    },1000)
  })

  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay data = {data}/>
    </div>
  );
};

export default App;
