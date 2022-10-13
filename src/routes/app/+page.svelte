<script lang="ts">
  import ListingsTable from './ListingsTable.svelte';

  let apiKey: string;
  let zipcode: number;
  let listings: any;

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
    if (res.ok) {
      listings = data.data.home_search.results;
    }
  }
</script>

<section>
  <h1>Open MLS</h1>
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
</section>

<section>
  {#if listings}
    <div id="table-info">
      <h3>Listings:</h3>
      <p>Results: {listings.length}</p>
    </div>
    <ListingsTable {listings} />
  {:else}
    <p>Listings will show up here.</p>
  {/if}
</section>

<style>
  h1,
  p {
    text-align: center;
  }

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

  #table-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
