<template>
  <div>
    <div class="above-slide">
      <div class="title2">
        <strong>What are you looking for?</strong>
      </div>
    </div>

    <section id="menu-home">
      <router-link class="button-home button1" to="/products">
        <p>PRODUCTS</p>
      </router-link>
      <router-link class="button-home button2" to="/services">
        <p>SERVICES</p>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped>
#menu-home {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 65%;
  height: 40vh;
  margin: 0 auto;
  background-color: none;
  justify-content: space-between;
  grid-gap: 2.5vh;
  grid-template-areas: "homebutton1 homebutton2";
  align-self: center;
  margin-bottom: 5vh;
}
#menu-home .button-home {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 40px;
  color: white;
  font-weight: bold;
  text-shadow: 0px 0px 3px black;
  text-decoration: none;
  z-index: 3;

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

#menu-home .button-home:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  transition: inherit;
}

#menu-home .button-home:hover:before {
  transform: scale(1.1);
}

#menu-home .button-home p {
  position: relative;
  text-align: center;
  top: 42%;
  z-index: 5;
}

.home-button {
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
.home-button:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  transition: inherit;
}
.home-button:hover:before {
  transform: scale(1.1);
}
.home-button p {
  position: relative;
  text-align: center;
  top: 42%;
}

.button1 {
  grid-area: homebutton1;
  background-image: url("../../public/images/categorias/products.jpg");
}
.button1:hover {
  background-image: url("../../public/images/categorias/products.jpg");
}

.button2 {
  grid-area: homebutton2;
  background-image: url("../../public/images/categorias/services.jpg");
}
.button2:hover {
  background-image: url("../../public/images/categorias/services.jpg");
}

.above-slide {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}
.above-slide h2 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
