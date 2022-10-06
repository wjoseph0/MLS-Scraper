<script lang="ts">
  import { listings } from '../stores/listingsStore';

  let listingsResult: any;

  listings.subscribe((value) => {
    listingsResult = value;
  });
</script>

<h3>Listings:</h3>

<div class="listings">
  {#if listingsResult[0] !== 'test'}
    {#each listingsResult as listing}
      <h4>{listing.location.address.line}</h4>
    {/each}
  {:else}
    <p>Listings will show up here.</p>
  {/if}
</div>

<style>
  h3,
  h4,
  p {
    text-align: center;
  }
</style>
