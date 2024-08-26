import React from "react";
import  { useState } from "react";
import {useMemo} from "react";
import './App.css';

const App = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(180);




  function onWeightChange(event) {
    setWeight(event.target.value);
  }


  function onHeightChange(event) {
    setHeight(event.target.value);
  }



  const output = useMemo(()=>{
    const calculateHeight = height/100;
    return (weight/(calculateHeight*calculateHeight)).toFixed(1);
  },[weight,height]);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">WEIGHT: {weight} KG</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-output"> HEIGHT: {height} CM</p>
        <input className="input-slider" type="range"
        min="140"
        max="220"
        onChange={onHeightChange}
         />
      </div>
      <div className="output-section">
        <p>YOUR BMI IS</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;
