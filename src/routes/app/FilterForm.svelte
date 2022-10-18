<script lang="ts">
  import { fade } from 'svelte/transition';
  export let showFilterForm;

  function handleClick() {
    showFilterForm = false;
  }
</script>

<div id="container" transition:fade={{ duration: 150 }}>
  <div id="filterForm">
    <div id="price">
      <h3>Price</h3>
      <input type="number" placeholder="Min" />
      -
      <input type="number" placeholder="Max" />
    </div>
    <div id="beds">
      <h3>Bedrooms</h3>
      <input type="number" placeholder="Min" />
      -
      <input type="number" placeholder="Max" />
    </div>
    <div id="baths">
      <h3>Bathrooms</h3>
      <input type="number" placeholder="Min" />
      -
      <input type="number" placeholder="Max" />
    </div>
    <br />
    <button on:click={handleClick}> Save </button>
  </div>
</div>

<style>
  #container {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #filterForm {
    width: 500px;
    max-width: 100%;
    height: 500px;
    max-height: 100%;
    border-radius: 10px;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input {
    width: 40px;
    height: 30px;
    border: 1px solid;
    border-radius: 5px;
  }
</style>
