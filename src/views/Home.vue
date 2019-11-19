<template>
  <div class="row">
    <div class="column">
      <ul>
        <li><router-link to="/">Daily</router-link></li>
        <li><router-link to="/monthly">Monthly</router-link></li>
      </ul>
      <router-view />
    </div>
    <div class="column u-mb-2-5">
      <table class="u-full-width u-mb-2-5">
        <tbody>
          <tr v-for="meal in meals" :key="meal.id">
            <td>{{ meal.name }}</td>
            <td>{{ meal.calories }} kcal</td>
          </tr>
        </tbody>
      </table>
      <router-link to="/addmeal" tag="button" class="u-pull-right button-primary">
        <i class="material-icons u-mr-1">add</i>Lisää ateria
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      meals: state => state.meals
    })
  }
};
</script>

<style scoped>
button {
  margin-bottom: 0px;
  padding: 0px 15px;
  display: flex;
}

.material-icons {
  font-size: 1.5rem;
  align-self: center;
}

td:last-child {
  text-align: right;
}

td:only-child {
  text-align: left;
}
</style>