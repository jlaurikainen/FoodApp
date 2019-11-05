import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AddMeal from "./views/AddMeal.vue";
import UserInfo from "./views/UserInfo.vue";

Vue.use(Router);

export default new Router({
  mode: process.env.CORDOVA_PLATFORM ? "hash" : "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/addmeal",
      name: "addmeal",
      component: AddMeal
    },
    {
      path: "/userinfo",
      name: "userinfo",
      component: UserInfo
    }
  ],
  linkExactActiveClass: "menu-active"
});
