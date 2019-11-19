<template>
  <div class="row">
    <div class="graph-container">
        <svg width="360" height="240" viewBox="0 0 360 240" class="u-full-width circle-graph">
          <circle
            cx="50%"
            cy="50%"
            v-bind:style="{
              r: circleRadius,
              strokeWidth: strokeWidth,
            }"
            fill="transparent"
            stroke="#ddf"
          />
          <circle
            cx="50%"
            cy="50%"
            v-bind:style="{
              r: circleRadius,
              strokeWidth: strokeWidth,
              strokeDasharray: strokeDashArray,
              strokeDashoffset: strokeDashOffset
            }"
            fill="transparent"
            stroke="#334"
          />
        </svg>
        <div class="graph-text-info">
          <p>
            {{ caloriePercent }}
            <span>%</span>
          </p>
          <p>{{ getTotalCalories }}<br>
          {{ getCalorieLimit }}</p>
        </div>
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
      circleRadius: 100,
      strokeWidth: 30,
      strokeDashOffset: 628
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
    },
    strokeDashArray() {
      return parseInt(2 * this.circleRadius * Math.PI);
    }
  },
  methods: {
    computeGraphCompletion() {
      setTimeout(() => {
        this.strokeDashOffset = parseInt(this.strokeDashArray - (this.caloriePercent / 100 * this.strokeDashArray));
      }, 100);
    }
  }
}
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
</style>