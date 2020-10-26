import Vue from "vue";
import Router from "vue-router";
import Inicio from "./views/Inicio.vue";
import Lugares from "./views/Lugares.vue";
import Cultura from "./views/Cultura.vue";
import Eventos from "./views/Eventos.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Inicio,
    },
    {
      path: "/inicio",
      name: "inicio",
      component: Inicio,
    },
    {
      path: "/lugares",
      name: "Lugares",
      component: Lugares,
    },
    {
      path: "/cultura",
      name: "Cultura",
      component: Cultura,
    },
    {
      path: "/eventos",
      name: "Eventos",
      component: Eventos,
    },
  ],
});
