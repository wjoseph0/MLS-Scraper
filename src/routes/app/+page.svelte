<script lang="ts">
  import { fade } from 'svelte/transition';
  import FilterForm from './FilterForm.svelte';
  import ListingsTable from './ListingsTable.svelte';

  let apiKey: string;
  let zipcode: number;
  let listings: any;
  export let showFilterForm = false;

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
    listings = 'loading...';
    let res = await fetch('https://realty-in-us.p.rapidapi.com/properties/v3/list', apiOptions);
    let data = await res.json();
    if (res.ok) {
      listings = data.data.home_search.results;
    } else {
      alert('Search failed');
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

{#if listings === 'loading...'}
  <p>loading...</p>
{:else if listings === undefined}
  <p>Listings will show up here.</p>
{:else}
  <section>
    <div id="table-info" in:fade>
      <h3>Listings:</h3>
      <button
        on:click={() => {
          showFilterForm = true;
        }}>Filter</button
      >
      <p>Results: {listings.length}</p>
    </div>
    <ListingsTable bind:listings />
  </section>

  {#if showFilterForm}
    <FilterForm bind:showFilterForm />
  {/if}
{/if}

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
