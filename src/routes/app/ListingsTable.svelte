<script lang="ts">
  import { fade } from 'svelte/transition';
  export let listings: any;

  // Holds table sort state.  Initialized to reflect table sorted by id column ascending.
  let sortBy = { col: 'id', ascending: true };

  $: sort = (column: string) => {
    if (sortBy.col == column) {
      sortBy.ascending = !sortBy.ascending;
    } else {
      sortBy.col = column;
      sortBy.ascending = true;
    }

    // Modifier to sorting function for ascending or descending
    let sortModifier = sortBy.ascending ? 1 : -1;

    let sort = (a: any, b: any) =>
      a[column] < b[column] ? -1 * sortModifier : a[column] > b[column] ? 1 * sortModifier : 0;

    listings = listings.sort(sort);
  };
</script>

<table in:fade>
  <thead>
    <tr>
      <th>Address</th>
      <th on:click={() => sort('list_price')}>Price</th>
      <th on:click={() => sort('list_date')}>List Date</th>
    </tr>
  </thead>
  <tbody>
    {#each listings as listing}
      <tr class="table-data">
        <td id="address-cell">
          <img src={listing.primary_photo.href} alt="x" />
          {listing.location.address.line}
          <p>
            {listing.description.beds} bed {listing.description.baths} bath
            <br />
            {listing.description.sqft} sqft
            <br />
            {listing.description.lot_sqft} sqft lot
          </p>
        </td>
        <td>${listing.list_price}</td>
        <td>{listing.list_date}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
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
    background-color: lightyellow;
  }

  #address-cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
