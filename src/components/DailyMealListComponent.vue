<template>
  <div class="row">
    <div class="column">
      <h2 class="u-text-center">Päivän ateriasi</h2>
      <table class="u-full-width">
        <thead>
          <tr>
            <th>Ateria</th>
            <th>Kalorit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aamiainen</td>
            <td>123 kcal</td>
            <td>
              <button class="u-pull-right"><i class="material-icons">edit</i></button>
            </td>
          </tr>
          <tr>
            <td>Lounas</td>
            <td>456 kcal</td>
            <td>
              <button class="u-pull-right"><i class="material-icons">edit</i></button>
            </td>
          </tr><tr>
            <td colspan="3"><button class="u-pull-right"><i class="material-icons u-mr-1">add</i>Lisää ateria</button></td>
          </tr>
        </tbody>
      </table>
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
  button{
    margin-bottom: 0px;
    padding: 0px 15px;
    display: flex;
  }

  table{
    margin-bottom: 0px;
  }

  .material-icons{
    font-size: 1.5rem;
    align-self: center;
  }

  tr:last-child td{
    border-bottom: none;
    padding-bottom: 0px;
  }
</style>