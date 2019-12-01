<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    document.addEventListener("backbutton", this.backButtonNavigation, false);
    this.$store.dispatch("checkUser", { router: this.$router });
    this.$store.dispatch("updateMealList", { router: this.$router });
  },
  methods: {
    backButtonNavigation(e) {
      e.preventDefault();
      if (this.$router.currentRoute.fullPath != "/") {
        this.$router.push("/").catch(err => {
          console.log(err);
        });
      } else {
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
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
