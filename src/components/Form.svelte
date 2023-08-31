<script>
  let email = "";
  let isError = false;

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleInput(e) {
    email = e.target.value;
    isError = isValidEmail(email);
    console.log(isError);
  }
</script>

<section class="Form bg-Soft_Blue py-20">
  <div class=" max-w-md mx-auto desktop:max-w-xl">
    <div class=" description text-center">
      <article>
        <p>35,000+ already joined</p>
        <h2>Stay up-to-date with what we’re doing</h2>
      </article>
    </div>
  </div>
  <div
    class=" mt-10 flex flex-col max-w-md mx-auto wide:max-w-2xl desktop:flex-row justify-center gap-x-2 gap-y-3"
  >
    <div
      class={`input-group  rounded-md ${
        !isError && email != "" ? "p-1 bg-Soft_Red" : ""
      }  transition-all duration-700`}
    >
      <div class="relative">
        <input
          bind:value={email}
          on:input={handleInput}
          placeholder="example@gmail.com"
          class=" py-2 px-4 w-full rounded-md outline-none"
        />
        {#if !isError && email != ""}
          <span class="icon error" />
        {:else if isError && email != ""}
          <span class="icon check" />
        {/if}
      </div>
      {#if !isError && email != ""}
        <span class=" p-1 text-[0.89rem] block italic text-gray-50">
          Whoops, make sure it's an email
        </span>
      {/if}
    </div>
    <div class="button">
      <button
        class="w-full rounded-md text-gray-50 font-medium hover:text-Soft_Red hover:bg-gray-50 bg-red-500 py-2 hover:border-2 border-Soft_Red px-10"
      >
        Contact
      </button>
    </div>
  </div>
</section>

<style>
  .icon {
    content: "";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
  }
  .icon.error {
    background: url("/images/icon-error.svg") center center/cover;
  }
  .icon.check {
    background: url("/images/icon-check.svg") center center/cover !important;
  }
</style>
