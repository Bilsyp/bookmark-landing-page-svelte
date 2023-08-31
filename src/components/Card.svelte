<script>
  export let image;
  export let version;
  export let info;
  export let download;
</script>

<div class="Card relative">
  <div class="">
    <img src={image} alt="" />
  </div>
  <div class="description">
    <article>
      <h3>
        {download}
      </h3>
      <p>
        {version}
      </p>
    </article>
    <div class="dots" />
    <button
      class=" w-[90%] mt-5 tablet:mt-10 wide:mt-16 bg-Soft_Blue py-3 text-[0.98rem] tablet:text-[1rem] px-8 rounded-md text-gray-50 hover:text-Soft_Blue hover:bg-transparent hover:border-2 border-Soft_Blue transition-all duration-300"
    >
      {info}
    </button>
  </div>
</div>

<style>
  .dots {
    content: "";
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    height: 5px;
    background: url("/images/bg-dots.svg");
  }
  @media screen and (min-width: 1350px) {
    .Card:nth-child(2) {
      margin-top: 70px;
    }
    .Card:nth-child(3) {
      margin-top: 140px;
    }
  }
</style>
