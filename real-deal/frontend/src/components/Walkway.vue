<template>
  <div class="walkway">
    <section id="foods">
      <div class="item-unity" v-for="item in products" :key="item.username">
        <img src="../mockup/images/racoes/racao-gato.jpg" alt="Ração de gato" />
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
  name: "Walkway",
  data() {
    return {
      products: [],
      error: ""
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/products/tags/", {
        tag: "walkway"
      })
      .then(response => {
        console.log(response.data);
        this.products = response.data;
      });
  }
};
</script>

<style scoped></style>
