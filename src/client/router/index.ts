import Vue from 'vue';
import Router from 'vue-router';

/**
 * lazy loading route and code splitting
 * https://webpack.js.org/guides/code-splitting/
 * https://router.vuejs.org/guide/advanced/lazy-loading.html
 */
const HelloWorld = () => import(/* webpackChunkName: "helloworld" */ '@/components/HelloWorld.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
