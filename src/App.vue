<template>
  <AppHeader />

  <RouterView></RouterView>

  <!-- Player -->
  <AppPlayer />

  <AppAuth />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppAuth from "./components/AppAuth.vue";
import { mapWritableState } from "pinia";
import useUserStore from "./stores/user";
import { auth } from "./includes/firebase";
import AppPlayer from "./components/AppPlayer.vue";

export default {
  name: "App",
  components: { AppHeader, AppAuth, AppPlayer },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },

  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>
