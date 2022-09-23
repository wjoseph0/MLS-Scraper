import React, { useState, useEffect } from 'react';
import {Auth} from './Auth/Auth'
import {LocationForm} from './LocationForm/LocationForm'


export const App = () => {
  const [apiKey, setApiKey] = useState("")
  const [city, setCity] = useState("")
  const [locationState, setLocationState] = useState("")

  useEffect(() => {
    const apiKey = localStorage.getItem("apiKey");
    if(apiKey){
      setApiKey(apiKey);
    }
  }, [apiKey]);

  return(
    <Auth/>
  );
}

export default App;
