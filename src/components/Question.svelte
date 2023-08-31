<script>
  import { QandA } from "$lib/index.js";

  const arrow = "/images/icon-arrow.svg";
  const arrowActive = "/images/icon-arrow-active.svg";
  let active = "";

  let isToggled = false;

  function toggle(question) {
    active = question;
    isToggled = !isToggled;
  }
</script>

<section>
  <div class="QandA">
    <div class="description">
      <article>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </article>
    </div>

    <div class="box max-w-xl mx-auto mt-20">
      <ul>
        {#each QandA as item (item.question)}
          <li
            class=" group cursor-pointer border-b-2 my-10 relative overflow-hidden"
          >
            <div class="flex justify-between items-center">
              <h2
                class="  group-hover:text-Soft_Red text-[0.98rem] tablet:text-[1rem] desktop:text-[1.2rem] font-medium text-Very_Dark_Blue"
              >
                {item.question}
              </h2>
              <button
                class={`${
                  isToggled && active == item.question
                    ? " rotate-180"
                    : " rotate-0"
                } transition-all duration-500`}
                on:click={() => toggle(item.question)}
              >
                <img
                  src={isToggled && active == item.question
                    ? arrowActive
                    : arrow}
                  alt=""
                />
              </button>
            </div>
            <div
              class={`${
                isToggled && active == item.question
                  ? " opacity-100 translate-x-0]"
                  : "opacity-0 h-0 translate-x-[-1000px]"
              } transition-all duration-700 py-2`}
            >
              <p
                class=" text-[0.89rem] tablet:text-[0.92rem] desktop:text-[0.98rem] wide:text-[1rem] text-Grayish_Blue"
              >
                {item.answer}
              </p>
            </div>
          </li>
        {/each}
      </ul>
      <button
        class=" rounded-md mx-auto block bg-Soft_Blue text-gray-50 px-5 py-2"
      >
        More Info
      </button>
    </div>
  </div>
</section>
