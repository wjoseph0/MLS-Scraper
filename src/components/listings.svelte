<script>
  // @ts-nocheck

  import { listings } from '../stores/listingStore';
</script>

<h3>Listings:</h3>

<div class="listings">
  {#each { $listings } as listing}
    <h4>{listing}</h4>
  {/each}
</div>

<style>
  h3 {
    text-align: center;
  }
</style>
