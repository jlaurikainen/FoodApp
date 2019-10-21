<template>
  <div class="row">
    <div class="column">
      <h1 class="u-text-center">{{ date }}</h1>
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
            :stroke-dasharray="graphCircleSegments"
            :stroke-dashoffset="graphCircleCompletion"
          />
        </svg>
        <div class="graph-text-info">
          <h2>
            {{ caloriePercentComplete }}
            <span>%</span>
          </h2>
          <h5>{{ caloriesRemaining }} kcal jäljellä</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DailyCalorieGraphComponent",
  data() {
    return {
      date: this.$store.getters.dateString,
      calorieLimit: this.$store.getters.getCalorieLimit,
      caloriesGained: this.$store.getters.getCaloriesGained,
      graphCircleSegments: 628
    };
  },
  computed: {
    caloriePercentComplete() {
      return parseInt(
        (parseInt(this.caloriesGained) / parseInt(this.calorieLimit)) * 100
      );
    },
    caloriesRemaining() {
      return parseInt(this.calorieLimit) - parseInt(this.caloriesGained);
    },
    graphCircleCompletion() {
      return (
        parseFloat(this.graphCircleSegments) -
        parseFloat(this.graphCircleSegments) *
          (parseFloat(this.caloriesGained) / parseFloat(this.calorieLimit))
      );
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

.graph-text-info h2 {
  line-height: 1;
  margin-bottom: 0.5rem;
}

.graph-text-info h2 span {
  font-size: 2rem;
}

.graph-text-info h5 {
  margin-bottom: 0px;
}

.circle-graph circle {
  transform-origin: 50% 50%;
  transform: rotate(-90deg);
}
</style>
