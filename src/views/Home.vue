<template>
  <div class="row">
    <div class="column">
      <h1 class="u-text-center">23.10.2019</h1>
      <div class="graph-container">
        <svg width="360" height="240" viewBox="0 0 360 240" class="u-full-width circle-graph">
          <circle cx="50%" cy="50%" r="100" fill="transparent" stroke-width="30" stroke="#ddf" />
          <circle
            cx="50%"
            cy="50%"
            r="100"
            fill="transparent"
            stroke-width="30"
            stroke="#334"
            stroke-dasharray="628"
            stroke-dashoffset="234"
          />
        </svg>
        <div class="graph-text-info">
          <p>
            69
            <span>%</span>
          </p>
          <p>-123 kcal</p>
        </div>
      </div>
    </div>
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
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "getCalorieLimit"
    ])
  }
};
</script>

<style scoped>
.graph-container {
  position: relative;
}

.graph-text-info {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.graph-text-info p {
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.graph-text-info p span {
  font-size: 2rem;
}

.graph-text-info p:last-child {
  font-size: 2rem;
  margin-bottom: 0px;
}

.circle-graph circle:last-child {
  transform-origin: 50% 50%;
  transform: rotate(-90deg);
}

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