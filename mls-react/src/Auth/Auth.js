import React, { useState, useEffect } from 'react';


export const Auth = () =>{
  const [apiKey, setApiKey] = useState('')
  const [listings, setListings] = useState([]);
  const apiURL = "https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale?city=Chicago&state_code=IL&offset=0&limit=200&sort=relevance`"


  // useEffect(() => {
  //   const apiKey = localStorage.getItem("apiKey");
  //
  //   if(apiKey){
  //     setApiKey(apiKey);
  //   }
  // }, [apiKey]);
  const callAPI = () => {
    const options = {
      method: 'GET',
      headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
      }
    };
    localStorage.setItem("apiKey", {apiKey});
    async function fetchData() {
      const data = await fetch('https://realty-in-us.p.rapidapi.com/locations/auto-complete?input=new%20york', options).then(response => response.json()).then(response => console.log(response)).catch(err => console.error(err));
      setListings(data)
    };
    fetchData()
  }



  useEffect(() => {
    console.log(apiKey)
  }, [apiKey]);




  console.log("State after set", listings)
  return(
      <div style={{ textAlign: 'center'}}>
        <div id="header">RapidAPI Key:</div>
        <input id="apiKeyInput" placeholder = "Rapid API" onChange={e => setApiKey(e.target.value)} ></input>
        <button onClick={callAPI} id="refresh">refresh</button>
        <p>Rapid Apikey: {apiKey}</p>
      </div>

  );
};
