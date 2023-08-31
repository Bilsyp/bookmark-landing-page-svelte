<script>
</script>

<section
  class="Hero_Content desktop:flex desktop:justify-between desktop:items-center"
>
  <div class="image_wrapper relative z-[-1] order-3">
    <img class="" src="/images/illustration-hero.svg" alt="hero" />
  </div>
  <div class="description">
    <article>
      <h1>A Simple Bookmark Manager</h1>
      <p>
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
    </article>
    <div class="btn-group">
      <button
        class="btn hover:border-2 border-Soft_Blue transition-all duration-300 hover:text-Soft_Blue hover:bg-transparent bg-Soft_Blue text-gray-50"
      >
        Get it on Chrome
      </button>
      <button
        class="btn hover:bg-transparent hover:border-2 border-Grayish_Blue transition-all duration-300 text-Grayish_Blue bg-[#f7f7f7] shadow-xl"
      >
        Get it on Firefox
      </button>
    </div>
  </div>
</section>

<style>
  .Hero_Content {
    position: relative;
  }
  .Hero_Content::before {
    content: "";
    position: absolute;
    width: 80%;
    top: 15%;
    right: 0;
    height: 220px;
    z-index: -1;
    background-color: blue;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    transition: all 2s;
  }

  @media screen and (min-width: 578px) {
    .Hero_Content::before {
      width: 0;
      height: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    .Hero_Content::before {
      width: 40%;
      top: 30%;
      height: 350px;
    }
  }
  @media screen and (min-width: 1350px) {
    .Hero_Content::before {
      width: 50%;
      top: 30%;
      height: 380px;
    }
  }
</style>
