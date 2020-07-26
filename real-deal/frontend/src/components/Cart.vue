<template>
  <div id="cart">
    <div class="container">
      <Header></Header>
      <input type="radio" id="i1" name="images" checked />
      <div class="slide_img" id="one">
        <img src="../mockup/images/products-header.jpg" />
        <h1>CART</h1>
      </div>
    </div>

    <div class="above-slide">
      <div class="title2">
        <strong>See your selected items</strong>
      </div>
    </div>

    <section class="main-block">
      <div class="cart-model" v-for="p in products" :key="p._id">
        <div>
          <!--  <img src="../mockup/images/racoes/racao-gato.jpg" alt="Ração de gato" /> -->
          <h2>{{ p.name }}</h2>
          <p>{{ p.description }}</p>
          <p></p>
          <p>{{ p.price }}</p>
          <p></p>
          <p>quantity</p>
          <p></p>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "cart",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      products: [],
      error: "",
    };
  },
  mounted() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWQwNmJjZmM3NTA1MDNmNTUyMzRkMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU5NTczNzc5MywiZXhwIjoxNTk1ODI0MTkzfQ.Ofmcp_L_6a9V56VeYbIEyNRTmYtqz0ClClBu9lI-Stc";

    axios
      .get("http://localhost:8080/api/admin/products", {
        headers: { "x-access-token": token },
      })
      .then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
  },
};
</script>

<style>
/* @import "../mockup/style.css"; */
</style>
