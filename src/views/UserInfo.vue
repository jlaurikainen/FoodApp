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
            <label for="height">Pituus</label>
            <input
              type="number"
              name="height"
              class="u-full-width"
              v-model="userInfo.height"
            />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <label for="weight">Paino</label>
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
            <label for="age">Ikä</label>
            <input
              type="number"
              name="age"
              class="u-full-width"
              v-model="userInfo.age"
            />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <label for="activity">Aktiivisuustaso</label>
            <select class="u-full-width" id="activity" v-model="userInfo.activity">
              <option value="1">BMR</option>
              <option value="1.2">Vähäinen</option>
              <option value="1.35">Kevyt</option>
              <option value="1.5">Kohtalainen</option>
              <option value="1.65">Aktiivinen</option>
              <option value="1.8">Erittäin aktiivinen</option>
              <option value="1.95">Extra-aktiivinen</option>
            </select>
            <p>{{ activityText }}</p>
          </div>
        </div>
        <div class="row">
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
        </div>
        <div class="row">
          <div class="column">
            <h4 class="u-text-center">Kalorikulutusarvio</h4>
            <h2 class="u-text-center">{{ calories }}</h2>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <router-link v-if="userExists" to="/" tag="button" class="u-pull-left warning">
              <i class="material-icons u-mr-1">close</i>Peruuta
            </router-link>
            <button
              type="submit"
              class="u-pull-right button-primary"
              @click.stop.prevent="submit()"
            >
              <i class="material-icons u-mr-1">add</i>
                {{userExists ? 'Päivitä' : 'Tallenna'}}
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
  async mounted() {
    const userdb = new Dexie("userdb");

    userdb.version(1).stores({
      user: "++id"
    });

    await userdb.user.get(1, user => {
      if (user == null) {
        return;
      } else {
        this.userExists = true;
        this.userInfo = user;
      }
    });

    userdb.close();
  },
  data() {
    return {
      errors: [],
      userInfo: {
        age: null,
        height: null,
        weight: null,
        sex: null,
        activity: 1
      },
      activityText: "Valitse aktiivisuustasosi",
      userExists: false
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

        if(!this.userExists){
          this.newUser(userdb);
        }
        else {
          this.updateUser(userdb);
        }

        this.$store.dispatch("checkUser", { router: this.$router });
      }
    },
    newUser(db) {
      db.user.add({
        age: this.userInfo.age,
        height: this.userInfo.height,
        weight: this.userInfo.weight,
        sex: this.userInfo.sex,
        activity: this.userInfo.activity
      });
    },
    updateUser(db) {
      db.user.update(1, {
        age: this.userInfo.age,
        height: this.userInfo.height,
        weight: this.userInfo.weight,
        sex: this.userInfo.sex,
        activity: this.userInfo.activity
      })
    },
    hasNull(t) {
      for (let m in t) {
        if (t[m] == null) {
          return true;
        }
      }
      return false;
    }
  },
  computed: {
    calories() {
      if (this.userInfo.sex == "male") {
        return parseInt(
          (10 * parseFloat(this.userInfo.weight) +
          6.25 * parseFloat(this.userInfo.height) -
          5 * parseFloat(this.userInfo.age) +
          5) * parseFloat(this.userInfo.activity)
        );
      } else {
        return parseInt(
          (10 * parseFloat(this.userInfo.weight) +
          6.25 * parseFloat(this.userInfo.height) -
          5 * parseFloat(this.userInfo.age) -
          161) * parseFloat(this.userInfo.activity)
        );
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

form {
  margin-bottom: 0px;
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

h4 {
  margin-top: 2rem;
  margin-bottom: 0px;
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
