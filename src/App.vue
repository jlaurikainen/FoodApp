<template>
  <div class="container">
    <NavigationComponent />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavigationComponent from "./components/NavigationComponent";

export default {
  name: "App",
  components: { NavigationComponent },
  data() {
    return {};
  }
};
</script>

<style>
  .row{
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .fade-enter-active, .fade-leave-active{
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave{
    opacity: 0;
  }
</style>