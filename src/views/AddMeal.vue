<template>
  <div class="row">
    <h1>Lisää ateria</h1>
    <form>
      <div class="row" v-if="errors.length">
        <div class="column">
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <label for="mealName">Aterian nimi</label>
          <input type="text" name="mealName" class="u-full-width" v-model="addMealInfo.mealName" required>
        </div>
      </div>
      <div class="row">
        <div class="one-half column">
          <label for="mealCalories">Kalorit</label>
          <input type="number" name="mealCalories" v-model="addMealInfo.mealCalories" required>
        </div>
        <div class="one-half column">
          <label for="mealCarbs">Hiilihydraatit</label>
          <input type="number" name="mealCarbs" v-model="addMealInfo.mealCarbs" required>
        </div>
      </div>
      <div class="row">
        <div class="one-half column">
          <label for="mealProtein">Proteiinit</label>
          <input type="number" name="mealProtein" v-model="addMealInfo.mealProtein" required>
        </div>
        <div class="one-half column">
          <label for="mealFats">Rasvat</label>
          <input type="number" name="mealFats" v-model="addMealInfo.mealFats" required>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <router-link to="/" tag="button" class="u-pull-left warning">
            <i class="material-icons u-mr-1">close</i>Peruuta
          </router-link>
          <button type="submit" class="u-pull-right" @click.stop.prevent="submit()">
            <i class="material-icons u-mr-1">add</i>Lisää
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  components: {},
  data() {
    return {
      errors: [],
      addMealInfo: {
        mealName: null,
        mealCalories: null,
        mealCarbs: null,
        mealProtein: null,
        mealFats: null
      }
    };
  },
  methods: {
    ...mapActions([
      "updateMealList"
    ]),
    async submit() {
      this.errors = [];
      if(this.addMealInfo.mealName && this.addMealInfo.mealCalories)
      {
        await this.updateMealList(this.addMealInfo);
        this.$router.push("/");
      }
      else {
        this.errors.push("Lisää vähintään aterian nimi ja kalorit.");
      }
    }
  }
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

form .row{
  padding: 0px;
}

form .row:last-child{
  padding-top: 20px;
}

.one-half input{
  width: 100%;
}

@media all and (max-width: 549px) {
  .one-half{
    width: 48%;
  }

  .one-half input{
    width: 100%;
  }

  .one-half:nth-child(even){
    margin-left: 4%;
  } 
}
</style>