<template>
  <div class="navigation-wrapper" :class="[!menuOpen ? '' : openClass]">
    <div class="button-wrapper" @click="toggleMenu">
      <i class="material-icons">{{ !menuOpen ? "menu" : "close" }}</i>
    </div>
    <ul class="nav-list">
      <router-link
        to="/userinfo"
        tag="li"
        class="nav-list-item"
      >
        <i class="material-icons u-mr-1">person</i>Tietosi
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      openClass: "menu-open",
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }, 
  watch: {
    '$route' () {
      this.menuOpen = false;
    }
  }
};
</script>

<style scoped>
.navigation-wrapper {
  position: fixed;
  bottom: -100%;
  left: 0px;
  height: 50vh;
  width: 100vw;
  background: #334;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: bottom 0.35s ease-in-out;
}

.nav-list{
  margin-bottom: 0px;
}

.nav-list-item {
  font-size: 2rem;
  color: #fff;
  list-style: none;
  display: flex;
}

.nav-list-item:last-child {
  margin-bottom: 0px;
}

.nav-list-item .material-icons {
  font-size: 2rem;
  align-self: center;
}

.button-wrapper {
  position: fixed;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  height: 4rem;
  width: 4rem;
  background: #334;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  cursor: pointer;
  z-index: 1000;
}

.navigation-wrapper.menu-open {
  bottom: 0%;
}
</style>
