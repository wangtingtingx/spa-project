import "../styles/usage/page/app.scss";

// views
import guild from "./components/guild.vue";
import index from "./components/index.vue";
import main from "./components/main.vue";
import search from "./components/search.vue";
import share from "./components/share.vue";
import watch from "./components/watch.vue";
import my from "./components/my.vue";
import detail from './components/detail.vue'

import commonUtil from "./utils/commonUtil";
commonUtil.myScroll();

let router = new VueRouter();

//引入store 在根组件中使用它与他的子组件连接起来。
import store from './vuex/store';
let App = Vue.extend({
  store:store//在根组件加入store ,让她的子组件和store连接
});

router.map({
  '/':{
    component:guild
  },
  '/index': {
    component: index,
    subRoutes: {
      '/': {
        component: main
      },
      '/search': {
        component: search
      },
      '/watch': {
        component: watch
      },
      '/my': {
        component: my
      }
    }
  },
  '/share': {
    component: share
  },
  '/detail/:id':{
    name: 'detail',
    component: detail
  }
});

router.start(App, 'body');
