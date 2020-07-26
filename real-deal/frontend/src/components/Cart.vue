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

    <Index></Index>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Index from "@/components/Index.vue";

export default {
  name: "cart",
  components: {
    Header,
    Footer,
    Index,
  },
};
</script>

<style>
/* @import "../mockup/style.css"; */
</style>
