<template>
  <div>
    <div class="container">
      <Header></Header>
      <input type="radio" id="i1" name="images" checked />
      <div class="slide_img" id="one">
        <img src="../mockup/images/profile/header.jpg" />
        <h1>PROFILE</h1>
      </div>
    </div>

    <div class="title2">
      <strong>Would like to add or change something?</strong>
    </div>
    <section id="menu-profile">
      <a class="home-button prof1" href="#profilesection">
        <p>PROFILE INFO</p>
      </a>
      <a class="home-button prof2" href="#petsection">
        <p>PETS MANAGER</p>
      </a>
      <a class="home-button prof4" href="#schedulesection">
        <p>RESERVED SCHEDULES</p>
      </a>
    </section>

    <!-- PROFILE -->
    <div id="profilesection" class="customsection" style="background-color:mediumseagreen;">
      <p>Profile Information</p>
    </div>

    <div id="infoform">
      <section class="infosection" style="width: 30%">
        <p>{{user.name}}</p>
        <div>
          <button class="btn-add">+</button>
        </div>
      </section>

      <section class="infosection" style="width: 30%">
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Adress" />
        <input type="text" placeholder="Phone" />
        <input type="text" placeholder="E-mail" />
      </section>
    </div>

    <!-- PETS -->
    <div id="petsection" class="customsection" style="background-color:#2980B9;">
      <p>Pets Manager</p>
    </div>

    <div id="petform">
      <section
        class="polaroid"
        style="background-color:#2980B9;"
        v-for="pet in pets"
        :key="pet.name"
      >
        <img src="../mockup/images/profile/pet1.png" width="100%" height="80%" />
        <p>{{pet.name}}</p>
        <hr />
        <button>Edit</button>
      </section>
      <div class="infosection">
        <input type="text" placeholder="Name" />
        <input type="select" placeholder="Race" />
        <input type="number" placeholder="Age" />
        <button type="file" class="btn-add2">Photo</button>
        <button class="btn-add2" style="width: 50%;">Add Pet</button>
      </div>
    </div>

    <!-- SCHEDULES -->
    <div id="schedulesection" class="customsection" style="background-color:#E74C3C;">
      <p>Reserved Schedules</p>
      <div class="search">
        <input type="text" placeholder=" Type one of your pets here..." />
      </div>
    </div>

    <div class="scheduleform">
      <section class="polaroid" v-for="schedule in schedules" :key="schedule._id">
        <img src="../mockup/images/profile/pet1.png" width="100%" height="80%" />
        <p>{{schedule.service.name}} (R${{schedule.service.price}})</p>
        <hr />
        <p>11:00 | 10-10-2020</p>
      </section>

      <div class="petregister">
        <button class="btn-add">+</button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Profile",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      user: { name: "" },
      pets: [],
      schedules: [],
      error: ""
    };
  },
  mounted() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWNjODBhMTNlNzA5NGE5MTMyMmZhMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1OTU3MjE4NzMsImV4cCI6MTU5NTgwODI3M30.m8FYtgLH4Q6V7l_7bZ8QCvXE669cMtbYUwrTzFIMZzw";
    axios
      .get("http://localhost:8080/api/profile", {
        headers: { "x-access-token": token }
      })
      .then(response => {
        console.log(response.data);
        this.user = response.data;
      });

    axios
      .get("http://localhost:8080/api/profile/pets", {
        headers: { "x-access-token": token }
      })
      .then(response => {
        console.log(response.data);
        this.pets = response.data;
      });

    axios
      .get("http://localhost:8080/api/schedule", {
        headers: { "x-access-token": token }
      })
      .then(response => {
        console.log(response.data);
        this.schedules = response.data;
      });
  }
};
</script>

<style>
.customsection {
  margin: 0 auto;
  display: flex;
  text-align: center;
  width: 65%;
  height: 8vh;
  margin-bottom: 5vh;
  justify-content: space-around;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(65, 2, 2, 0.19);
}
.customsection p {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 5vh;
  font-weight: bold;
  align-self: center;
  color: white;
}

#menu-profile {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 65%;
  height: 70vh;
  margin: 0 auto;
  background-color: none;
  justify-content: space-between;
  grid-gap: 2.5vh;
  grid-template-areas: "btn-prof1 btn-prof2 btn-prof2" "btn-prof1 btn-prof4 btn-prof4";
  align-self: center;
  margin-bottom: 5vh;
}
#menu-profile a {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 40px;
  color: white;
  font-weight: bold;
  text-shadow: 0px 0px 3px black;
  text-decoration: none;
}

.prof1 {
  background-image: url("../../public/images/profile/profileinfo.jpg");
  grid-area: btn-prof1;
}

.prof2 {
  background-image: url("../../public/images/profile/petmanager.jpg");
  grid-area: btn-prof2;
}

.prof3 {
  background-image: url("../../public/images/products-header.jpg");
  grid-area: btn-prof3;
}

.prof4 {
  background-image: url("../../public/images/profile/schedule.jpg");
  grid-area: btn-prof4;
}

#infoform {
  display: flex;
  width: 65%;
  height: 50%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
}

.infosection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.infosection p,
.infosection .btn-add2,
.infosection input {
  display: block;
  transition: 0.4s;
  width: 220px;
  margin: 1vh auto;
  text-align: center;
  padding: 14px 10px;
  border: 0;
  outline: none;
  border-radius: 24px;
  font-weight: bold;
  opacity: 0.5;
}
.infosection p:hover,
.infosection .btn-add2:hover,
.infosection input:hover {
  opacity: 1;
}
.infosection p,
.infosection .btn-add2 {
  background-color: mediumseagreen;
  box-shadow: 0 0 5px mediumseagreen;
  color: white;
}
.infosection input {
  background: none;
  border: 2px solid dodgerblue;
}
.infosection input:focus {
  opacity: 1;
  background-color: white;
  width: 250px;
}
.infosection div {
  width: 75%;
  height: 37.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(65, 2, 2, 0.19);
}

#petform {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 65%;
  height: 40%;
  margin: 0 auto;
  background-color: none;
  justify-content: space-between;
  grid-gap: 2.5vh;
  grid-template-areas: "polaroid1 polaroid2 polaroid3 pet-register";
  align-self: center;
  margin-bottom: 5vh;
}
#petform a {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 40px;
  color: white;
  font-weight: bold;
  text-shadow: 0px 0px 3px black;
  text-decoration: none;
}

.pet1 {
  background-image: url("../../public/images/profile/pet1.png");
  grid-area: btn-pet1;
}

.pet2 {
  background-image: url("../../public/images/profile/pet2.jpg");
  grid-area: btn-pet2;
}

.pet3 {
  background-image: url("../../public/images/profile/pet3.jpg");
  grid-area: btn-pet3;
}

.pet4 {
  background-image: url("../../public/images/profile/admin1.jpg");
  grid-area: btn-pet4;
}

.petregister {
  grid-area: pet-register;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(65, 2, 2, 0.19);
  width: 100%;
  height: 100%;
}
.petregister input {
  margin: 2vh 1vw;
}

.btn-add {
  width: 6vh;
  height: 6vh;
  font-size: 100px;
  color: white;
  background-color: mediumseagreen;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(65, 2, 2, 0.1);
  border: 0;
  outline: none;
  border-radius: 1000%;
  transition-duration: 0.5s;
  opacity: 0.5;
}
.btn-add:hover {
  transform: scale(1.1);
  opacity: 1;
}

.scheduleform {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 65%;
  height: 40%;
  margin: 0 auto;
  background-color: none;
  justify-content: space-between;
  grid-gap: 2.5vh;
  grid-template-areas: "polaroid1 polaroid2 pet-register";
  align-self: center;
  margin-bottom: 5vh;
}
</style>