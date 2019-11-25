<template>
  <div class="row">
    <div class="column">
      <!--ul>
        <li><router-link to="/">Daily</router-link></li>
        <li><router-link to="/monthly">Monthly</router-link></li>
      </ul-->
      <router-view />
    </div>
    <MealListComponent :meals="meals" />
    <NavigationComponent />
  </div>
</template>

<script>
import MealListComponent from "../components/MealListComponent";
import NavigationComponent from "../components/NavigationComponent";

import { mapState } from "vuex";

export default {
  components: {
    MealListComponent,
    NavigationComponent
  },
  computed: {
    ...mapState({
      meals: state => state.meals
    })
  }
};
</script>

<style scoped>
  body{
    padding-bottom: 3rem;
  }
</style>
