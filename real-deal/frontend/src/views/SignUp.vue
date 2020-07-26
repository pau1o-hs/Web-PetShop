<template>
  <div>
    <div class="login-container">
      <div class="login-item">
        <img
          src="https://img.icons8.com/color/48/000000/user-male.png"
          class="login-icon"
          alt="Customer icon"
        />
        <h1 style="color: white; font-weight: 10px;">
          Fill in your information:
        </h1>
        <br />
        <input type="text" v-model="name" placeholder="name" />
        <input type="text" v-model="CPF" placeholder="CPF" />
        <input type="text" v-model="address" placeholder="address" />
        <input type="text" v-model="phone" placeholder="phone" />
        <input type="text" v-model="email" placeholder="e-mail" />
        <input type="text" v-model="password" placeholder="password" />
        <input type="text" v-model="photo" placeholder="photo (URL)" />

        <button class="send_info" type="submit" v-on:click="signUp">
          Register Me
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      CPF: "",
      name: "",
      address: "",
      photo: "",
      phone: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signUp: function() {
      axios
        .post("http://localhost:8080/api/profile", {
          CPF: this.CPF,
          name: this.name,
          address: this.address,
          photo: this.photo,
          phone: this.phone,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          alert("You are successfully registered! Now, proceed to login.");
          this.$router.push("/login");
        })
        .catch((error) => {
          if (error.response) {
            alert("There are some errors with your submission form.");
            // The request was made and the server responded with a status code
            console.log(error.response.data);
          }
        });
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 40%;
  margin: 0 auto;
  display: flex;
  margin-top: 5%;
  margin-bottom: 5%;
}

.login-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  width: 100%;
  padding: 20px;
  color: #fdfffc;
  background-color: #080357;
  border-radius: 20px;
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
</style>
