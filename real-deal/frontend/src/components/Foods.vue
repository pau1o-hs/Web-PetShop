<template>
  <div class="foods">
    <section id="foods">
      <div class="item-unity" v-for="item in products" :key="item.username">
        <img src="@/mockup/images/racoes/racao-gato.jpg" alt="Ração de gato" />
        <h2 id="nome-item">{{ item.name }}</h2>
        <p id="descricao-item">{{ item.description }}</p>
        <p id="preco">{{ item.price }}</p>
        <button id="adicionar-carrinho">Adicionar ao carrinho</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Foods",
  data() {
    return {
      products: [],
      error: "",
    };
  },
  mounted() {
    axios.get("http://localhost:8080/api/products/").then((response) => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  methods: {
    getImage(path) {
      alert(path);
      return path;
    },
  },
  /* async created() {
    try {
      const res = await axios.get(
        "https://run.mocky.io/v3/baa0bfa5-b6a0-472f-acad-25a53ebdc89b"
      );
      const data = res.data; //     this.error = err;
      this.products = data;
      console.log(products);
    } catch (err) {
      this.error = err;
    }
  }, */
};
</script>

<style scoped></style>
