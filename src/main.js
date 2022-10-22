import { createApp } from "vue";
import { createPinia } from "pinia";
import { auth } from "./includes/firebase";

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation";
import Icon from "./directives/icon";
import I18n from "./includes/i18n";

import "./assets/base.css";
import "./assets/main.css";

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        app.use(createPinia());
        app.use(router);
        app.use(VeeValidatePlugin);
        app.use(I18n)
        
        app.directive("Icon", Icon);

        app.mount("#app");
    }
})

