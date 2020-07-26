<template>
  <div class="index">
    <div class="above-slide">
      <div class="title2">
        <strong>What are you looking for?</strong>
      </div>
    </div>

    <section id="menu-home">
      <router-link class="button-home button1" to="/products"
        ><p>PRODUCTS</p></router-link
      >
      <router-link class="button-home button2" to="/services"
        ><p>SERVICES</p></router-link
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Index",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
