<script lang="ts">
  import AppForm from '../../components/appForm.svelte';
  import Listings from '../../components/listings.svelte';
</script>

<svelte:head>
  <title>Open MLS</title>
</svelte:head>

<h1>Open MLS</h1>

<section>
  <AppForm />
</section>

<section>
  <Listings />
</section>

<style>
  h1 {
    text-align: center;
  }
</style>
