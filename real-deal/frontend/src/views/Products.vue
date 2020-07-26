<template>
  <div>
    <div class="container">
      <Header></Header>
      <input type="radio" id="i1" name="images" checked />
      <div class="slide_img" id="one">
        <img src="../../public/images/bird2.jpg" />
        <h1>PRODUCTS</h1>
      </div>
    </div>

    <div class="title2">
      <strong>Select a category</strong>
    </div>
    <section id="menu-products">
      <a class="btn-prod prod1" href="#foodsection">
        <p>Foods</p>
      </a>
      <a class="btn-prod prod2" href="#toysection">
        <p>Toys</p>
      </a>
      <a class="btn-prod prod3" href="#snacksection">
        <p>Snacks</p>
      </a>
      <a class="btn-prod prod4" href="#walkwaysection">
        <p>Walkway</p>
      </a>
      <a class="btn-prod prod5" href="#clothsection">
        <p>Clothing</p>
      </a>
      <a class="btn-prod prod6" href="#comfortsection">
        <p>Comfort</p>
      </a>
    </section>

    <!-- FOODS -->
    <div id="foodsection" class="customsection" style="background-color:#8E44AD;">
      <p>Foods</p>
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>
    </div>
    <Foods></Foods>

    <!-- TOYS -->
    <div id="toysection" class="customsection" style="background-color:#2980B9;">
      <p>Toys</p>
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>
    </div>
    <Toys></Toys>

    <!-- SNACK -->
    <div id="snacksection" class="customsection" style="background-color:#E74C3C;">
      <p>Snacks</p>
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>
    </div>
    <Snacks></Snacks>

    <!-- WALKWAY -->
    <div id="walkwaysection" class="customsection" style="background-color:#27AE60;">
      <p>Walkway</p>
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>
    </div>
    <Walkway></Walkway>

    <!-- CLOTH -->
    <div id="clothsection" class="customsection" style="background-color:#F39C12;">
      <p>Clothing</p>
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>
    </div>
    <Cloth></Cloth>

    <!-- COMFORT -->
    <div id="comfortsection" class="customsection" style="background-color:#34495E;">
      <p>Comfort</p>
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>
    </div>
    <Comfort></Comfort>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Foods from "@/components/Foods.vue";
import Toys from "@/components/Toys.vue";
import Snacks from "@/components/Snacks.vue";
import Walkway from "@/components/Walkway.vue";
import Cloth from "@/components/Cloth.vue";
import Comfort from "@/components/Comfort.vue";

export default {
  name: "Products",
  components: {
    Header,
    Footer,
    Foods,
    Toys,
    Snacks,
    Walkway,
    Cloth,
    Comfort
  },
  data() {
    return {
      info: null
    };
  }
};
</script>

<style>
.btn-prod {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  border: none;
  background-position: center center;
  background-size: cover;
  transition: all 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(65, 2, 2, 0.19);
}
.btn-prod:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  transition: inherit;
}
.btn-prod:hover:before {
  transform: scale(1.1);
}
.btn-prod p {
  position: relative;
  text-align: center;
  top: 42%;
}

.prod1 {
  background-image: url(../../public/images/categorias/alimentacao.jpg);
  grid-area: a;
}
.prod1:hover:before {
  background-image: url(../../public/images/categorias/alimentacao.jpg);
}

.prod2 {
  background-image: url(../../public/images/categorias/products.jpg);
  grid-area: b;
}
.prod2:hover:before {
  background-image: url(../../public/images/categorias/products.jpg);
}

.prod3 {
  background-image: url(../../public/images/categorias/petiscos.jpg);
  grid-area: c;
}
.prod3:hover:before {
  background-image: url(../../public/images/categorias/petiscos.jpg);
}

.prod4 {
  background-image: url(../../public/images/categorias/passeio.jpg);
  grid-area: d;
}
.prod4:hover:before {
  background-image: url(../../public/images/categorias/passeio.jpg);
}

.prod5 {
  background-image: url(../../public/images/categorias/clothes.jpg);
  grid-area: e;
}
.prod5:hover:before {
  background-image: url(../../public/images/categorias/clothes.jpg);
}

.prod6 {
  background-image: url(../../public/images/categorias/ambiente.jpg);
  grid-area: f;
}
.prod6:hover:before {
  background-image: url(../../public/images/categorias/ambiente.jpg);
}
</style>
