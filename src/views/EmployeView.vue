<template>
    <div>
        <loading v-model:active="loading" :can-cancel="true" :is-full-page="true" />
        <div class="min-h-full">
            <side-bar-vue></side-bar-vue>

            <div class="flex flex-1 flex-col lg:pl-64">
                <div class="
            flex
            h-16
            flex-shrink-0
            border-b border-gray-200
            bg-white
            lg:border-none
          ">
                    <button type="button" class="
              border-r border-gray-200
              px-4
              text-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-cyan-500
              lg:hidden">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                        </svg>
                    </button>

                    <!-- topbar -->
                    <top-bar-vue></top-bar-vue>

                </div>
                <!-- content -->
                <main class="flex-1 pb-8" v-if="!addEmploye">
                    <div class="px-4 sm:px-6 lg:px-8">
                        <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Employes</h1>
                                <p class="mt-2 text-sm text-gray-700">A list of all the employe in your company
                                    including
                                    their name, title, address and role.</p>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button type="button" v-on:click="formAddEmploye"
                                    class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Add
                                    employe</button>
                            </div>
                        </div>
                        <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col"
                                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">
                                                    Name</th>
                                                <th scope="col"
                                                    class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                                                    Title</th>
                                                <th scope="col"
                                                    class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                                                    Address</th>
                                                <th scope="col"
                                                    class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                                                    Role</th>
                                                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                                                    <span class="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr v-for="item in employes" :key="item.id">
                                                <td
                                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                                                    {{ item.employe_name }}</td>
                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{
                                                item.employe_role }}</td>
                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                                    {{ item.employe_address }}</td>
                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{
                                                item.employe_role }}
                                                </td>
                                                <td
                                                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                                                    <button v-on:click="showEmployeDetail(item.id)" class="text-indigo-600 hover:text-indigo-900">Edit<span
                                                            class="sr-only">, {{ item.employe_name }}</span></button>
                                                </td>
                                                <td
                                                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                                                    <button v-on:click="removeEmploye(item.id)"
                                                        class="text-red-600 hover:text-red-900">Remove<span
                                                            class="sr-only">, {{ item.employe_name }}</span></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <nav class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                                    aria-label="Pagination">
                                    <div class="hidden sm:block">
                                        <p class="text-sm text-gray-700">
                                            <span class="font-medium">{{ totalItems }}</span>
                                            results
                                        </p>
                                    </div>
                                    <div class="flex flex-1 justify-between sm:justify-end">
                                        <a href="#" v-if="currentPage != 0" v-on:click="currentPage -= 1; listEmploye()"
                                            class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                                        <a href="#" v-if="currentPage < totalPages"
                                            v-on:click="currentPage += 1; listEmploye()"
                                            class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                                    </div>
                                </nav>


                            </div>
                        </div>
                    </div>
                </main>

                <main class="flex-1 pb-8" v-if="addEmploye">
                    <div class="px-4 sm:px-6 lg:px-8">
                        <FormEmploye v-on:input="valueFormEmploye"></FormEmploye>
                    </div>
                </main>

                <!-- end -->
            </div>
        </div>
    </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import SideBarVue from "@/components/SideBar.vue";
import TopBarVue from "@/components/TopBar.vue";
import axios from "axios";
import FormEmploye from "@/components/FormEmploye.vue";
export default {
    name: 'EmployeView',
    data() {
        return {
            currentPage: 0,
            totalItems: 0,
            totalPages: 0,
            employes: null,
            addEmploye: false,
            loading: false,
            showEmploye: false,
            id: 0,
        }
    },
    components: {
        SideBarVue,
        TopBarVue,
        FormEmploye,
        Loading
    },
    methods: {
        listEmploye: function () {
            axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
            axios.get(`http://localhost:3000/api/v1/employe?page=${this.currentPage}&size=10`)
                .then((response) => {
                    this.currentPage = response.data.currentPage,
                        this.totalItems = response.data.totalItems,
                        this.totalPages = response.data.totalPages,
                        this.employes = response.data.tutorials
                }).catch((error) => {
                    console.log(error)
                });
        },
        formAddEmploye: function () {
            if (this.addEmploye == false) {
                this.addEmploye = true
            } else {
                this.addEmploye = false
            }
        },
        valueFormEmploye: async function (valueForm) {
            this.loading = true
            if (valueForm["employe_name"] && valueForm["employe_role"] && valueForm["employe_phone"] && valueForm["employe_address"]) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
                await axios.post(`http://localhost:3000/api/v1/employe/`, {
                    'employe_name': valueForm["employe_name"],
                    'employe_role': valueForm["employe_role"],
                    'employe_phone_number': valueForm["employe_phone_number"],
                    'employe_address': valueForm["employe_address"]
                }).then((response) => {
                    this.loading = false
                    if (response.statusText == 'OK') {
                        this.addEmploye = false
                        this.listEmploye()
                    }
                }).catch((error) => {
                    this.loading = false
                    this.listEmploye()
                    error
                });
            } else {
                this.loading = false
                this.listEmploye()
            }
        },
        removeEmploye: async function (id) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
            await axios.delete(`http://localhost:3000/api/v1/employe/${id}`)
            .then((response) => {
                response
                this.listEmploye()
            }).catch((error) => {
                error
                this.listEmploye()
            });
        }
    },
    mounted() {
        this.listEmploye()
    }
}
</script>