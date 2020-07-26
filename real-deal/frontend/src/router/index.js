import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Services from "../views/Services.vue";
import Admin from "../views/Admin.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Cart from "../components/Cart.vue";

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
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
