<template>
  <div class="services">
    <div class="container">
      <Header></Header>
      <input type="radio" id="i1" name="images" checked />
      <div class="slide_img" id="one">
        <img src="../mockup/images/dogs3.jpg" />
        <h1>SERVICES</h1>
      </div>
    </div>

    <Schedule />

    <!-- <div class="title2">
      <strong>Select a category</strong>
    </div>
    <section class="menu-services">
      <a class="btn-serv serv1" href="#scheduler">
        <p>Wash</p>
      </a>
      <a class="btn-serv serv2" href="#scheduler">
        <p>Castration</p>
      </a>
      <a class="btn-serv serv3" href="#scheduler">
        <p>Appointment</p>
      </a>
      <a class="btn-serv serv4" href="#scheduler">
        <p>Vaccination</p>
      </a>
      <a class="btn-serv serv5" href="#scheduler">
        <p>Training</p>
      </a>
      <a class="btn-serv serv6" href="#scheduler">
        <p>Temporary accommodation</p>
      </a>
    </section>-->
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
