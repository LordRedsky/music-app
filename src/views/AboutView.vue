<template>
  <div class="about">
    <!-- <BaseAppButton /> -->
    <p class="description">
      {{ $t("about.description") }}
      <a href="https://github.com/LordRedsky/music-app" target="_blank">{{
        $t("about.github")
      }}</a>
    </p>
    <p class="footer">
      <a href="https://www.linkedin.com/in/muhammad-rizki-amin-ba3167136/" target="_blank"
        >Muhammad Rizki Amin</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  margin: 30px auto;
  text-align: center;
  width: 75%;
  /* background-color: salmon; */
}

.about h1 {
  font-size: 1.5em;
  font-weight: 600;
}

.about .description {
  text-align: justify;
  margin-top: 10px;
  font-size: 18px;
}

.about .footer {
  margin-top: 20px;
  font-size: 18px;
}
</style>
