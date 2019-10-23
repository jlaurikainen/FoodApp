<template>
  <div class="row">
    <div class="column">
      <table class="u-full-width">
        <tbody>
          <tr>
            <td>Aamiainen</td>
            <td>123 kcal</td>
          </tr>
          <tr>
            <td>Lounas</td>
            <td>456 kcal</td>
          </tr>
        </tbody>
      </table>
      <router-link to="/addmeal" tag="button" class="u-pull-right">
        <i class="material-icons u-mr-1">add</i>Lisää ateria
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DailyMealListComponent",
  props: {}
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
</style>