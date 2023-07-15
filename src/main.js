import { createApp } from "vue";
import App from "@/App.vue";

// Vue Router
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "@/routes";
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

import "./assets/main.css";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import vuetify from "@/plugins/vuetify";

// Vue 3 Lottie
import Vue3Lottie from "vue3-lottie";

createApp(App).use(router).use(vuetify).use(Vue3Lottie).mount("#app");
