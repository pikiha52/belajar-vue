<template>
  <div>
    <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>

      <div class="fixed inset-0 z-40 flex">
        <div
          class="
            relative
            flex
            w-full
            max-w-xs
            flex-1 flex-col
            bg-cyan-700
            pt-5
            pb-4
          "
        >
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              class="
                ml-1
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-white
              "
            >
              <span class="sr-only">Close sidebar</span>
              <!-- Heroicon name: outline/x-mark -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="flex flex-shrink-0 items-center px-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=300"
              alt="Easywire logo"
            />
          </div>
          <nav
            class="
              mt-5
              h-full
              flex-shrink-0
              divide-y divide-cyan-800
              overflow-y-auto
            "
            aria-label="Sidebar"
          >
            <div class="space-y-1 px-2">
              <a
                href="#"
                class="
                  bg-cyan-800
                  text-white
                  group
                  flex
                  items-center
                  px-2
                  py-2
                  text-base
                  font-medium
                  rounded-md
                "
                aria-current="page"
              >
                <!-- Heroicon name: outline/home -->
                <svg
                  class="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Home
              </a>
            </div>
          </nav>
        </div>

        <div class="w-14 flex-shrink-0" aria-hidden="true">
        </div>
      </div>

    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex flex-grow flex-col overflow-y-auto bg-cyan-700 pt-5 pb-4"
      >
        <div class="flex flex-shrink-0 items-center px-4">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=300"
            alt="Easywire logo"
          />
        </div>
        <nav
          class="
            mt-5
            flex flex-1 flex-col
            divide-y divide-cyan-800
            overflow-y-auto
          "
          aria-label="Sidebar"
        >
          <div class="space-y-1 px-2">
            <a
              href="#"
              class="
                bg-cyan-800
                text-white
                group
                flex
                items-center
                px-2
                py-2
                text-sm
                leading-6
                font-medium
                rounded-md
              "
              aria-current="page"
            >
              <!-- Heroicon name: outline/home -->
              <svg
                class="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SideBar",
    }
</script>