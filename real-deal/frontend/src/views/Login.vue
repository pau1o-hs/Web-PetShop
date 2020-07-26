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
        <input type="text" placeholder="Admin name" />
        <input type="password" placeholder="Password" />
        <a href="admin.html">Forgot your password?</a>
        <router-link class="send_info" type="submit" to="/admin">Login</router-link>
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
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <a href="profile.html">Forgot your password?</a>
        <router-link class="send_info" type="submit" to="/profile">Login</router-link>
        <span>
          Not a member?
          <a href="index.html" id="register-now">Register now</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>
