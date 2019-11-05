<template>
  <div class="container">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("checkUser", { router: this.$router });
    this.$store.dispatch("updateMealList", { router: this.$router });
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