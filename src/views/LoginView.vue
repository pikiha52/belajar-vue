<template>
  <div>
    <loading v-model:active="loading" :can-cancel="true" :is-full-page="true" />
    <div
      v-if="errorstatus"
      class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <alert-error-vue msgError="{{ message }}"></alert-error-vue>
      </div>
    </div>
    <form-login-vue v-on:input="valueformlogin"> </form-login-vue>
  </div>
</template>


<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import FormLoginVue from "@/components/FormLogin.vue";
import AlertErrorVue from "@/components/AlertError.vue";
import axios from "axios";
import router from '@/router';
export default {
  name: "LoginView",
  components: {
    FormLoginVue,
    Loading,
    AlertErrorVue,
  },
  data() {
    return {
      message: "",
      loading: false,
      errorstatus: false,
      modules: []
    };
  },
  methods: {
    valueformlogin(valueForm) {
      if (valueForm["username"] && valueForm["password"]) {
        this.loading = true;
        axios({
          method: "POST",
          url: `http://localhost:3000/api/v1/auth/login`,
          data: {
            username: valueForm["username"],
            password: valueForm["password"],
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        })
          .then((response) => {

            if (response.data.token) {
                this.modules.push(response.data.modules)
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("module", this.modules);
                router.push("home");
            } else {
                this.errorstatus = true;
                this.message = response.data.msg;
            }

          })
          .catch((error) => {
            error;
          })
          .finally(() => (this.loading = false));
      }
    },
  },
};
</script>