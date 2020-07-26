<template>
  <div class="header">
    <div style="display: flex; flex: 4;">
      <!-- LOGO -->
      <div class="logo"></div>

      <!-- MENU BAR -->
      <div class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/admin">Profile</router-link>
      </div>

      <!-- SEARCH BAR -->
      <div class="search">
        <input type="text" placeholder=" Search..." />
      </div>

      <div class="profile">
        <router-link to="/login">Login/Register</router-link>
        <div id="profileimg"></div>
        <router-link to="/"
          ><img src="../mockup/images/cart.png" style="height: 5vh; width: 5vh;"
        /></router-link>
        <!--<a href="#">My Profile</a>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
