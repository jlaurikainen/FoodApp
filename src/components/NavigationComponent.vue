<template>
  <div class="navigation-wrapper">
    <ul class="nav-list">
      <li class="nav-list-item"></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navigation-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background: rgb(35, 0, 44);
  z-index: 999;
  transform: translateX(-100%);
}
</style>
