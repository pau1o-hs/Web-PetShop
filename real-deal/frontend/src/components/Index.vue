<template>
  <div class="index">
    <div class="above-slide">
      <div class="title2">
        <strong>What are you looking for?</strong>
      </div>
    </div>

    <section id="menu-home">
      <router-link class="home-button button1" to="/products"
        >PRODUCTS</router-link
      >
      <router-link class="home-button button2" to="/products"
        >SERVICES</router-link
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
