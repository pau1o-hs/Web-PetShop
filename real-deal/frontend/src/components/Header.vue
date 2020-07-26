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
        <!--<a href="#">My Profile</a>-->
        <router-link to="/cart">
          <img src="../mockup/images/cart.png" style="height: 4vh; width: 4vh;" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
/* Style the top navigation bar */
.header {
  display: flex;
  background-color: rgba(0, 0, 0, 0.158);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  z-index: 100;
  position: absolute;
}

.logo {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 10vh;
  width: 10vh;
  margin-left: 15vh;
  background-image: url("../../public/images/logo.png");
  background-position: center;
  background-size: 6vh;
  background-repeat: no-repeat;
}

.navbar {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-self: center;
  margin-left: 8vh;
  margin-right: 10vh;
}
.navbar a {
  color: white;
  padding: 3.48vh 2vh;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.navbar a:hover {
  border-bottom: 0.4vh solid white;
}

.active {
  border-bottom: 0.4vh solid white;
}

.search {
  align-self: center;
  justify-content: center;
}
.search input[type="text"] {
  padding: 0.8vh;
  border: none;
  font-size: 1rem;
  border-radius: 1.5vh;
  width: 40vh;
}

.profile {
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 10vh;
  color: white;
}
.profile a {
  color: white;
  padding: 3.6vh 2vh;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
}
.profile a:hover {
  border-bottom: 0.4vh solid white;
}

#profileimg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  color: white;
  height: 7vh;
  width: 7vh;
  margin-right: 3vh;
  background-image: url("../../public/images/usericon.png");
  background-position: center;
  background-size: 6vh;
  background-repeat: no-repeat;
  border-radius: 100%;
}

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {
  .row,
  .navbar {
    flex-direction: column;
  }
}
</style>
