<template>
  <div class="admin">
    <div class="container">
      <Header></Header>
      <input type="radio" id="i1" name="images" checked />
      <div class="slide_img" id="one">
        <img src="../../public/images/profile/headeradmin.jpg" />
        <h1>ADMINISTRATORS</h1>
      </div>
    </div>

    <div class="above-slide">
      <div class="title2">
        <strong>Choose a subject to manage</strong>
      </div>
    </div>

    <section id="menu-profile-admin">
      <a class="home-button admin1" href="#adminsection">
        <p>ADMINISTRATORS</p>
      </a>
      <a class="home-button admin2" href="#clientsection">
        <p>CLIENTS</p>
      </a>
      <a class="home-button admin3" href="#productssection">
        <p>PRODUCTS</p>
      </a>
      <a class="home-button admin4" href="#schedulesection-admin">
        <p>SCHEDULES</p>
      </a>
      <a class="home-button admin5" href="#servicessection">
        <p>SERVICES</p>
      </a>
    </section>

    <div
      id="adminsection"
      class="customsection"
      style="background-color:mediumseagreen;"
    >
      <p>Child Administrators</p>
    </div>
    <!-- ---------------------------------------------------------------------------------------------------------------------- -->
    <div class="scheduleform">
      <section
        class="polaroid"
        style="background-color:#eeeeee;"
        v-for="childadmin in childAdmins"
        :key="childadmin.name"
      >
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img :src="childadmin.photo" width="100%" height="80%" />
            <p>{{ childadmin.name }}</p>
          </div>
          <div class="flip-card-back">
            <div class="infosection">
              <input type="text" placeholder="CPF" v-model="childadmin.CPF" />
              <input type="text" placeholder="Name" v-model="childadmin.name" />
              <input
                type="text"
                placeholder="admin-name"
                v-model="childadmin.adminName"
              />
              <input
                type="text"
                placeholder="Phone"
                v-model="childadmin.phone"
              />
              <input
                type="text"
                placeholder="E-mail"
                v-model="childadmin.email"
              />
              <input
                type="text"
                placeholder="Password"
                v-model="childadmin.password"
              />
              <input
                type="text"
                placeholder="Photo (URL)"
                v-model="childadmin.photo"
              />
              <button
                class="btn-add2"
                style="width: 50%;"
                v-on:click="deleteAdmin(childadmin._id)"
              >
                Delete Admin
              </button>
            </div>
          </div>
        </div>
      </section>

      <div class="infosection">
        <input type="text" placeholder="CPF" v-model="newAdmin.cpf" />

        <input type="text" placeholder="Name" v-model="newAdmin.name" />
        <input
          type="text"
          placeholder="AdminName"
          v-model="newAdmin.adminName"
        />
        <input type="text" placeholder="Phone" v-model="newAdmin.phone" />
        <input type="text" placeholder="Email" v-model="newAdmin.email" />
        <input type="text" placeholder="Senha" v-model="newAdmin.password" />
        <button type="file" class="btn-add2">Photo</button>
        <button class="btn-add2" style="width: 50%;" v-on:click="createNew()">
          Add Admin
        </button>
      </div>
    </div>
    <!-- ---------------------------------------------------------------------------------------------------------------------- -->
    <div
      id="clientsection"
      class="customsection"
      style="background-color:#2980B9;"
    >
      <p>Clients</p>
    </div>

    <div class="scheduleform">
      <section
        class="polaroid"
        style="background-color:#2980B9;"
        v-for="client in clients"
        v-bind:key="client.name"
      >
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img :src="client.photo" width="100%" height="80%" />
            <p>{{ client.name }}</p>
          </div>
          <div class="flip-card-back">
            <div class="infosection">
              <input type="text" placeholder="CPF" v-model="client.CPF" />
              <input type="text" placeholder="Name" v-model="client.name" />
              <input type="text" placeholder="Phone" v-model="client.phone" />
              <input type="text" placeholder="E-mail" v-model="client.email" />
              <input
                type="text"
                placeholder="Senha"
                v-model="client.password"
              />
              <button
                class="btn-add2"
                style="width: 50%;"
                v-on:click="deleteCustomer(client._id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>
      <div class="infosection">
        <input type="text" placeholder="CPF" v-model="newClient.cpf" />
        <input type="text" placeholder="Name" v-model="newClient.name" />
        <input type="text" placeholder="E-mail" v-model="newClient.email" />
        <input
          type="text"
          placeholder="Password"
          v-model="newClient.password"
        />
        <button type="file" class="btn-add2">Photo</button>
        <button class="btn-add2" style="width: 50%;" v-on:click="createNew()">
          Add Client
        </button>
      </div>
    </div>

    <div
      id="productssection"
      class="customsection"
      style="background-color:slateblue;"
    >
      <p>Products</p>
    </div>

    <section id="foods">
      <div class="item-unity" v-for="product in products" :key="product._id">
        <img :src="product.photo" alt="Ração de gato" />
        <h2 id="nome-item">{{ product.name }}</h2>
        <p id="descricao-item">{{ product.description }}</p>
        <p id="preco">R${{ product.price }}</p>
        <button id="adicionar-carrinho">Update item</button>
      </div>
      <div class="infosection">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Description" />
        <input type="number" placeholder="In Stock" />
        <input type="number" placeholder="Sold" />
        <button type="file" class="btn-add2">Photo</button>
        <button class="btn-add2" style="width: 50%;">Add Client</button>
      </div>
    </section>

    <div
      id="servicessection"
      class="customsection"
      style="background-color:#E74C3C;"
    >
      <p>Services</p>
    </div>

    <div class="scheduleform">
      <section
        class="polaroid"
        style="background-color:#E74C3C;"
        v-for="service in services"
        :key="service._id"
      >
        <img :src="service.photo" width="100%" height="80%" />
        <p>{{ service.name }}</p>
        <hr />
        <button>Edit</button>
      </section>

      <div class="infosection">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Description" />
        <input type="number" placeholder="Price" />
        <!-- <section style="display: flex; width: 100%"> -->
        <button type="file" class="btn-add2">Photo</button>
        <button class="btn-add2" style="width: 50%;">Add Client</button>
        <!-- </section> -->
      </div>
    </div>

    <div
      id="schedulesection-admin"
      class="customsection"
      style="background-color:darkslategray;"
    >
      <p>Schedules</p>
    </div>
    <Schedule />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Schedule from "@/components/Schedule.vue";
import axios from "axios";

export default {
  name: "Admin",
  components: {
    Header,
    Footer,
    Schedule,
  },
  data() {
    return {
      newAdmin: {
        cpf: "",
        name: "",
        adminName: "",
        phone: "",
        email: "",
        password: "",
        photo: "",
        _id: "",
      },
      newClient: {
        cpf: "",
        name: "",
        adminName: "",
        phone: "",
        email: "",
        password: "",
        photo: "",
        _id: "",
      },
      admins: { name: "" },
      clients: [],
      products: [],
      services: [],
      childAdmins: [],
      error: "",
    };
  },
  methods: {
    //quando clicar no button
    createNew: function() {
      // `this` dentro de métodos aponta para a instância Vue
      axios
        .post(
          "http://localhost:8080/api/admin/children",
          {
            headers: { "x-access-token": this.$token },
          },
          {
            CPF: this.newAdmin.cpf,
            name: this.newAdmin.name,
            phone: this.newAdmin.phone,
            email: this.newAdmin.email,
            adminName: this.newAdmin.adminName,
            password: this.newAdmin.password,
            photo: this.newAdmin.photo,
          }
        )
        .then((response) => {
          this.childAdmins.push(response.data);
        });
    },

    createNewCustomer: function() {
      // `this` dentro de métodos aponta para a instância Vue
      axios
        .post(
          "http://localhost:8080/api/admin/children",
          {
            headers: { "x-access-token": this.$token },
          },
          {
            CPF: this.newAdmin.cpf,
            name: this.newAdmin.name,
            phone: this.newAdmin.phone,
            email: this.newAdmin.email,
            adminName: this.newAdmin.adminName,
            password: this.newAdmin.password,
            photo: this.newAdmin.photo,
          }
        )
        .then((response) => {
          this.childAdmins.push(response.data);
        });
    },
    deleteAdmin: function(id) {
      // `this` dentro de métodos aponta para a instância Vue
      axios
        .delete("http://localhost:8080/api/admin/children/" + id, {
          headers: { "x-access-token": this.$token },
        })
        .then((response) => {
          this.childAdmins.push(response.data);
        });
    },
    deleteCustomer: function(id) {
      // `this` dentro de métodos aponta para a instância Vue
      axios
        .delete("http://localhost:8080/api/admin/customers/" + id, {
          headers: { "x-access-token": this.$token },
        })
        .then((response) => {
          this.childAdmins.push(response.data);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/admin/children", {
        headers: { "x-access-token": this.$token },
      })
      .then((response) => {
        this.childAdmins = response.data;
      });
    axios
      .get("http://localhost:8080/api/admin/customers", {
        headers: { "x-access-token": this.$token },
      })
      .then((response) => {
        // console.log(response.data);
        this.clients = response.data;
      });

    axios
      .get("http://localhost:8080/api/admin/products", {
        headers: { "x-access-token": this.$token },
      })
      .then((response) => {
        // console.log(response.data);
        this.products = response.data;
      });

    axios
      .get("http://localhost:8080/api/admin/services", {
        headers: { "x-access-token": this.$token },
      })
      .then((response) => {
        // console.log(response.data);
        this.services = response.data;
      });
  },
};
</script>

<style>
#menu-profile-admin {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 65%;
  height: 70vh;
  margin: 0 auto;
  background-color: none;
  justify-content: space-between;
  grid-gap: 2.5vh;
  grid-template-areas: "btn-admin1 btn-admin1 btn-admin2 btn-admin2" "btn-admin1 btn-admin1 btn-admin3 btn-admin3" "btn-admin5 btn-admin5 btn-admin4 btn-admin4";
  align-self: center;
  margin-bottom: 5vh;
}
#menu-profile-admin a {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 40px;
  color: white;
  font-weight: bold;
  text-shadow: 0px 0px 3px black;
  text-decoration: none;
}

.admin1 {
  background-image: url("../../public/images/profile/profileinfo.jpg");
  grid-area: btn-admin1;
}

.admin2 {
  background-image: url("../../public/images/profile/clients.jpeg");
  grid-area: btn-admin2;
}

.admin3 {
  background-image: url("../../public/images/products-header.jpg");
  grid-area: btn-admin3;
}

.admin4 {
  background-image: url("../../public/images/profile/schedule.jpg");
  grid-area: btn-admin4;
}

.admin5 {
  background-image: url("../../public/images/profile/services.jpeg");
  grid-area: btn-admin5;
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
  height: 4vh;
  margin: 0.7vh auto;
  text-align: center;
  padding: 8px 10px;
  border: 0;
  outline: none;
  border-radius: 24px;
  font-weight: bold;
  opacity: 0.5;
  justify-content: center;
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

/* .polaroid {
  box-shadow: 0 0 10px black;
  align-self: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.polaroid img {
  object-fit: cover;
}
.polaroid p {
  font-weight: bolder;
  font-size: large;
  align-self: center;
  text-align: center;
  padding: 5px 20px;
  color: white;
} */

/* .scheduleform {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 65%;
  height: 40%;
  margin: 0 auto;
  background-color: none;
  justify-content: space-between;
  grid-gap: 2.5vh;
  grid-template-areas: "polaroid1 polaroid2 polaroid3 polaroid4" "polaroid5 polaroid6 polaroid7 pet-register";
  align-self: center;
  margin-bottom: 5vh;
} */

.polaroid {
  flex-direction: column;
  background-color: #e74c3c;
  box-shadow: 0 0 10px black;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.polaroid img {
  object-fit: cover;
}
.polaroid p,
.polaroid button {
  transition: all 0.1s;
  background: none;
  border: 0;
  outline: none;
  font-weight: bolder;
  font-size: large;
  justify-self: center;
  align-self: center;
  text-align: center;
  padding: 5px 20px;
  color: white;
}
.polaroid button {
  width: 100%;
  align-self: center;
}
.polaroid button:hover {
  transform: scale(1.1);
}

.pol1 {
  grid-area: polaroid1;
}

.pol2 {
  grid-area: polaroid2;
}
.pol3 {
  grid-area: polaroid3;
}

.pol4 {
  grid-area: polaroid4;
}
.pol5 {
  grid-area: polaroid5;
}

.pol6 {
  grid-area: polaroid6;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.polaroid:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: mediumseagreen;
  color: black;
}

.flip-card-back {
  background-color: #eeeeee;
  color: white;
  transform: rotateY(180deg);
}
</style>
