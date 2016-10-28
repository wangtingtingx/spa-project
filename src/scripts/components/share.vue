<template>
    <div class="share-container">
      <div class='share-close'>
        <i class="iconfont" v-link="{path: '/index'}">&#xe60c;</i>
      </div>
      <div class="share-bt">
         美芽
      </div>
      <div class="input-box">
          <input type="text" value="手机号"/>
          <span>
            <input type="text" value="密码"/>
            <input type="button" value="忘记密码"/>
          </span>
      </div>

      <input type="button" class="btn" value="登录"/>

      <p><a href="#">新用户注册</a><p>
      <i>使用第三方登录</i>
      <section>
          <li><a href="#" class="iconfont">&#xe610;</a></li>
          <li><a href="#" class="iconfont">&#xe611;</a></li>
      </section>
    </div>
</template>
