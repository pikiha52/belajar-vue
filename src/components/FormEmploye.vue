<template>
    <div class="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
        <div>
            <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        </div>
        <form class="space-y-6 sm:space-y-5" @submit.prevent="storeEmploye">
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="employe_name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Employe
                    name</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <input type="text" v-model="employe_name" id="employe_name" autocomplete="given-name"
                        class="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                </div>
            </div>

            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="employe_role" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Employe
                    role</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <select v-model="employe_role" class="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" id="">
                        <option value="">Select one role</option>
                        <option v-for="item in lookUpRole" :key="item.key" v-bind:value="item.key">{{ item.name }}</option>
                    </select>
                </div>
            </div>

            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="employe_phone" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Employe phone
                    number</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <input type="text" v-model="employe_phone" id="employe_phone" autocomplete="family-name"
                        class="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                </div>
            </div>

            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="employe_address" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Employe
                    address</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <textarea v-model="employe_address" id="employe_address" cols="30" rows="10"
                        class="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"></textarea>
                </div>
            </div>

            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <div class="mt-1 sm:col-span-1 sm:mt-0">
                    <button v-on:click="backMenu"
                        class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Back
                    </button>
                </div>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <button
                        class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import EmployeViewVue from '@/views/EmployeView.vue';
export default {
    name: 'FormEmploye',
    data() {
        return {
            employe_name: '',
            employe_role: '',
            employe_phone: '',
            employe_address: '',
            lookUpRole: [
                {'key': 'engineer', 'name': 'Engineer'},
                {'key': 'hrd', 'name': 'HRD'},
                {'key': 'analis', 'name': 'Analis'}
            ]
        }
    },
    methods: {
        backMenu: function() {
            EmployeViewVue.methods.formAddEmploye
        },
        storeEmploye: function() {
            this.$emit("input", {
                'employe_name': this.employe_name,
                'employe_role': this.employe_role,
                'employe_phone': this.employe_phone,
                'employe_address': this.employe_address
            });
        }
    },
}
</script>