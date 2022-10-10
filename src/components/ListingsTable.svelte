<script lang="ts">
  import { listings } from '../stores/listingsStore';

  let listingsResult: any;

  listings.subscribe((value) => {
    listingsResult = value;
  });
</script>

<div class="listings">
  {#if listingsResult[0] !== 'test'}
    <h3>Listings:</h3>
    <table>
      <tr>
        <th>Address</th>
        <th>Price</th>
        <th>Bed</th>
        <th>Bath</th>
        <th>Sqft</th>
        <th>Sqft Lot</th>
      </tr>
      {#each listingsResult as listing}
        <tr class="table-data">
          <td>{listing.location.address.line}</td>
          <td>${listing.list_price}</td>
          <td>{listing.description.beds}</td>
          <td>{listing.description.baths}</td>
          <td>{listing.description.sqft}</td>
          <td>{listing.description.lot_sqft}</td>
        </tr>
      {/each}
    </table>
  {:else}
    <p>Listings will show up here.</p>
  {/if}
</div>

<style>
  h3,
  p {
    text-align: center;
  }

  table,
  th,
  td {
    border: 1px solid;
    border-collapse: collapse;
    text-align: center;
  }

  table {
    width: 100%;
  }

  th,
  td {
    padding: 15px;
  }

  .table-data:hover {
    border: 2px solid;
    background-color: lightyellow;
    text-decoration: underline;
  }
</style>
