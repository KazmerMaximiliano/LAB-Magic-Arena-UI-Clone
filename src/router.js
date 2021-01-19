import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Ematicones from './views/Ematicones.vue'
import NotFound from './views/NotFound.vue'

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated') throw err
  });
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      component: NotFound
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ematicones',
      name: 'ematicones',
      component: Ematicones
    }
  ]
})
