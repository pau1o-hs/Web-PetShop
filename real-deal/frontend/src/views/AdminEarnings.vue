<template>
  <div>
    <div class="container">
      <Header></Header>
      <input type="radio" id="i1" name="images" checked />
      <div class="slide_img" id="one">
        <img src="https://images6.alphacoders.com/565/thumb-1920-565154.jpg" />
        <h1>Earnings</h1>
      </div>
    </div>

    <!-- FOODS -->
    <div id="foodsection" class="customsection" style="background-color:#FFB918; margin-top:5vh;">
      <p>Products Earnings</p>
    </div>

    <section class="main-block">
      <div class="cart-model" v-for="p in products" :key="p._id">
        <!--  <img src="../../public/images/racoes/racao-gato.jpg" alt="Ração de gato" /> -->
        <h2>{{ p.name }}</h2>
        <p>{{ p.description }}</p>
        <p>{{ p.price }}</p>
        <p>quantity</p>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AdminEarnings",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      info: null
    };
  }
};
</script>

<style>
.main-block {
  display: grid;
  width: 90%;
  margin: 5vh auto;
  align-items: center;
  justify-content: center;
}
.cart-model {
  flex-direction: column;
  background-color: #eeeeee;
  /* border-style: solid; */

  /* border-width: 1px 0px; */
  border-bottom: 0.1vh solid #333;
  border-color: #333;
  /* box-shadow: 0 0 10px black; */

  justify-content: space-around;
  align-items: center;
  height: 150px;
  width: 70vw;
}
.cart-model p {
  padding-top: 1.5vh;
}

.cart-model h2 {
  padding-top: 1vh;
}
</style>
