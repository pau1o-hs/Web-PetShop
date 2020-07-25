<template>
  <div class="foods">
    <section id="foods">
      <v-container class="my-5">
        <div
          class="item-unity food1"
          v-for="(item, index) in products"
          :key="item.username"
        >
          <v-layout row>
            <v-flex xs12 md6>
              <img
                src="../mockup/images/racoes/racao-gato.jpg"
                alt="Ração de gato"
              />
              <h2 id="nome-item">{{ item.username }}</h2>
              <p id="descricao-item">{{ index }}</p>
              <p id="preco">R$0,00</p>
              <button id="adicionar-carrinho">Adicionar ao carrinho</button>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
import axios from "axios";
// const url = "http://localhost:8080/api/products/";

export default {
  name: "Foods",
  data() {
    return {
      products: [],
      error: "",
    };
  },
  mounted() {
    var vm = this;
    axios
      .get("https://run.mocky.io/v3/baa0bfa5-b6a0-472f-acad-25a53ebdc89b")
      .then((response) => {
        // console.log(response.data.data);
        vm.products = response.data.data;
      });
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
