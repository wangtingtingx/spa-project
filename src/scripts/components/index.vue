<template>
  <div>
    <div class="index-container">
        <router-view></router-view>
    </div>
    <footer id="footer">
        <ul>
            <li
              v-bind:class="curIndex == $index ? 'active' : ''"
              v-on:click="changPage($index)"
              v-for="tab in tablist"
              v-link="{path: tab.path}">
                <i class="iconfont">{{{tab.icon}}}</i>
                <b>{{tab.name}}</b>
            </li>
        </ul>
    </footer>
  </div>
</template>

<script>
  import {changeIndex} from '../vuex/actions';
  import {getIndex} from '../vuex/getters';
  export default {
    vuex:{
      getters:{
        curIndex:getIndex
      },
      actions:{
        change:changeIndex
      }
    },
    data() {
      return {
        tablist: [
          {path: '/index', icon: '&#xe600;', name: '首页'},
          {path: '/index/search', icon: '&#xe604;', name: '发现'},
          {path: '/share', icon: '&#xe608;', name: ''},
          {path: '/index/watch', icon: '&#xe605;', name: '关注'},
          {path: '/index/my', icon: '&#xe601;', name: '个人'}
        ]
      }
    },

    methods: {
      changPage(i) {

      }
    }
  }
</script>
