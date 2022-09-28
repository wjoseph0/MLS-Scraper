import React, { useState, useEffect, Fragment } from 'react';
import {Table} from '../Table/Table';


export const Auth = () =>{
  const [apiKey, setApiKey] = useState('')
  const [cityInput, setCityInput] = useState('')
  const [stateInput, setStateInput] = useState('')
  const [listings, setListings] = useState([]);
  const [data, getData] = useState([]);
  const apiURL = `https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale?city=Chicago&state_code=IL&offset=0&limit=200&sort=relevance`
  const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
  };

  function setupUrl(){
    const finalURL = `https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale?city=${cityInput}&state_code=${stateInput}&offset=0&limit=200&sort=relevance`
    return finalURL
  }

  async function fetchData() {
    const data = await fetch(setupUrl('IL', 'Chicago'), options)
      .then(response => response.json())
      .then((response) => {
        console.log(response.properties);
        getData(response.properties);
      })
      .catch(err => console.error(err));
  }

  // useEffect(() => {
  //   const apiKey = localStorage.getItem("apiKey");
  //
  //   if(apiKey){
  //     setApiKey(apiKey);
  //   }
  // }, [apiKey]);
  const callAPI = () => {
    fetchData()
  }

  const fetchAPI = () => {
  }

  useEffect(() => {
    console.log("api key:", apiKey);
    console.log("listings:", listings);
    console.log("data:", data);
  }, [apiKey, listings, data]);



  //reference; https://stackoverflow.com/questions/47756703/react-multiple-table-rows-in-array-map-during-render
  return(
        <div style={{ textAlign: 'center'}}>
          <div id="header">RapidAPI Key:</div>
          <input id="apiKeyInput" placeholder = "Rapid API" onChange={e => setApiKey(e.target.value)} ></input>
          <input id="CityInput" placeholder = "Enter City" onChange={e => setCityInput(e.target.value)} ></input>
          <input id="stateInput" placeholder = "Enter State" onChange={e => setStateInput(e.target.value)} ></input>
          <button onClick={fetchData} id="refresh">refresh</button>
          <button onClick={fetchAPI} id="fetch">fetch</button>
          <p>Rapid Apikey: {apiKey}</p>
          <Table data={data} />
        </div>
  );
};
