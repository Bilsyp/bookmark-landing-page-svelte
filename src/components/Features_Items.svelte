<script>
  import { featuresItem } from "$lib/index.js";

  let active = "Simple Bookmarking";

  const handleActive = (item) => (active = item);
  $: filters = featuresItem.find((item) => item.feature == active);
</script>

<div class="Feautures_Items h-full">
  <ul class="my-10">
    {#each featuresItem as item (item.title)}
      <li
        class={`${
          item.feature == active
            ? "tablet:border-Soft_Red"
            : "tablet:border-Grayish_Blue"
        } `}
      >
        <button
          on:click={() => handleActive(item.feature)}
          class={`${
            active == item.feature
              ? "border-b-4  text-Very_Dark_Blue border-red-600 tablet:border-none"
              : "text-Grayish_Blue "
          }  py-3 transition-all duration-700 font-medium`}
          >{item.feature}</button
        >
      </li>
    {/each}
  </ul>

  <div class="Item_Of_Feature mt-28">
    <div class="image_wrapper">
      <img src={filters.image} alt={filters.feature} />
    </div>
    <div class="description">
      <article>
        <h2>
          {filters.title}
        </h2>
        <p>
          {filters.description}
        </p>
        <button
          class="hidden wide:block hover:text-Soft_Blue hover:bg-transparent hover:border-2 border-Soft_Blue transition-all duration-300 bg-Soft_Blue py-4 px-8 text-gray-50 rounded-md mt-5"
        >
          More Info
        </button>
      </article>
    </div>
  </div>
</div>

<style>
  .Item_Of_Feature::before {
    content: "";
    position: absolute;
    width: 80%;
    top: 55%;
    left: 0;
    height: 220px;
    z-index: -2;
    background-color: blue;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    transition: all 2s;
  }

  @media screen and (min-width: 578px) {
    .Item_Of_Feature::before {
      width: 0;
      height: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    .Item_Of_Feature::before {
      width: 40%;
      top: 70%;
      height: 300px;
    }
  }
  @media screen and (min-width: 1350px) {
    .Item_Of_Feature::before {
      width: 35%;
      top: 60%;
      height: 350px;
    }
  }
</style>
