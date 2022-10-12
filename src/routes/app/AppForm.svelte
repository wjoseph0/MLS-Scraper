<script lang="ts">
  import { listings } from '../../stores/listingsStore';

  let apiKey: string;
  let zipcode: number;

  $: apiOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    },
    body: `{"offset":0,"postal_code":"${zipcode}","status":["for_sale"],
          "sort":{"direction":"desc","field":"list_date"}}`
  };

  async function handleSubmit() {
    let res = await fetch(
      'https://realty-in-us.p.rapidapi.com/properties/v3/list',
      apiOptions
    );
    let data = await res.json();
    console.log(data);
    if (res.ok) {
      listings.set(data.data.home_search.results);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Enter api key:
    <input type="text" bind:value={apiKey} required />
  </label>

  <label>
    Enter zipcode:
    <input type="number" bind:value={zipcode} required />
  </label>

  <button type="submit">Search</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  label,
  button {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  input {
    border-radius: 10px;
    border-width: 1.5px;
    padding: 8px;
  }
</style>
