import Vue from 'vue'
import VueRouter from 'vue-router'
import Provinces from "../components/Province";
import East from "../components/echarts/East";
import North from "../components/echarts/North"
import South from "../components/echarts/South"
import Central from "../components/echarts/Central";
import Northeast from "../components/echarts/Northeast";
import Southwest from "../components/echarts/Southwest";
import Northwest from "../components/echarts/Northwest";
import Education from "../components/Education";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'Provinces',
    component:Provinces,
  },
  {
    path:'/east',
    name:'East',
    component:East,
  },
  {
    path:'/north',
    name:'North',
    component:North,
  },
  {
    path:'/south',
    name:'South',
    component:South,
  },
  {
    path:'/central',
    name:'Central',
    component:Central,
  },
  {
    path:'/northeast',
    name:'Northeast',
    component:Northeast,
  },
  {
    path:'/southwest',
    name:'Southwest',
    component:Southwest,
  },
  {
    path:'/northwest',
    name:'Northwest',
    component:Northwest,
  },
  {
    path:'/education',
    name:'Education',
    component:Education,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router