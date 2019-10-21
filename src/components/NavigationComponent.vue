<template>
  <div class="navigation-container">
    <div class="menu-toggler" @click="menuToggle">
      <i class="material-icons">menu</i>
    </div>
      <div class="menu-items">
        <router-link to="/" class="menu-link b-b">Kalorit</router-link>
        <router-link to="/" class="menu-link b-b">Omat tiedot</router-link>
        <router-link to="addmeal" class="menu-link b-b">Lisää ateria</router-link>
        <router-link to="/" class="menu-link">Kokoa ateria</router-link>
        <router-link to="/" class="menu-link b-t">Tietosuojaseloste</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: "NavigationComponent",
  props: {},
  data(){
    return {
      menuOpen: false
    }
  },
  methods: {
    menuToggle(){
      if(!this.menuOpen){
        document.querySelector(".navigation-container").classList.add("open");
        document.querySelector(".menu-toggler").classList.add("open");
      }
      else{
        document.querySelector(".navigation-container").classList.remove("open");
        document.querySelector(".menu-toggler").classList.remove("open");
      }
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>

<style scoped>
  .navigation-container{
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 60vw;
    max-width: 360px;
    background: #fff;
    z-index: 999;
    transition: transform 0.2s ease-in-out;
    transform: translateX(-100%);
    border-right: 1px solid rgba(33, 33, 44, 0.25);
    display: flex;
  }

  .menu-toggler{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: transform 0.2s ease-in-out;
    transform: translateX(100%);
  }

  .open{
    transform: translateX(0%);
  }

  .menu-items{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .menu-link{
    padding: 2rem;
    text-decoration: none;
    color: rgba(0,0,0,0.75);
  }

  .menu-link:first-child{
    margin-top: 4rem;
  }

  .menu-link:last-child{
    margin-top: auto;
  }

  .menu-active{
    color: #000;
    font-weight: bold;
  }

  .b-b{
    border-bottom: 1px solid rgba(33,33,44,0.05);
  }

  .b-t{
    border-top: 1px solid rgba(33,33,44,0.05);
  }
</style>