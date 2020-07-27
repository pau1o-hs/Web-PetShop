<template>
  <div>
    <div class="container">
      <Header></Header>
      <input type="radio" id="i1" name="images" checked />
      <div class="slide_img" id="one">
        <img src="../../public/images/profile/header.jpg" />
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
    <div
      id="profilesection"
      class="customsection"
      style="background-color:mediumseagreen;"
    >
      <p>Profile Information</p>
    </div>

    <div id="infoform">
      <section class="infosection" style="width: 30%">
        <p>{{ user.name }}</p>
        <div>
          <button class="fa fa-btn fa-plus-circle">
            <!-- <input type="file" class="fa fa-btn fa-plus-circle" /> -->
          </button>
        </div>
      </section>

      <section class="infosection" style="width: 30%">
        <input type="text" v-model="editUser.name" placeholder="Name" />
        <input type="text" v-model="editUser.address" placeholder="Address" />
        <input type="text" v-model="editUser.phone" placeholder="Phone" />
        <input type="text" v-model="editUser.email" placeholder="E-mail" />
        <input type="submit" text="Atualizar" v-on:click="updateUserInfo()" />
      </section>
    </div>

    <!-- PETS -->
    <div
      id="petsection"
      class="customsection"
      style="background-color:#2980B9;"
    >
      <p>Pets Manager</p>
    </div>

    <div id="petform">
      <section
        class="polaroid"
        style="background-color:#2980B9;"
        v-for="pet in pets"
        :key="pet.name"
      >
        <img :src="pet.photo" width="100%" height="80%" />
        <p>{{ pet.name }}</p>
        <hr />
        <button>Edit</button>
      </section>
      <div class="infosection">
        <input type="text" placeholder="name" />
        <input type="select" placeholder="race" />
        <input type="number" placeholder="Age" />
        <button type="file" class="fa fa-btn1 fa-plus-circle">Photo</button>
        <button class="fa fa-btn1 fa-plus-circle" style="width: 50%;">
          Add Pet
        </button>
      </div>
    </div>

    <!-- SCHEDULES -->
    <div
      id="schedulesection"
      class="customsection"
      style="background-color:#E74C3C;"
    >
      <p>Reserved Schedules</p>
    </div>

    <div class="scheduleform">
      <section
        class="pet-block"
        v-for="schedule in schedules"
        :key="schedule._id"
      >
        <img :src="schedule.photo" width="100%" height="80%" />
        <p>{{ schedule.service.name }} (R${{ schedule.service.price }})</p>
        <hr />
        <p>{{ schedule.data }}</p>
      </section>

      <div class="petregister">
        <router-link to="/services">
          <button class="fa fa-btn fa-plus-circle"></button>
        </router-link>
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
    Footer,
  },
  data() {
    return {
      editUser: {
        name: null,
        address: null,
        phone: null,
        email: null,
      },
      user: { name: "" },
      pets: [],
      schedules: [],
      error: "",
    };
  },
  methods: {
    updateUserInfo: function() {
      console.log("AH");
      axios
        .put(
          "http://localhost:8080/api/profile",
          {
            name: this.editUser.name,
            address: this.editUser.address,
            phone: this.editUser.phone,
            email: this.editUser.email,
          },
          {
            headers: {
              "x-access-token": this.$token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/profile", {
        headers: { "x-access-token": this.$token },
      })
      .then((response) => {
        console.log(response.data);
        this.user = response.data;
        this.editUser = response.data;
      });

    axios
      .get("http://localhost:8080/api/profile/pets", {
        headers: { "x-access-token": this.$token },
      })
      .then((response) => {
        console.log(response.data);
        this.pets = response.data;
      });

    axios
      .get("http://localhost:8080/api/schedule", {
        headers: { "x-access-token": this.$token },
      })
      .then((response) => {
        console.log(response.data);
        this.schedules = response.data;
      });
  },
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
/* .infosection .fa fa-btn fa-plus-circle, */
.infosection input[type="text"],
.infosection input[type="select"],
.infosection input[type="number"],
.infosection input[type="submit"] {
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
.infosection .fa fa-btn fa-plus-circle:hover,
.infosection input:hover {
  opacity: 1;
}
.infosection p,
/* .infosection .fa fa-btn fa-plus-circle, */
.infosection input[type="submit"] {
  background-color: mediumseagreen;
  box-shadow: 0 0 5px mediumseagreen;
  color: white;
}
.infosection input[type="text"],
.infosection input[type="select"],
.infosection input[type="number"] {
  background: none;
  border: 2px solid dodgerblue;
}
.infosection input[type="text"]:focus .infosection input[type="select"]:focus,
.infosection input[type="number"]:focus {
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
  /* background-color: white; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(65, 2, 2, 0.19);
  width: 100%;
  height: 100%;
}
.petregister input {
  margin: 2vh 1vw;
}

.scheduleform {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 65%;
  height: auto;
  margin: 0 auto;
  background-color: none;
  justify-content: space-between;
  grid-gap: 2.5vh;
  grid-template-areas: "polaroid1 polaroid2 pet-register ";
  align-self: center;
  margin-bottom: 5vh;

  /*   display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 65%;
  height: 40%;
  margin: 0 auto;
  background-color: none;
  justify-content: space-between;
  grid-gap: 2.5vh;
  grid-template-areas: "polaroid1 polaroid2 pet-register";
  align-self: center;
  margin-bottom: 5vh; */
}

/* Editing font awesome favicons */
.fa-btn1 {
  font-size: 20px;
  width: 60px;
  height: 60px;
  text-align: center;
  text-decoration: none;
  margin-bottom: 1vh;
  border-radius: 50%;
  /*  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(65, 2, 2, 0.1); */
  border: 0;
}

.fa-btn1:hover {
  transform: scale(1.1);
}
.fa-btn {
  font-size: 70px;
  width: 60px;
  height: 60px;
  text-align: center;
  text-decoration: none;
  margin: 5px;
  border-radius: 50%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(65, 2, 2, 0.1);
  border: 0;
}

.fa-btn:hover {
  transform: scale(1.1);
}

.fa-plus-circle {
  background: #eeeeee;
  color: mediumseagreen;
}

.pet-block {
  flex-direction: column;
  background-color: #e74c3c;
  box-shadow: 0 0 10px black;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.pet-block img {
  object-fit: cover;
}
.pet-block p,
.pet-block button {
  transition: all 0.1s;
  background: none;
  border: 0;
  outline: none;
  font-weight: bolder;
  font-size: 2vh;
  justify-self: center;
  align-self: center;
  text-align: center;
  padding: 5px 20px;
  color: white;
}
.pet-block button {
  width: 100%;
  align-self: center;
}
.pet-block button:hover {
  transform: scale(1.1);
}

.pol1 {
  grid-area: polaroid1;
}

.pol2 {
  grid-area: polaroid2;
}
</style>
