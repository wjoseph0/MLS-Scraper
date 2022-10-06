<script lang="ts">
  import AppForm from '../../components/appForm.svelte';
  import ForSale from '../../components/forSale.svelte';

  let apiKey: string;
  let zipcode: number;

  $: apiOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    },
    body: `{"offset":0,"postal_code":"${zipcode}","status":"for_sale",
          "sort":{"direction":"desc","field":"list_date"}}`
  };

  async function handleSubmit() {
    const res = await fetch(
      'https://realty-in-us.p.rapidapi.com/properties/v3/list',
      apiOptions
    );
    const data = await res.json();
    alert(data);
    if (res.ok) {
      return {
        props: { listings: data }
      };
    }
  }
</script>

<section>
  <AppForm />
</section>

<section>
  <ForSale />
</section>
