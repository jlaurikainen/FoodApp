<template>
  <div class="container">
    <transition name="fade">
      <router-view />
    </transition>
    <NavigationComponent />
  </div>
</template>

<script>
import NavigationComponent from "./components/NavigationComponent";

export default {
  components: {
    NavigationComponent
  },
  name: "App",
  mounted() {
    document.addEventListener("backbutton", this.backButtonNavigation, false);
    this.$store.dispatch("checkUser", { router: this.$router });
    this.$store.dispatch("updateMealList", { router: this.$router });
  },
  methods: {
    backButtonNavigation(e) {
      e.preventDefault();
      if(this.$router.currentRoute.fullPath != "/"){
        this.$router.push("/").catch((err) => {});
      }
      else{
        navigator.app.exitApp();
      }
    }
  }
};
</script>

<style>
.row {
  padding-top: 20px;
  padding-bottom: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>