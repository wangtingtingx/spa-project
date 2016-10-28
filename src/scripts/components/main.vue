<template>
   <div class="main-container">
      <div class="main-header">
          <p><img src="/images/logo.png"/></p>
          <input class='iconfont' type="button" value="&#xe603;">
      </div>
      <div class="main-scroll">
          <div class="scroll-box">
              <div class="head">
                    <img v-bind:src="imgArrow"/>
                    <span>下拉刷新...</span>
              </div>
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                     <div class="swiper-slide"><img src="/images/slide1.png"/></div>
                     <div class="swiper-slide"><img src="/images/slide2.png"/></div>
                     <div class="swiper-slide"><img src="/images/slide3.png"/></div>
                  </div>
                  <div class="swiper-pagination"></div>
              </div>
              <section class="first-list">
                  <ul>
                    <li><image src="/images/3.png"></image></li>
                    <li><image src="/images/4.png"></image></li>
                    <li><image src="/images/5.png"></image></li>
                  </ul>
              </section>
              <div class="main-list">
                 <dl v-for="l in list" v-link="{name: 'detail', params: {id: l.id}}">
                    <dt>
                        <p><img v-bind:src="l.img"/><i>{{l.name}}</i></p>
                        <span class="iconfont">&#xe602;</span>
                    </dt>
                    <dd><img v-bind:src="l.img1"/></dd>
                    <dd>{{l.text}}</dd>
                    <dd>
                        <span><i class="iconfont">&#xe604;</i>{{l.num1}}</span>
                        <span><i class="iconfont">&#xe606;</i>{{l.num2}}</span>
                        <span><i class="iconfont">&#xe605;</i>{{l.num3}}</span>
                    </dd>
                 <dl>
               </div>
               <div class="foot">
                  <img v-bind:src="imgArrow"/>
                  <span>加载中...</span>
               </div>
          </div>
      </div>
  </div>
</template>

<script>
  import commonUtil from '../utils/commonUtil.js';
  import loading from '../libs/vue-loading';
  var mySwiper = null;

  //引入action.js 中定义的 changeIndex 方法,改变tabIndex
  import { changeIndex } from '../vuex/actions';
  export default {
    vuex:{
      actions:{
        change:changeIndex
      }
    },
    data: function(){
      return {
        list: [],
                beautylist: [],
                imgArrow: './images/arrow.png',
                curIndex: 0,
                isShowLoading: false,
                isLoading: true
            }
        },

        directives: {
            loading
        },
    ready: function() {
              mySwiper = new Swiper('.swiper-container',{
              direction:'horizontal',
              // pagination: '.swiper-pagination',
              autoplay: 1500,
              loop:true
            });
      this.change(0);
      let that = this;
      this.$http.get('/rest/list')
        .then((res) => {
            this.list = res.data.data;
            this.isLoading = false;
            // DOM 更新后，图片加载完 实例化 IScroll
            Vue.nextTick(function() {
                commonUtil.isAllLoaded('.main-scroll', function() {
                    var myScroll = new IScroll('.main-scroll', {
                        probeType:3,
                        mouseWheel: true,
                        click: true
                    });

                    myScroll.scrollTo(0, -35);

                    var head = $('.head img'),
                        topImgHasClass = head.hasClass('up');
                    var foot = $('.foot img'),
                        bottomImgHasClass = head.hasClass('down');

                    myScroll.on('scroll', function() {
                        var y = this.y,
                            maxY = this.maxScrollY - y;
                        if (y >= 0) {
                            !topImgHasClass && head.addClass('up');
                            return '';
                        }
                        if (maxY >= 0) {
                            !bottomImgHasClass && foot.addClass('down');
                            return '';
                        }
                    });

                    myScroll.on('scrollEnd', function() {
                        if (this.y >= -35 && this.y < 0) {
                            myScroll.scrollTo(0, -35);
                            head.removeClass('up');
                        } else if (this.y >= 0) {
                            head.attr('src', './images/ajax-loader.gif');

                            // ajax下拉刷新数据
                            that.$http.get('/rest/refreshlist')
                                .then((res) => {
                                  that.list = res.data.data.concat(that.list);
                                  head.removeClass('up');
                                  head.attr('src', './images/arrow.png');
                                  Vue.nextTick(function() {
                                    myScroll.refresh();
                                    myScroll.scrollTo(0, -35);
                                  });
                                })
                        }

                        var self = this;
                        var maxY = this.maxScrollY - this.y;
                        if (maxY > -35 && maxY < 0) {
                            myScroll.scrollTo(0, self.maxScrollY + 35);
                            foot.removeClass('down')
                        } else if (maxY >= 0) {
                            foot.attr('src', './images/ajax-loader.gif');
                            //ajax上拉加载数据
                            that.$http.get('/rest/morelist')
                                .then((res) => {
                                  that.list = that.list.concat(res.data.data);
                                  foot.removeClass('down');
                                  foot.attr('src', './images/arrow.png');
                                  Vue.nextTick(function() {
                                    myScroll.refresh();
                                    myScroll.scrollTo(0, self.maxScrollY + 35);
                                  });
                                });
                        }
                    });
                });
            });
        });
    },
}
</script>
