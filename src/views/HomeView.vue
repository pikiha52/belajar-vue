<template>
  <div>
    <div class="min-h-full">
      <side-bar-vue></side-bar-vue>

      <div class="flex flex-1 flex-col lg:pl-64">
        <div
          class="
            flex
            h-16
            flex-shrink-0
            border-b border-gray-200
            bg-white
            lg:border-none
          "
        >
          <button
            type="button"
            class="
              border-r border-gray-200
              px-4
              text-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-cyan-500
              lg:hidden
            "
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="h-6 w-6"
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
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
          </button>

          <!-- topbar -->
          <top-bar-vue></top-bar-vue>
          
        </div>
        <!-- content -->
        <main class="flex-1 pb-8">
          <!-- Page header -->
          <div class="bg-white shadow">
            <div class="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
              <div
                class="
                  py-6
                  md:flex md:items-center md:justify-between
                  lg:border-t lg:border-gray-200
                "
              >
                <div class="min-w-0 flex-1">
                  <!-- Profile -->
                  <div class="flex items-center">
                    <img
                      class="hidden h-16 w-16 rounded-full sm:block"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                      alt=""
                    />
                    <div>
                      <div class="flex items-center">
                        <img
                          class="h-16 w-16 rounded-full sm:hidden"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                          alt=""
                        />
                        <h1
                          class="
                            ml-3
                            text-2xl
                            font-bold
                            leading-7
                            text-gray-900
                            sm:truncate sm:leading-9
                          "
                        >
                          Good morning, Emilia Birch
                        </h1>
                      </div>
                      <dl
                        class="
                          mt-6
                          flex flex-col
                          sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap
                        "
                      >
                        <dt class="sr-only">Company</dt>
                        <dd
                          class="
                            flex
                            items-center
                            text-sm
                            font-medium
                            capitalize
                            text-gray-500
                            sm:mr-6
                          "
                        >
                          <!-- Heroicon name: mini/building-office -->
                          <svg
                            class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Duke street studio
                        </dd>
                        <dt class="sr-only">Account status</dt>
                        <dd
                          class="
                            mt-3
                            flex
                            items-center
                            text-sm
                            font-medium
                            capitalize
                            text-gray-500
                            sm:mr-6 sm:mt-0
                          "
                        >
                          <!-- Heroicon name: mini/check-circle -->
                          <svg
                            class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Verified account
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  <button
                    type="button"
                    class="
                      inline-flex
                      items-center
                      rounded-md
                      border border-gray-300
                      bg-white
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-700
                      shadow-sm
                      hover:bg-gray-50
                      focus:outline-none
                      focus:ring-2
                      focus:ring-cyan-500
                      focus:ring-offset-2
                    "
                  >
                    Add money
                  </button>
                  <button
                    type="button"
                    class="
                      inline-flex
                      items-center
                      rounded-md
                      border border-transparent
                      bg-cyan-600
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-white
                      shadow-sm
                      hover:bg-cyan-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-cyan-500
                      focus:ring-offset-2
                    "
                  >
                    Send money
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 class="text-lg font-medium leading-6 text-gray-900">
                Overview
              </h2>
              <div
                class="
                  mt-2
                  grid grid-cols-1
                  gap-5
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
                <!-- Card -->

                <div class="overflow-hidden rounded-lg bg-white shadow">
                  <div class="p-5">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/scale -->
                        <svg
                          class="h-6 w-6 text-gray-400"
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
                            d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                          />
                        </svg>
                      </div>
                      <div class="ml-5 w-0 flex-1">
                        <dl>
                          <dt
                            class="truncate text-sm font-medium text-gray-500"
                          >
                            Account balance
                          </dt>
                          <dd>
                            <div class="text-lg font-medium text-gray-900">
                              $30,659.45
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-5 py-3">
                    <div class="text-sm">
                      <a
                        href="#"
                        class="font-medium text-cyan-700 hover:text-cyan-900"
                        >View all</a
                      >
                    </div>
                  </div>
                </div>

                <!-- More items... -->
              </div>
            </div>

            <h2
              class="
                mx-auto
                mt-8
                max-w-6xl
                px-4
                text-lg
                font-medium
                leading-6
                text-gray-900
                sm:px-6
                lg:px-8
              "
            >
              Recent activity
            </h2>

            <!-- Activity list (smallest breakpoint only) -->
            <div class="shadow sm:hidden">
              <ul
                role="list"
                class="
                  mt-2
                  divide-y divide-gray-200
                  overflow-hidden
                  shadow
                  sm:hidden
                "
              >
                <li>
                  <a href="#" class="block bg-white px-4 py-4 hover:bg-gray-50">
                    <span class="flex items-center space-x-4">
                      <span class="flex flex-1 space-x-2 truncate">
                        <!-- Heroicon name: mini/banknotes -->
                        <svg
                          class="h-5 w-5 flex-shrink-0 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span
                          class="flex flex-col truncate text-sm text-gray-500"
                        >
                          <span class="truncate">Payment to Molly Sanders</span>
                          <span
                            ><span class="font-medium text-gray-900"
                              >$20,000</span
                            >
                            USD</span
                          >
                          <time datetime="2020-07-11">July 11, 2020</time>
                        </span>
                      </span>
                      <!-- Heroicon name: mini/chevron-right -->
                      <svg
                        class="h-5 w-5 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                </li>

                <!-- More transactions... -->
              </ul>

              <nav
                class="
                  flex
                  items-center
                  justify-between
                  border-t border-gray-200
                  bg-white
                  px-4
                  py-3
                "
                aria-label="Pagination"
              >
                <div class="flex flex-1 justify-between">
                  <a
                    href="#"
                    class="
                      relative
                      inline-flex
                      items-center
                      rounded-md
                      border border-gray-300
                      bg-white
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-700
                      hover:text-gray-500
                    "
                    >Previous</a
                  >
                  <a
                    href="#"
                    class="
                      relative
                      ml-3
                      inline-flex
                      items-center
                      rounded-md
                      border border-gray-300
                      bg-white
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-700
                      hover:text-gray-500
                    "
                    >Next</a
                  >
                </div>
              </nav>
            </div>

            <!-- Activity table (small breakpoint and up) -->
            <div class="hidden sm:block">
              <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div class="mt-2 flex flex-col">
                  <div
                    class="
                      min-w-full
                      overflow-hidden overflow-x-auto
                      align-middle
                      shadow
                      sm:rounded-lg
                    "
                  >
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th
                            class="
                              bg-gray-50
                              px-6
                              py-3
                              text-left text-sm
                              font-semibold
                              text-gray-900
                            "
                            scope="col"
                          >
                            Transaction
                          </th>
                          <th
                            class="
                              bg-gray-50
                              px-6
                              py-3
                              text-right text-sm
                              font-semibold
                              text-gray-900
                            "
                            scope="col"
                          >
                            Amount
                          </th>
                          <th
                            class="
                              hidden
                              bg-gray-50
                              px-6
                              py-3
                              text-left text-sm
                              font-semibold
                              text-gray-900
                              md:block
                            "
                            scope="col"
                          >
                            Status
                          </th>
                          <th
                            class="
                              bg-gray-50
                              px-6
                              py-3
                              text-right text-sm
                              font-semibold
                              text-gray-900
                            "
                            scope="col"
                          >
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 bg-white">
                        <tr class="bg-white">
                          <td
                            class="
                              w-full
                              max-w-0
                              whitespace-nowrap
                              px-6
                              py-4
                              text-sm text-gray-900
                            "
                          >
                            <div class="flex">
                              <a
                                href="#"
                                class="
                                  group
                                  inline-flex
                                  space-x-2
                                  truncate
                                  text-sm
                                "
                              >
                                <!-- Heroicon name: mini/banknotes -->
                                <svg
                                  class="
                                    h-5
                                    w-5
                                    flex-shrink-0
                                    text-gray-400
                                    group-hover:text-gray-500
                                  "
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                <p
                                  class="
                                    truncate
                                    text-gray-500
                                    group-hover:text-gray-900
                                  "
                                >
                                  Payment to Molly Sanders
                                </p>
                              </a>
                            </div>
                          </td>
                          <td
                            class="
                              whitespace-nowrap
                              px-6
                              py-4
                              text-right text-sm text-gray-500
                            "
                          >
                            <span class="font-medium text-gray-900"
                              >$20,000</span
                            >
                            USD
                          </td>
                          <td
                            class="
                              hidden
                              whitespace-nowrap
                              px-6
                              py-4
                              text-sm text-gray-500
                              md:block
                            "
                          >
                            <span
                              class="
                                inline-flex
                                items-center
                                px-2.5
                                py-0.5
                                rounded-full
                                text-xs
                                font-medium
                                bg-green-100
                                text-green-800
                                capitalize
                              "
                              >success</span
                            >
                          </td>
                          <td
                            class="
                              whitespace-nowrap
                              px-6
                              py-4
                              text-right text-sm text-gray-500
                            "
                          >
                            <time datetime="2020-07-11">July 11, 2020</time>
                          </td>
                        </tr>

                        <!-- More transactions... -->
                      </tbody>
                    </table>
                    <!-- Pagination -->
                    <nav
                      class="
                        flex
                        items-center
                        justify-between
                        border-t border-gray-200
                        bg-white
                        px-4
                        py-3
                        sm:px-6
                      "
                      aria-label="Pagination"
                    >
                      <div class="hidden sm:block">
                        <p class="text-sm text-gray-700">
                          Showing
                          <span class="font-medium">1</span>
                          to
                          <span class="font-medium">10</span>
                          of
                          <span class="font-medium">20</span>
                          results
                        </p>
                      </div>
                      <div class="flex flex-1 justify-between sm:justify-end">
                        <a
                          href="#"
                          class="
                            relative
                            inline-flex
                            items-center
                            rounded-md
                            border border-gray-300
                            bg-white
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-gray-700
                            hover:bg-gray-50
                          "
                          >Previous</a
                        >
                        <a
                          href="#"
                          class="
                            relative
                            ml-3
                            inline-flex
                            items-center
                            rounded-md
                            border border-gray-300
                            bg-white
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-gray-700
                            hover:bg-gray-50
                          "
                          >Next</a
                        >
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <!-- end -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBarVue from "@/components/SideBar.vue";
import TopBarVue from "@/components/TopBar.vue";
export default {
  name: "HomeView",
  components: {
    SideBarVue, TopBarVue
  },
};
</script>
