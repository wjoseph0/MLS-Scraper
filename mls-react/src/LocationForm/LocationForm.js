import React, { useState } from 'react';


export const LocationForm = () =>{
  const [cityInput, setCityInput] = useState("")
  const [stateInput, setStateInput] = useState("")



  return(
    <>
      <div id="header">Enter City:</div>
      <input id="cityInput"></input>
      <div id="header">Enter State:</div>
      <input id="stateInput"></input>
      <button onClick={setCityInput()} id="submit">submit</button>
    </>
  );
};
