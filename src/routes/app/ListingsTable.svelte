<script lang="ts">
  export let listings: any;
  let listingsSorted: any;

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
      a[column] < b[column]
        ? -1 * sortModifier
        : a[column] > b[column]
        ? 1 * sortModifier
        : 0;

    listingsSorted = listings.sort(sort);
  };
</script>

<div class="listings">
  <table>
    <thead>
      <tr>
        <th>Address</th>
        <th on:click={() => sort('list_price')}>Price</th>
        <th on:click={() => sort('list_date')}>List Date</th>
      </tr>
    </thead>
    <tbody>
      {#if listingsSorted}
        {#each listingsSorted as listing}
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
      {:else}
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
      {/if}
    </tbody>
  </table>
</div>

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
