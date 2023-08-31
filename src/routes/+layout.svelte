<script>
  import { onMount } from "svelte";
  import "../app.css";
  const times = "/images/icon-close.svg";
  const hamburger = "/images/icon-hamburger.svg";
  const logoDefault = "/images/logo-bookmark.svg";
  const logoWhite = "/images/icon-bookmark-white.svg";

  let size = { width: 0 };

  onMount(() => {
    size.width = window.innerWidth;
  });

  let isShow = false;
  function handleResize(e) {
    size.width = e.target.innerWidth;
  }
  function handleClick() {
    if (isShow) {
      isShow = false;
    } else {
      isShow = true;
    }
  }
</script>

<svelte:window on:resize={handleResize} />
<svelte:head>
  <title>Bookmark Landing Page</title>
</svelte:head>
<nav
  class={`${
    isShow ? "px-10 py-6" : "px-2"
  }  sticky top-0 z-50 px-4 py-4 flex justify-between  tablet:py-3 items-center transition-all duration-500  desktop:px-20  backdrop-blur-xl`}
>
  <div class="brand z-50">
    <img
      class="wide:w-44"
      src={!isShow || size.width > 578 ? logoDefault : logoWhite}
      alt="logo"
    />
  </div>
  <div
    class={`${
      isShow ? "top-0" : "top-[-100vh]"
    } absolute h-screen top-0 left-0 w-full bg-Very_Dark_Blue bg-opacity-95 z-40 flex justify-center items-center transition-all duration-700 flex-col gap-y-16 tablet:static tablet:bg-transparent tablet:gap-y-0 tablet:h-auto tablet:w-auto`}
  >
    <ul
      class="list_link_page w-full mx-auto flex justify-center items-center flex-col text-gray-50 uppercase tablet:gap-x-5 tablet:text-Very_Dark_Blue tablet:flex-row tablet:w-auto tablet:mt-0"
    >
      <li>Features</li>
      <li>Pricing</li>
      <li>Contact</li>
      <li class="tablet:hidden desktop:block">
        <button
          class="uppercase border-2 desktop:bg-Soft_Red rounded-md desktop:px-10 text-gray-50 border-white w-full py-2 font-medium desktop:border-none hover:text-Soft_Red hover:bg-gray-50 hover:border-Soft_Red"
        >
          Login
        </button>
      </li>
    </ul>
    <ul class=" link gap-x-8 flex justify-center items-center tablet:hidden">
      <li>
        <i class="fa-brands fa-facebook fa-xl" />
      </li>
      <li>
        <i class="fa-brands fa-twitter fa-xl" />
      </li>
    </ul>
  </div>

  <button on:click={handleClick} class=" z-50 block tablet:hidden">
    <img src={!isShow ? hamburger : times} alt="" />
  </button>
</nav>

<slot />

<footer
  class=" p-3 bg-Very_Dark_Blue text-gray-50 flex justify-center items-center flex-col desktop:justify-start desktop:gap-x-8 desktop:flex-row desktop:px-10"
>
  <div>
    <img class="p-4 desktop:w-52" src="/images/logo-custom.svg" alt="" />
  </div>
  <div class="  desktop:flex justify-between w-full">
    <ul
      class="flex justify-center items-center gap-y-5 flex-col text-center my-5 desktop:gap-x-8 desktop:flex-row"
    >
      <li>Features</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul>
    <ul class=" link flex justify-center items-center gap-x-8">
      <li>
        <i class="fa-brands fa-facebook fa-xl" />
      </li>
      <li>
        <i class="fa-brands fa-twitter fa-xl" />
      </li>
    </ul>
  </div>
</footer>

<style>
  .link {
    color: white;
  }
  ul li:hover {
    color: #fa5757;
    cursor: pointer;
    transition: all 300ms;
  }
</style>
