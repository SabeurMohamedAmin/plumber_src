const Gaz = () => import(/* webpackChunkName: "Gaz" */'pages/Gaz.vue');
const Water = () => import(/* webpackChunkName: "Water" */'pages/Water.vue');
const Sanitation = () => import(/* webpackChunkName: "Sanitation" */ 'pages/Sanitation.vue');
const All = () => import(/* webpackChunkName: "All" */ 'pages/All.vue');
const Grid = () => import(/* webpackChunkName: "Grid" */ 'layouts/GridPage.vue');
const Details = () => import('pages/Details.vue');
const HowToSteps = () => import(/* webpackChunkName: "HowToSteps" */  "components/HowToSteps");
const Lists = () => import(/*webpackChunkName: "List"*/ "pages/Lists");
const NewList = () => import(/*webpackChunkName: "NewLists"*/ "pages/NewList");
const RenderList = () => import(/*webpackChunkName: "List"*/ "pages/RenderList");
const Lazy = ()=> import (/*webpackChunkName: "Lazy"*/"layouts/LazyLoadImageScroll")

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/gaz',name:"Gaz", component: Gaz },
      { path: '/water',name:'Water', component: Water },
      { path: '/sanitation',name:'Sanitation', component: Sanitation },
      { path: '/all',name:'All', component: All }
    ],
    redirect: '/all'
  },
  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/grid',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: Grid }
    ]
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
  },
  {
    path: '/list',
    name: 'list',
    component: RenderList,
  },
  {
    path: '/lists',
    name: 'lists',
    component: Lists,
  },
  {
    path: '/new-list',
    name: 'newList',
    component: NewList,
  },
  {
    path: '/test',
    name: 'test',
    component: HowToSteps,
  },
  {
    path: '/lazy',
    name: 'lazy',
    component: Lazy,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
