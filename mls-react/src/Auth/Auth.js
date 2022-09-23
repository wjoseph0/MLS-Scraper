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
      'X-RapidAPI-Key': '10c2e447bemsh27af4b8b457e846p14d6f3jsn455ace2cd890',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
      }
    };

    async function fetchData() {
      const data = await fetch('https://realty-in-us.p.rapidapi.com/locations/auto-complete?input=new%20york', options).then(response => response.json()).then(response => console.log(response)).catch(err => console.error(err));
      setListings(data[0])
    };
    fetchData()
  }



  useEffect(() => {
  }, []);




  console.log("State after set", listings)
  return(
      <div style={{ textAlign: 'center'}}>
        <div id="header">RapidAPI Key:</div>
        <input id="apiKeyInput"></input>
        <button onClick={setApiKey} id="submit">submit</button>
        <button onClick={callAPI} id="refresh">refresh</button>
        <ul>{listings.map(listing => <li key={listing._id}>{listing._score}</li>)}</ul>
      </div>

  );
};
