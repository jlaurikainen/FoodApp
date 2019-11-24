<template>
  <div class="row">
    <div class="graph-container">
      <svg width="360" height="240" :viewBox="svgViewBox" class="u-full-width">
        <rect
          class="svg-background"
          height="100%"
          width="100%"
          fill="rgba(0,0,0,0.25)"
        />
        <line
          x1="0"
          x2="3600"
          :y1="baselineY"
          :y2="baselineY"
          stroke="red"
          stroke-width="20"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      baselineCalories: 1800
    };
  },
  computed: {
    ...mapGetters(["getCalorieLimit"]),
    svgViewBox() {
      return "0 0 3600 " + parseInt(parseInt(this.getCalorieLimit) * 1.5);
    },
    baselineY() {
      return (
        parseInt(parseInt(this.getCalorieLimit) * 1.5) - this.baselineCalories
      );
    }
  }
};
</script>
