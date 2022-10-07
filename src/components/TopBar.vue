<template>
  <div class="
      flex flex-1
      justify-between
      px-4
      sm:px-6
      lg:mx-auto lg:max-w-6xl lg:px-8
    ">
    <div class="flex flex-1">
      <form class="flex w-full md:ml-0" action="#" method="GET">
        <label for="search-field" class="sr-only">Search</label>
        <div class="relative w-full text-gray-400 focus-within:text-gray-600">
          <div class="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              flex
              items-center
            " aria-hidden="true">
            <!-- Heroicon name: mini/magnifying-glass -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true">
              <path fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <input id="search-field" name="search-field" class="
              block
              h-full
              w-full
              border-transparent
              py-2
              pl-8
              pr-3
              text-gray-900
              placeholder-gray-500
              focus:border-transparent focus:outline-none focus:ring-0
              sm:text-sm
            " placeholder="Search transactions" type="search" />
        </div>
      </form>
    </div>
    <div class="ml-4 flex items-center md:ml-6">
      <div class="relative ml-3">
        <div>
          <button v-on:click="openMenuTopBar('topbarprofile')" class="
              flex
              max-w-xs
              items-center
              rounded-full
              bg-white
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-500
              focus:ring-offset-2
              lg:rounded-md lg:p-2 lg:hover:bg-gray-50
            " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <img class="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="" />
            <span class="ml-3 hidden text-sm font-medium text-gray-700 lg:block"><span class="sr-only">Open user menu
                for </span>{{ fullname }}</span>
            <!-- Heroicon name: mini/chevron-down -->
            <svg class="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <div id="topbarprofile" class="
            hidden
            absolute
            right-0
            z-10
            mt-2
            w-48
            origin-top-right
            rounded-md
            bg-white
            py-1
            shadow-lg
            ring-1 ring-black ring-opacity-5
            focus:outline-none
          " role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
            id="user-menu-item-0">Your Profile</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
            id="user-menu-item-1">Settings</a>
          <a href="#" v-on:click="signout" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
            id="user-menu-item-2">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";
export default {
  name: "TopBar",
  data() {
    return {
      openprofile: true,
      token: "",
      fullname: ""
    };
  },
  methods: {
    openMenuTopBar(id) {
      var divcontent = document.getElementById(id).classList;
      if (divcontent.contains("hidden")) {
        divcontent.remove("hidden");
      } else {
        divcontent.add("hidden");
      }
    },
    async signout() {
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
      axios
        .post(`http://localhost:3000/api/v1/auth/logout`)
        .then((response) => {
          response
          localStorage.removeItem('token')
          localStorage.removeItem('module')
          router.push('/')
        })
        .catch((error) => {
          console.log(error)
          localStorage.removeItem('token')
          localStorage.removeItem('module')
          router.push('/')
        });
    },
  },
  mounted() {
    this.fullname = localStorage.getItem("fullname")
  }
};
</script>