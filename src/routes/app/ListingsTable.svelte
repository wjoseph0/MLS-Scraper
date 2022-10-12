<script lang="ts">
  import { listings } from '../../stores/listingsStore';

  let listingsResult: any;
  let selected: any;

  listings.subscribe((value) => {
    listingsResult = value;
  });

  let listingsArray: any = [];
  let listingsArraySorted: any = [];

  $: if (listingsResult[0] !== 'test') {
    for (let i = 0; listingsResult[i]; i++) {
      listingsArray[i] = {
        id: i,
        img: listingsResult[i].primary_photo.href,
        address: listingsResult[i].location.address.line,
        price: listingsResult[i].list_price,
        bed: listingsResult[i].description.beds,
        bath: listingsResult[i].description.baths,
        sqft: listingsResult[i].description.sqft,
        lot_sqft: listingsResult[i].description.lot_sqft,
        list_date: listingsResult[i].list_date
      };
      listingsArray = listingsArray;
    }
  }

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

    let sort = (a: { [x: string]: number }, b: { [x: string]: number }) =>
      a[column] < b[column]
        ? -1 * sortModifier
        : a[column] > b[column]
        ? 1 * sortModifier
        : 0;

    listingsArraySorted = listingsArray.sort(sort);
    console.log(listingsArraySorted);
  };
</script>

<div class="listings">
  {#if listingsResult[0] !== 'test'}
    <div id="table-info">
      <h3>Listings:</h3>
      <p>Results: {listingsArray.length}</p>
    </div>

    <table>
      <thead>
        <tr>
          <th>Address</th>
          <th on:click={() => sort('price')}>Price</th>
          <th on:click={() => sort('bed')}>Bed</th>
          <th on:click={() => sort('bath')}>Bath</th>
          <th on:click={() => sort('sqft')}>Sqft</th>
          <th on:click={() => sort('lot_sqft')}>Sqft Lot</th>
          <th on:click={() => sort('id')}>List Date</th>
        </tr>
      </thead>
      <tbody>
        {#if listingsArraySorted[0] == null}
          {#each listingsArray as listing}
            <tr class="table-data">
              <td id="address-cell">
                <img src={listing.img} alt="x" />
                {listing.address}
              </td>
              <td>${listing.price}</td>
              <td>{listing.bed}</td>
              <td>{listing.bath}</td>
              <td>{listing.sqft}</td>
              <td>{listing.lot_sqft}</td>
              <td>{listing.list_date}</td>
            </tr>
          {/each}
        {:else}
          {#each listingsArraySorted as listing}
            <tr class="table-data">
              <td id="address-cell">
                <img src={listing.img} alt="x" />
                {listing.address}
              </td>
              <td>${listing.price}</td>
              <td>{listing.bed}</td>
              <td>{listing.bath}</td>
              <td>{listing.sqft}</td>
              <td>{listing.lot_sqft}</td>
              <td>{listing.list_date}</td>
            </tr>
          {/each}
        {/if}
      </tbody>
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
    background-color: lightyellow;
  }

  #table-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #address-cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
