<template>
  <div class="row">
    <div class="graph-container">
      <svg
        width="360"
        height="240"
        viewBox="0 0 360 240"
        class="u-full-width circle-graph"
      >
        <circle
          cx="50%"
          cy="50%"
          :style="{
            r: circleRadius,
            strokeWidth: strokeWidth
          }"
          fill="transparent"
          stroke="#ddf"
        />
        <circle
          cx="50%"
          cy="50%"
          :style="{
            r: circleRadius,
            strokeWidth: strokeWidth,
            strokeDasharray: strokeDashArray,
            strokeDashoffset: strokeDashOffset,
            transformOrigin: '50% 50%',
            transform: 'rotate(-90deg)'
          }"
          fill="transparent"
          stroke="#334"
        />
        <text
          x="50%"
          y="45%"
          font-size="3.5rem"
          dominant-baseline="middle"
          text-anchor="middle"
        >
          {{ caloriePercent }}%
          <tspan x="50%" y="57.5%" font-size="0.6em">
            {{ getTotalCalories }}
          </tspan>
          <tspan x="50%" y="65%" font-size="0.6em">
            {{ getCalorieLimit }}
          </tspan>
        </text>
      </svg>
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
    ...mapGetters(["getCalorieLimit", "getTotalCalories"]),
    ...mapState({
      meals: state => state.meals
    }),
    caloriePercent() {
      return parseInt((this.getTotalCalories / this.getCalorieLimit) * 100);
    },
    strokeDashArray() {
      return parseInt(2 * this.circleRadius * Math.PI);
    }
  },
  methods: {
    computeGraphCompletion() {
      setTimeout(() => {
        this.strokeDashOffset = parseInt(
          this.strokeDashArray -
            (this.caloriePercent / 100) * this.strokeDashArray
        );
      }, 100);
    }
  }
};
</script>

<style scoped>
.graph-container {
  position: relative;
}

.circle-graph circle:last-child {
  transition: stroke-dashoffset 0.3s ease-in-out;
}
</style>
