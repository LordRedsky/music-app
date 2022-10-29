<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <img class="music-icon" src="../../public/188-microphone-recording.svg" alt="" />
      <!-- App Name -->
      <RouterLink
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
      >
        Music</RouterLink
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <RouterLink :to="{ name: 'about' }" class="px-2 text-white">{{
              $t("header.about")
            }}</RouterLink>
          </li>
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" @click.prevent="toggleAuthModal" href="#">{{
              $t("header.login_register")
            }}</a>
          </li>
          <template v-else>
            <li>
              <RouterLink class="px-2 text-white" :to="{ name: 'manage' }">{{
                $t("header.manage")
              }}</RouterLink>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut">{{
                $t("header.logout")
              }}</a>
            </li>
          </template>
        </ul>
        <ul class="ml-auto">
          <li>
            <a href="#" class="px-2 text-white" @click.prevent="changeLocale">
              {{ currentLocale }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "../stores/modal";
import useUserStore from "../stores/user";

export default {
  name: "AppHeader",
  computed: {
    ...mapStores(useModalStore, useUserStore),
    currentLocale() {
      return this.$i18n.locale === "id" ? "Indonesian" : "English";
    },
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
    },

    signOut() {
      this.userStore.signOut();

      if (this.$route.meta.requireAuth) {
        this.$router.push({ name: "home" });
      }
    },

    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === "id" ? "en" : "id";
    },
  },
};
</script>

<style scoped>
.music-icon {
  width: 50px;
  margin-right: 20px;
}
</style>
