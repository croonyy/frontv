import { createRouter, createWebHistory } from "vue-router";
import { routerCheckToken } from './perms'

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Login.vue"),
    // component:()=>import('../components/HelloWorld.vue')
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    // component:()=>import('../components/HelloWorld.vue')
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("../views/Layout.vue"),
    beforeEnter: routerCheckToken,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
