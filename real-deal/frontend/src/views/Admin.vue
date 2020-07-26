<template>
  <Header></Header>
  <!-- <div id="admin">
    <div class="container">
    </div>
    <Footer></Footer>
  </div> -->
</template>

<script>
import Header from "@/components/Header.vue";
// import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "admin",
  components: {
    Header,
    // Footer
  },
  props: {
    msg: String
  },
  data() {
    return {
      // admins: [],
      clientes: [],
      services: [],
      error: ""
    };
  },
  mounted() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWNjODBhMTNlNzA5NGE5MTMyMmZhMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1OTU3MjE4NzMsImV4cCI6MTU5NTgwODI3M30.m8FYtgLH4Q6V7l_7bZ8QCvXE669cMtbYUwrTzFIMZzw";
    axios
      .get("http://localhost:8080/api/profile", {
        headers: { "x-access-token": token }
      })
      .then(response => {
        console.log(response.data);
        this.clientes = response.data;
      });
  }
};
