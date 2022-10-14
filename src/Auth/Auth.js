import React, { useState, useEffect, Fragment } from "react";
import { Table } from "../Table/Table";
import { LocationForm } from "../LocationForm/LocationForm";

//This compoent should just handle
export const Auth = () => {
  const [apiKey, setApiKey] = useState("");
  const [zipInput, setZipInput] = useState("");
  const [listings, setListings] = useState([]);
  const [data, getData] = useState([]);

  const body = {
    limit: 200,
    offset: 0,
    postal_code: zipInput,
    status: ["for_sale", "ready_to_build"],
    sort: { direction: "desc", field: "list_date" },
  };

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "10c2e447bemsh27af4b8b457e846p14d6f3jsn455ace2cd890",
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
    },
    body: JSON.stringify(body),
  };

  async function fetchData() {
    const data = await fetch(
      `https://realty-in-us.p.rapidapi.com/properties/v3/list`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        getData(response.data.home_search.results);
      })
      .catch((err) => console.error(err));
  }

  const callAPI = () => {
    fetchData();
  };

  const fetchAPI = () => {};

  useEffect(() => {
    console.log("api key:", apiKey);
    console.log("listings:", listings);
    console.log("data:", data);
  }, [apiKey, listings, data]);

  //reference; https://stackoverflow.com/questions/47756703/react-multiple-table-rows-in-array-map-during-render
  return (
    <div style={{ textAlign: "center" }}>
      <div id="header">RapidAPI Key:</div>
      <input
        id="apiKeyInput"
        placeholder="Rapid API"
        onChange={(e) => setApiKey(e.target.value)}
      ></input>
      <input
        id="zipInput"
        placeholder="Enter ZipCode"
        onChange={(e) => setZipInput(e.target.value)}
      ></input>
      <button onClick={fetchData} id="refresh">
        refresh
      </button>
      <p>Rapid Apikey: {apiKey}</p>
      <Table data={data} />
      <LocationForm />
    </div>
  );
};
