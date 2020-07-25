<template>
  <div id="Home">
    <div class="container">
      <Header></Header>
      <Escorregador></Escorregador>
    </div>
    <Index></Index>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Escorregador from "./escorregador.vue";
import Index from "./Index.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Index,
    Escorregador,
  },
};
</script>

<style>
@import "../mockup/style.css";
</style>
