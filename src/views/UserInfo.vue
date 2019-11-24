<template>
  <div class="row">
    <div class="column">
      <form>
        <div class="row">
          <div class="column" v-if="errors.length">
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <label for="mealCalories">Pituus</label>
            <input
              type="number"
              name="height"
              class="u-full-width"
              v-model="userInfo.height"
            />
          </div>
          <div class="column">
            <label for="mealCarbs">Paino</label>
            <input
              type="number"
              name="weight"
              class="u-full-width"
              v-model="userInfo.weight"
            />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <label for="mealProtein">Ikä</label>
            <input
              type="number"
              name="age"
              class="u-full-width"
              v-model="userInfo.age"
            />
          </div>
        </div>
        <div class="row">
          <div class="column one-half">
            <label>
              <input
                type="radio"
                name="sex"
                value="female"
                v-model="userInfo.sex"
              /><span class="label-body">Nainen</span>
            </label>
          </div>
          <div class="column one-half">
            <label>
              <input
                type="radio"
                name="sex"
                value="male"
                v-model="userInfo.sex"
              /><span class="label-body">Mies</span>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <button
              type="submit"
              class="u-pull-right button-primary"
              @click.stop.prevent="submit()"
            >
              <i class="material-icons u-mr-1">add</i>Tallenna
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Dexie from "dexie";

export default {
  data() {
    return {
      errors: [],
      userInfo: {
        age: null,
        height: null,
        weight: null,
        sex: null
      }
    };
  },
  methods: {
    submit() {
      if (this.hasNull(this.userInfo)) {
        this.errors.push("Täytä kaikki kentät");
      } else {
        const userdb = new Dexie("userdb");

        userdb.version(1).stores({
          user: "++id"
        });

        userdb.user.add({
          age: this.userInfo.age,
          height: this.userInfo.height,
          weight: this.userInfo.weight,
          sex: this.userInfo.sex
        });

        this.$store.dispatch("checkUser", { router: this.$router });
      }
    },
    hasNull(t) {
      for (let m in t) {
        if (t[m] == null) {
          return true;
        }
      }
      return false;
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

form .row {
  padding: 0px;
}

form .row:last-child {
  padding-top: 20px;
}

.one-half {
  width: 100%;
}

@media all and (max-width: 549px) {
  .one-half {
    width: 48%;
  }

  .one-half:nth-child(even) {
    margin-left: 4%;
  }
}
</style>
