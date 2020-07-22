import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Products from "../components/Products.vue";
import Services from "../components/Services.vue";
import Admin from "../components/Admin.vue";
import Login from "../components/Login.vue";
import Profile from "../components/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
