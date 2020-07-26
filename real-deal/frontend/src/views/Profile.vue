<template>
  <div id="profile">
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
  props: {
    msg: String
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
