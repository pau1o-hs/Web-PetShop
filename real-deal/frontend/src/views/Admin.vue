<template>
  <div class="admin">
    <div class="container">
      <Header></Header>
      <input type="radio" id="i1" name="images" checked />
      <div class="slide_img" id="one">
        <img src="../../public/images/profile/headeradmin.jpg" />
        <h1>ADMINISTRATOR</h1>
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

    <div id="adminsection" class="customsection" style="background-color:mediumseagreen;">
      <p>Child Administrators</p>
    </div>

    <div class="scheduleform">
      <section class="polaroid pol1" style="background-color:mediumseagreen;">
        <img src="../../public/images/profile/admin1.jpg" width="100%" height="80%" />
        <p>Tchutchucão</p>
        <hr />
        <button>Edit</button>
      </section>
      <section class="polaroid pol2" style="background-color:mediumseagreen;">
        <img src="../../public/images/profile/admin2.jpg" width="100%" height="80%" />
        <p>Scooby-Doo</p>
        <hr />
        <button>Edit</button>
      </section>
      <div class="infosection">
        <input type="text" placeholder="CPF" />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="AdminName" />
        <input type="text" placeholder="Phone" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="file" class="btn-add2">Photo</button>
        <button class="btn-add2" style="width: 50%;">Add Admin</button>
      </div>
    </div>

    <div id="clientsection" class="customsection" style="background-color:#2980B9;">
      <p>Clients</p>
    </div>

    <div class="scheduleform">
      <section
        class="polaroid"
        style="background-color:#2980B9;"
        v-for="client in clients"
        v-bind:key="client.name"
      >
        <img src="../../public/images/profile/cliente1.jpg" width="100%" height="80%" />
        <p>{{ client.name }}</p>
        <hr />
        <button>Edit</button>
      </section>
    </div>

    <div id="productssection" class="customsection" style="background-color:slateblue;">
      <p>Products</p>
    </div>

    <section id="foods">
      <div class="item-unity" v-for="product in products" :key="product._id">
        <img src="../../public/images/racoes/racao-cao.jpg" alt="Ração de gato" />
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

    <div id="servicessection" class="customsection" style="background-color:#E74C3C;">
      <p>Services</p>
    </div>

    <div class="scheduleform">
      <section
        class="polaroid"
        style="background-color:#E74C3C;"
        v-for="service in services"
        :key="service._id"
      >
        <img src="../../public/images/categorias/services.jpg" width="100%" height="80%" />
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

    <div id="schedulesection-admin" class="customsection" style="background-color:darkslategray;">
      <p>Schedules</p>
    </div>

    <!-- Scheduler -->
    <div class="scheduler" id="scheduler">
      <!-- TIME SELECTOR -->
      <div class="time-selector">
        <p id="book-query">I want to book:</p>
        <div class="row-separator"></div>
        <div class="tsel-item1">
          <div class="tsel-up">
            <div class="weeks">
              <span>
                In
                <input type="number" value="0" min="0" />
                weeks
              </span>
            </div>
            <div class="days">
              <span>On</span>
              <select>
                <option selected>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>
            </div>
          </div>
          <div class="column-separator"></div>
          <div class="tsel-down">
            <span>
              For
              <input class="date-input" type="date" />
            </span>
          </div>
        </div>
        <div class="row-separator"></div>
        <div class="tsel-item2">
          <span>Between</span>
          <select>
            <option selected>08:00</option>
            <option>09:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
            <option>17:00</option>
            <option>18:00</option>
          </select>
          <br />
          <span>and</span>
          <select>
            <option>08:00</option>
            <option>09:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option selected>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
            <option>17:00</option>
            <option>18:00</option>
          </select>
        </div>
      </div>
      <!-- TIME DISPLAY -->
      <div class="time-display">
        <div class="display-day">
          <p>11/05</p>
          <div>
            <div class="display-slot reserved">
              <p class="hour">14:30</p>
              <p class="empty">EMPTY</p>
            </div>
            <div class="display-slot reserved">
              <p class="hour">13:00</p>
              <img
                class="icon"
                src="../../public/images/categorias/vacinacao.jpg"
                alt="Vaccination image"
              />
              <img class="icon" src="../../public/images/tchutchucao.jpg" alt="Pet image" />
              <div class="info">
                <p class="service">
                  Vaccination
                  <span class="of">of</span>
                </p>
                <p class="pet">Tchutchucão</p>
              </div>
            </div>
            <div class="display-slot free">
              <p class="hour">11:30</p>
              <img
                class="icon"
                src="../../public/images/categorias/vacinacao.jpg"
                alt="Vaccination image"
              />
              <p class="service">Vaccination</p>
            </div>
            <div class="display-slot reserved">
              <p class="hour">9:30</p>
              <img
                class="icon"
                src="../../public/images/categorias/vacinacao.jpg"
                alt="Vaccination image"
              />
              <img class="icon" src="../../public/images/tchutchucao.jpg" alt="Pet image" />
              <div class="info">
                <p class="service">
                  Vaccination
                  <span class="of">of</span>
                </p>
                <p class="pet">Tchutchucão</p>
              </div>
            </div>
            <div class="display-slot free">
              <p class="hour">08:30</p>
              <img
                class="icon"
                src="../../public/images/categorias/vacinacao.jpg"
                alt="Vaccination image"
              />
              <p class="service">Vaccination</p>
            </div>
          </div>
        </div>
        <div class="display-day">
          <p>18/05</p>
          <div>
            <div class="display-slot free">
              <p class="hour">11:30</p>
              <img
                class="icon"
                src="../../public/images/categorias/vacinacao.jpg"
                alt="Vaccination image"
              />
              <p class="service">Vaccination</p>
            </div>
            <div class="display-slot reserved">
              <p class="hour">14:30</p>
              <p class="empty">EMPTY</p>
            </div>
            <div class="display-slot free">
              <p class="hour">08:30</p>
              <img
                class="icon"
                src="../../public/images/categorias/vacinacao.jpg"
                alt="Vaccination image"
              />
              <p class="service">Vaccination</p>
            </div>
            <div class="display-slot reserved">
              <p class="hour">13:00</p>
              <img
                class="icon"
                src="../../public/images/categorias/vacinacao.jpg"
                alt="Vaccination image"
              />
              <img class="icon" src="../../public/images/tchutchucao.jpg" alt="Pet image" />
              <div class="info">
                <p class="service">
                  Vaccination
                  <span class="of">of</span>
                </p>
                <p class="pet">Tchutchucão</p>
              </div>
            </div>
            <div class="display-slot reserved">
              <p class="hour">14:30</p>
              <p class="empty">EMPTY</p>
            </div>
          </div>
        </div>
        <div class="display-day">
          <p>25/05</p>
          <div>
            <div class="display-slot reserved">
              <p class="hour">13:00</p>
              <img
                class="icon"
                src="../../public/images/categorias/vacinacao.jpg"
                alt="Vaccination image"
              />
              <img class="icon" src="../../public/images/tchutchucao.jpg" alt="Pet image" />
              <div class="info">
                <p class="service">
                  Vaccination
                  <span class="of">of</span>
                </p>
                <p class="pet">Tchutchucão</p>
              </div>
            </div>
            <div class="display-slot free">
              <p class="hour">11:30</p>
              <img
                class="icon"
                src="../../public/images/categorias/vacinacao.jpg"
                alt="Vaccination image"
              />
              <p class="service">Vaccination</p>
            </div>
            <div class="display-slot reserved">
              <p class="hour">14:30</p>
              <p class="empty">EMPTY</p>
            </div>

            <div class="display-slot free">
              <p class="hour">08:30</p>
              <img
                class="icon"
                src="../../public/images/categorias/vacinacao.jpg"
                alt="Vaccination image"
              />
              <p class="service">Vaccination</p>
            </div>

            <div class="display-slot reserved">
              <p class="hour">14:30</p>
              <p class="empty">EMPTY</p>
            </div>
          </div>
        </div>
      </div>
      <!-- PAGINATION -->
      <div class="pagination">
        <ul>
          <li class="prev">&#10094;</li>
          <li class="next">&#10095;</li>
          <li>
            <span>
              Page
              <span style="color: yellow;">1</span>
              of 10
            </span>
          </li>
        </ul>
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
  name: "Admin",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      admins: { name: "" },
      clients: [],
      products: [],
      services: [],
      error: ""
    };
  },
  mounted() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWQwNmJjZmM3NTA1MDNmNTUyMzRkMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU5NTczNzc5MywiZXhwIjoxNTk1ODI0MTkzfQ.Ofmcp_L_6a9V56VeYbIEyNRTmYtqz0ClClBu9lI-Stc";
    axios
      .get("http://localhost:8080/api/admin/customers", {
        headers: { "x-access-token": token }
      })
      .then(response => {
        console.log(response.data);
        this.clients = response.data;
      });

    axios
      .get("http://localhost:8080/api/admin/products", {
        headers: { "x-access-token": token }
      })
      .then(response => {
        console.log(response.data);
        this.products = response.data;
      });

    axios.get("http://localhost:8080/api/services").then(response => {
      console.log(response.data);
      this.services = response.data;
    });
  }
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

.polaroid {
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
}

.pol1 {
  grid-area: polaroid1;
}

.pol2 {
  grid-area: polaroid2;
}

.pol2 {
  grid-area: polaroid3;
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
</style>
