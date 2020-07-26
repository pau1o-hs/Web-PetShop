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
    <section>
      <div class="cart-model" v-for="p in products" :key="p._id">
        <!--  <img src="../mockup/images/racoes/racao-gato.jpg" alt="Ração de gato" /> -->
        <h2>{{ p.name }}</h2>
        <p>{{ p.description }}</p>
        <p></p>
        <p>{{ p.price }}</p>
        <p></p>
        <p>quantity</p>
        <p></p>
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
    axios
      .post("http://localhost:8080/api/products/", {
        tag: "foods",
      })
      .then((response) => {
        this.products = response.data;
      });
  },
};
</script>

<style>
/* @import "../mockup/style.css"; */
</style>
