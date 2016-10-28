<template>
  <div class="detail-container">
     <div class="detail-header">
        <span class="iconfont" v-link="{path: '/index'}">&#xe60c;</span>
        <span class="iconfont">&#xe60d;</span>
     </div>
     <div class="video-box">
         <img v-bind:src="detailContent.img1"/>
     </div>
     <div class="detail-scroll" v-scroll="detailId">
        <div class="scroll-box">
           <dl class="information">
               <dt><img v-bind:src="detailContent.img"/></dt>
               <dd>
                   <i>{{{detailContent.text}}}</i>
                   <p>
                       <span>{{{detailContent.name}}}</span>
                       <span><i class="iconfont">&#xe604;</i>{{{detailContent.num1}}}</span>
                       <span><i class="iconfont">&#xe606;</i>{{{detailContent.num2}}}</span>
                       <span><i class="iconfont">&#xe605;</i>{{{detailContent.num3}}}</span>
                   </p>
               </dd>
           </dl>
           <div class="moreproduct">
             <span>提及产品</span>
             <ul v-for="l in list">
                  <li><i>{{l.content}}</i><span class="iconfont">&#xe60e; </span></li>
             </ul>
           </div>
       </div>
     </div>
     <div class="detail-footer">
       <span><i class="iconfont">&#xe604;</i>{{{detailContent.num1}}}</span>
       <span><i class="iconfont">&#xe605;</i>{{{detailContent.num3}}}</span>
       <span><i class="iconfont">&#xe60f;</i>收藏</span>
     </div>
  </div>
</template>
<script>
   export default {
      data() {
        return {
          detailId:'',
          detailContent:{},
          list:[]
        }
    },

    ready: function() {
       var that = this;
       //首页原有数据    下拉刷新数据   上拉加载数据  他们的index 值不同。。id不同
       //index=0  从main-list 里面取数据 渲染详情页
       this.$http.get('/rest/list')
          .then((res) => {
            res.data.data.forEach(function({id, img, name,img1,text,num1,num2,num3,index}){
          if(that.$route.params.id == id) {
            that.detailContent = {img, name,img1,text,num1,num2,num3,index};
          }
        });
       });

       //index=1  下拉刷新后，在main-refresh-list 里面取数据渲染详情页
       this.$http.get('/rest/refreshlist')
          .then((res) => {
            res.data.data.forEach(function({id, img, name,img1,text,num1,num2,num3,index}){
          if(that.$route.params.id == id) {
            that.detailContent = {img, name,img1,text,num1,num2,num3,index};
          }
        });
       });

       //index=2   上拉加载更多后  在main-more-list 里面取数据渲染详情页
       this.$http.get('/rest/morelist')
          .then((res) => {
            res.data.data.forEach(function({id, img, name,img1,text,num1,num2,num3,index}){
          if(that.$route.params.id == id) {
            that.detailContent = {img, name,img1,text,num1,num2,num3,index};
          }
        });
       });
       //请求  详情页数据

       this.$http.get('/rest/moreproductlist').then((res)=>{
           this.list = res.data.data;
       });
       setTimeout(function(){
         console.log(9);
         new IScroll(".detail-scroll");
       },500);
      }
    }
</script>
