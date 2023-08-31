<script>
  import { downloadsEks } from "$lib/index.js";
  import Card from "./Card.svelte";
</script>

<section class="Donwload_Extension">
  <div class="description">
    <article>
      <h2>Download the extension</h2>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
    </article>
  </div>
  <div class="Item_Of_Extension">
    {#each downloadsEks as item (item.image)}
      <Card {...item} />
    {/each}
  </div>
</section>
