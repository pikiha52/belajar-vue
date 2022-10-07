<template>
  <!-- <nav>
    <router-link to="/">Login</router-link>
  </nav> -->
  <router-view />
</template>

<script>
import axios from 'axios'
import router from './router';

export default {
  name: "App",
  methods: {
    checkLogin: function () {
      if (localStorage.getItem("token") != null) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
        axios.get(`http://localhost:3000/api/v1/auth/checktoken`)
          .then((response) => {
            if (response.data.msg == 'Token verify') {
              router.push(router.currentRoute.value.fullPath)
            }
          }).catch((error) => {
            console.log(error)
            router.push('/')
          })
      } else {
        router.push('/')
      }
    }
  },
  mounted() {
    this.checkLogin()
  }
}
</script>
