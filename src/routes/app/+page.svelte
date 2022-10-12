<script lang="ts">
  import AppForm from './AppForm.svelte';
  import ListingsTable from './ListingsTable.svelte';
</script>

<h1>Open MLS</h1>

<section>
  <AppForm />
</section>

<section>
  <ListingsTable />
</section>

<style>
  h1 {
    text-align: center;
  }
</style>
