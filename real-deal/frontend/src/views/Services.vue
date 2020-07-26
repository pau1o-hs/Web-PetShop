<template>
  <div>
    <div class="container">
      <Header></Header>
      <input type="radio" id="i1" name="images" checked />
      <div class="slide_img" id="one">
        <img src="../mockup/images/dogs3.jpg" />
        <h1>SERVICES</h1>
      </div>
    </div>

    <Schedule />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Schedule from "@/components/Schedule.vue";

export default {
  name: "Services",
  components: {
    Header,
    Footer,
    Schedule
  }
};
</script>
