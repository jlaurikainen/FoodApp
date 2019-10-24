<template>
  <div class="container">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Dexie from 'dexie';

export default {
  name: "App",
  data() {
    return {
      db: null
    }
  },
  async mounted() {
    this.db = new Dexie('userdb');
      
    this.db.version(1).stores({
      user: "++id"
    });
  
    this.db.user.get(1, (user) => {
      if(user == null) {
        this.db.user.add({
          age: 34,
          height: 187,
          weight: 90,
          sex: "male"
        }).then(() => {
          console.log("default user added");
        }).catch((e) => {
          console.log("error adding default user" + e);
        });
      }
    });

    let userInfo;

    await this.db.user.get(1, function(user) {
      userInfo = user;
    });

    await this.$store.dispatch("updateUser", userInfo);
  }
};
</script>

<style>
.row {
  padding-top: 20px;
  padding-bottom: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>