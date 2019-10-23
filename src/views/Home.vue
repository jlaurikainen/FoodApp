<template>
  <div>
    <DailyCalorieGraphComponent />
    <DailyMealListComponent />
  </div>
</template>

<script>
import DailyCalorieGraphComponent from "../components/DailyCalorieGraphComponent";
import DailyMealListComponent from "../components/DailyMealListComponent";

export default {
  components: {
    DailyCalorieGraphComponent,
    DailyMealListComponent
  },
  data() {
    return {};
  }
};
</script>