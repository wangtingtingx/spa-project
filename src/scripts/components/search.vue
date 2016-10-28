<template>
  <div class="search-container">
      <div class="search-header">
          <p>妆品</p>
      </div>
      <div class="search-scroll">
         <div class="search-box">
             <div class="inputbox">
                <input type="text" class="iconfont" value="&#xe603;搜索妆品、视频、文章、用户"/>
             </div>
             <ul class="img-box">
                <li><img src='/images/search01.png'/></li>
                <li><img src='/images/search02.png'/></li>
                <li><img src='/images/search03.png'/></li>
                <li><img src='/images/search04.png'/></li>
                <li><img src='/images/search05.png'/></li>
                <li><img src='/images/search06.png'/></li>
             </ul>
             <ul class="nav-box">
                <li><i class="iconfont">&#xe60b;</i><span>好物分类</span></li>
                <li><i class="iconfont">&#xe60a;</i><span>免费试用</span></li>
                <li><i class="iconfont">&#xe609;</i><span>最新分享</span></li>
                <li><i class="iconfont">&#xe607;</i><span>达人推荐</span></li>
             </ul>
             <section>
                <dl v-for="l in list">
                    <dt><img v-bind:src="l.img"/></dt>
                    <dd>{{l.text}}</dd>
                    <dd>
                        <span><img v-bind:src="l.headerimg"/><i>{{l.name}}</i></span>
                        <span><i class="iconfont">&#xe605;</i><b>{{l.num}}</b><span>
                    </dd>
                </dl>
             </section>
          </div>
     </div>
  </div>
</template>


<script>
    import { changeIndex } from "../vuex/actions";
    import { getIndex } from '../vuex/getters';

    export default {
      vuex: {
        actions: {
           change: changeIndex
        },
      getters: {
           curIndex: getIndex
        }
      },
      data() {
        return {
          list:[]
        }
    },

    ready: function() {
      this.change(1);
       var that = this;
       this.$http.get('/rest/searchlist')
          .then((res) => {
            this.list = res.data.data;
            setTimeout(function(){
              console.log(9);
              new IScroll(".search-scroll");
            },500);
       });
    }
  }
</script>
