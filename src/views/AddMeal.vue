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
          <input type="text" name="mealName" class="u-full-width" v-model="mealInfo.mealName">
        </div>
      </div>
      <div class="row">
        <div class="column">
          <label for="mealCalories">Kalorit</label>
          <input type="number" name="mealCalories" class="u-full-width" v-model="mealInfo.mealCalories">
        </div>
        <!--div class="one-half column">
          <label for="mealCarbs">Hiilihydraatit</label>
          <input type="number" name="mealCarbs" v-model="mealInfo.mealCarbs">
        </div-->
      </div>
      <!--div class="row">
        <div class="one-half column">
          <label for="mealProtein">Proteiinit</label>
          <input type="number" name="mealProtein" v-model="mealInfo.mealProtein">
        </div>
        <div class="one-half column">
          <label for="mealFats">Rasvat</label>
          <input type="number" name="mealFats" v-model="mealInfo.mealFats">
        </div>
      </div-->
      <div class="row">
        <div class="column">
          <router-link to="/" tag="button" class="u-pull-left warning">
            <i class="material-icons u-mr-1">close</i>Peruuta
          </router-link>
          <button type="submit" class="u-pull-right button-primary" @click.stop.prevent="submit()">
            <i class="material-icons u-mr-1">add</i>Lisää
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Dexie from 'dexie';

export default {
  components: {},
  data() {
    return {
      errors: [],
      mealInfo: {
        mealName: null,
        mealCalories: null,
        mealCarbs: null,
        mealProtein: null,
        mealFats: null
      }
    };
  },
  methods: {
    submit() {
      this.errors = [];
      let date = new Date(new Date().setHours(0,0,0,0));

      if(this.mealInfo.mealName && this.mealInfo.mealCalories)
      {
        const mealdb = new Dexie("mealdb");
        
        mealdb.version(1).stores({
          mealsByDate: "++id, date"
        });

        mealdb.mealsByDate.add({
          date: date,
          name: this.mealInfo.mealName,
          calories: this.mealInfo.mealCalories
        });

        this.$store.dispatch("updateMealList");
        this.$router.push("/").catch((err) => {});
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