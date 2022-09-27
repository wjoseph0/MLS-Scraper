import React, { useState, useEffect } from 'react';


export const Auth = () =>{
  const [apiKey, setApiKey] = useState('')


  return(
      <div style={{ textAlign: 'center'}}>
        <div id="header">RapidAPI Key:</div>
        <input id="apiKeyInput" placeholder = "Rapid API" onChange={e => setApiKey(e.target.value)} ></input>
        <button onClick={fetchData} id="refresh">refresh</button>
        <button onClick={fetchAPI} id="fetch">fetch</button>
        <p>Rapid Apikey: {apiKey}</p>
      </div>

  );
};
