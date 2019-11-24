<template>
  <div class="row">
    <div class="column u-mb-2-5">
      <table class="u-full-width u-mb-2-5">
        <tbody>
          <tr v-for="meal in meals" :key="meal.id">
            <td>{{ meal.name }}</td>
            <td>{{ meal.calories }} kcal</td>
          </tr>
        </tbody>
      </table>
      <router-link
        to="/addmeal"
        tag="button"
        class="u-pull-right button-primary"
      >
        <i class="material-icons u-mr-1">add</i>Lisää ateria
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["meals"]
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
