<template>
  <div>
    <div v-if="isPublished === 'true' " class="warp">
      <div class="contrain_view">
        <p class="page_title">登录</p>
        <p class="top_tip c">请输入登录的手机号</p>
        <input class="phone_input" placeholder="请输入登录的手机号" />
        <p class="top_tip height_tip_under">请输入验证码</p>
        <input class="verification_input" placeholder="请输入验证码" />
        <button class="verification_btn">获取验证码</button>
        <button class="login_btn" @click="click_login">登录</button>

      </div>
    </div>
    <div v-if="isPublished === 'false' " class="warp">
      <div class="contrain_view">
        <p class="page_title">登录</p>
        <p class="top_tip height_tip_under">请输入登录的手机号</p>
        <input class="phone_input" placeholder="请输入登录的手机号" />
        <p class="top_tip height_tip_under">请输入登录密码</p>
        <input class="phone_input" placeholder="请输入密码" type="password" />
        <button class="login_btn">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    isPublished: Boolean,
    title: String
  },
  data() {
    return {
      title: "",
      isPublished: false
    };
  },
  created() {},
  components: {},
  methods: {}
};
</script>

<style>
.login_btn {
  width: 280px;
  height: 40px;
  margin-top: 30px;
  border-radius: 4px;
  overflow: hidden;
  background-color:black;
  font-size: 20px;
  color: white;
}
.verification_btn {
  margin-left: 5px;
  display: inline-block;
  width: 75px;
  height: 30px;
  border-radius: 4px;
  overflow: hidden;
  background-color: red;
  font-size: 12px;
  color: white;
  /* margin-right: 10px; */
}
.verification_input {
  margin-top: 5px;
  display: inline-block;
  padding-left: 5px;
  width: 200px;
  height: 30px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid gray;
}
/* 输入手机号和密码及帮助文字样式 */
.phone_input {
  margin-top: 5px;
  width: 280px;
  height: 30px;
  padding-left: 5px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid gray;
}
.top_tip {
  text-align: left;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  margin-left: 10px;
  margin-right: 10px;
}
.height_tip{
  margin-top: 10px;
}
.height_tip_under{
  margin-top: 10px;
}
/* 容器view样式 */
.page_title{
  height: 40px;
  line-height: 40px;
  font-size: 20px;
}
.warp {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 1;
  top: 0;
  left: 0;
}
.contrain_view {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  margin-left: -150px;
  margin-top: -150px;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  z-index: 2;
  font-size: 0px;
}
</style>