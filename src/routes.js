import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/:catchAll(.*)", name: "not found", component: NotFound },
];

export default routes;
