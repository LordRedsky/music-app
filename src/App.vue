<template>
  <AppHeader />

  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <Component :is="Component"></Component>
    </Transition>
  </RouterView>

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

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
