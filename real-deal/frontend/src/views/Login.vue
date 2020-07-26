<template>
  <div id="login">
    <div class="login-container">
      <div
        class="login-item"
        style="border-bottom-left-radius: 15px; border-top-left-radius: 15px;"
      >
        <img
          src="https://img.icons8.com/plasticine/100/000000/administrative-tools.png"
          class="login-icon"
          alt="Admin icon"
        />
        <h1 style="color: white; font-weight: 10px;">Administrator</h1>
        <br />
        <input type="text" v-model="adminName" placeholder="Admin name" />
        <input type="password" v-model="adminPassword" placeholder="Password" />
        <a href="admin.html">Forgot your password?</a>
        <button class="send_info" type="submit" v-on:click="loginAdmin">Login</button>
        <div style="visibility: hidden;">Just to occupy space</div>
      </div>
      <div
        class="login-item"
        style="border-bottom-right-radius: 15px; border-top-right-radius: 15px;"
      >
        <img
          src="https://img.icons8.com/color/48/000000/user-male.png"
          class="login-icon"
          alt="Customer icon"
        />
        <h1 style="color: white; font-weight: 10px;">Customer</h1>
        <br />
        <input type="text" v-model="customerEmail" placeholder="E-mail" />
        <input type="password" v-model="customerPassword" placeholder="Password" />
        <a href="profile.html">Forgot your password?</a>
        <button class="send_info" type="submit" v-on:click="loginCustomer">Login</button>
        <span>
          Not a member?
          <a href="index.html" id="register-now">Register now</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      customerEmail: "",
      customerPassword: "",
      adminName: "",
      adminPassword: ""
    };
  },
  methods: {
    loginAdmin: function() {
      axios
        .post("http://localhost:8080/api/admin/auth", {
          adminName: this.adminName,
          password: this.adminPassword
        })
        .then(response => {
          alert(response);
        })
        .catch(error => alert(error));
    },
    loginCustomer: function() {
      axios
        .post("http://localhost:8080/api/auth", {
          email: this.customerEmail,
          password: this.customerPassword
        })
        .then(response => {
          alert(response);
        })
        .catch(error => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 50%;
  height: 70vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 7.5%;
}

.login-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  width: 50%;
  padding: 20px;
  opacity: 0.5;
  color: #fdfffc;
}
.login-item:hover {
  background-color: #080357;
  opacity: 1;
}
.login-item a {
  color: #d7cdcc;
}
.login-item #register-now {
  color: #ff8400;
  display: inline;
}
.login-item input[type="text"],
.login-item input[type="password"] {
  background: none;
  display: block;
  width: 220px;
  transition: 0.4s;
  color: #fdfffc;
  margin: 10px auto;
  text-align: center;
  padding: 14px 10px;
  border: 0;
  border: 2px solid #3f84e5;
  outline: none;
  border-radius: 24px;
  opacity: 0.5;
}
.login-item input[type="text"]:hover,
.login-item input[type="password"]:hover {
  opacity: 1;
}
.login-item input[type="text"]:focus,
.login-item input[type="password"]:focus {
  opacity: 1;
  width: 250px;
  border: 2px solid #ff8400;
  transition-duration: 0.1s;
}
.login-item .send_info[type="submit"] {
  background: none;
  display: block;
  width: 150px;
  color: #fdfffc;
  margin: 10px auto;
  text-align: center;
  padding: 14px 10px;
  text-decoration: none;
  border: 0;
  border: 2px solid #ff8400;
  outline: none;
  border-radius: 24px;
  cursor: pointer;
}
.login-item .send_info[type="submit"]:hover {
  background: #ff8400;
  transition-duration: 0.1s;
}

.login-icon {
  background: #3f84e5;
  border-radius: 50%;
  height: 64px;
  width: 64px;
  border: 4px solid #fdfffc;
}
</style>>