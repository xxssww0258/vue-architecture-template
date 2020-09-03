import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Default from "../layout/default/default.vue";
import navGuard from "./navGuard";

Vue.use(VueRouter);

export const routes = [
  // 结构为布局 + 视图
  {
    path: "/",
    name: "Home",
    component: Default, // 选择布局
    children: [
      {
        path: "/",
        meta: {
          title: "主页"
        },
        component: Home // 选择视图
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: Default, // 选择布局
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "/",
        meta: {
          title: "相关"
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About/About.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

navGuard(router);

export default router;
