<template>
  <div id="Home">
    <div class="container">
      <Header></Header>
      <Slider></Slider>
    </div>
    <Index></Index>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Slider from "@/components/Slider.vue";
import Index from "@/components/Index.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Index,
    Slider
  }
};
</script>
