import React from 'react';

export function clearMain () {
  const main = document.querySelector('main')
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }
}

export function saveApiKey (apiKey) {
  sessionStorage.setItem('apiKey', apiKey)
}

export function fetchApiData (city, stateCode) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': sessionStorage.getItem('apiKey'),
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
  }

  fetch(
    `https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale?city=${city}&state_code=${stateCode}&offset=0&limit=200&sort=relevance`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}
