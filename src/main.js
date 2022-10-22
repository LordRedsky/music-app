import { createApp } from "vue";
import { createPinia } from "pinia";
import { auth } from "./includes/firebase";
import { registerSW } from "virtual:pwa-register";

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation";
import Icon from "./directives/icon";
import I18n from "./includes/i18n";
import GlobalComponents from "./includes/_globals";

import "./assets/base.css";
import "./assets/main.css";

registerSW({ immediate: true });

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        app.use(createPinia());
        app.use(router);
        app.use(VeeValidatePlugin);
        app.use(I18n);
        app.use(GlobalComponents);

        app.directive("Icon", Icon);

        app.mount("#app");
    };
});

