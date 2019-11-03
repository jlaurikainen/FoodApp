<template>
  <div class="row">
    <div class="column">
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
            v-bind:style="{strokeDashoffset: graphCompletion}"
          />
        </svg>
        <div class="graph-text-info">
          <p>
            {{ caloriePercent }}
            <span>%</span>
          </p>
          <p>{{ getTotalCalories }} kcal</p>
        </div>
      </div>
    </div>
    <div class="column">
      <table class="u-full-width">
        <tbody>
          <tr v-if="meals.length == 0">
            <td>Syö jotain</td>
          </tr>
          <tr v-for="meal in meals" :key="meal.name">
            <td>{{ meal.mealName }}</td>
            <td>{{ meal.mealCalories }} kcal</td>
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
import { mapGetters, mapState } from "vuex";

export default {
  mounted() {
    this.computeGraphCompletion();
  },
  data() {
    return {
      graphCompletion: 628
    };
  },
  computed: {
    ...mapGetters([
      "getCalorieLimit",
      "getTotalCalories"
    ]),
    ...mapState({
      meals: state => state.meals
    }),
    caloriePercent() {
      return parseInt(this.getTotalCalories / this.getCalorieLimit * 100);
    }
  },
  methods: {
    computeGraphCompletion() {
      setTimeout(() => {
        this.graphCompletion = parseInt(628 - (this.caloriePercent / 100 * 628));
      }, 10);
    }
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
  transition: stroke-dashoffset 0.3s ease-in-out;
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

td:only-child {
  text-align: left;
}
</style>