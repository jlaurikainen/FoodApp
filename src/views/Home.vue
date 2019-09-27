<template>
  <v-content>
    <div class="first-time-input">
      <v-row justify="center">
        <v-col md="auto">
          <v-text-field
            label="Your weight"
            type="number"
            prepend-icon="mdi-weight-kilogram"
            id="user-weight"
            outlined
            suffix="kg"
            :rules="[rules.required, rules.min, rules.max]"
          ></v-text-field>
          <div class="text-center">
            <v-btn>
              Next
              <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-content>
</template>

<script>
//import ExampleComponent from '../components/ExampleComponent';

export default {
  components: {
    //ExampleComponent,
  },
  data() {
    return {
      rules: {
        required: value => !!value || "Required.",
        min: value => parseFloat(value) >= 10 || "Weight too low.",
        max: value => parseFloat(value) <= 635 || "Weight too high."
      }
    };
  }
};
</script>

<style scoped></style>
