<template>
  <div>
    <div class="login_header">
      <div class="header_contain">
        <img
          src="https://upload-images.jianshu.io/upload_images/1416859-7c9aeec44ea0578f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp"
          class="header_img"
        />
        <h3 class="header_title">Shopshops哪逛管理后台</h3>
        <h6 class="header_abouttitle">关于我们</h6>
      </div>
    </div>

    <div class="login_warp">
      <h3 class="login_title">登录</h3>

      <p class="login_tip">用户名</p>
      <input type="text" placeholder="请输入用户名" class="login_input" v-model="email" />
      <p class="login_tip">密码</p>
      <input type="password" placeholder="请输入密码" class="login_input" v-model="password" />
      <p class="login_tip">验证码</p>
      <div class="login_redex_warp">
        <input
          type="text"
          placeholder="请输入验证码"
          class="login_input login_redex_input"
          v-model="imgCode"
        />
        <img :src="redex_url" alt class="login_redex" @click="changeImgSrc" />
      </div>
      <button class="login_btn" @click="click_login">登录</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import loginPopView from ".//LoginPopView";
import httpTool from "./Tool/HttpTool.js";
import UrlManager from "./Tool/UrlManager.js";
import CommdTools from "./Tool/CommdTools.js";
import PublicSever from "./Tool/PublicSever.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      islogin: false,
      email: "",
      imgCode: "",
      imgCodeKey: "",
      password: "",
      time: "",
      redex_url: UrlManager.codeImg + "?imgCodeKey=" + this.time,
      items: []
    };
  },
  created() {
    this.time = CommdTools.getCurttentTime();
  },
  components: {
    loginPopView
  },
  methods: {
    clickFun() {
      this.islogin = !this.islogin;
    },
    // 点击更新验证码
    changeImgSrc() {
      this.time = CommdTools.getCurttentTime();

      this.redex_url = UrlManager.codeImg + "?imgCodeKey=" + this.time;
    },
    click_login() {
  
      var params = {
        email: this.email,
        imgCode: this.imgCode,
        imgCodeKey: this.time,
        password: this.password
      };
      PublicSever.postLoginRequest(params)
        .then(res => {
          if(res){
          alert(res);
          }
        })
        .catch(err => {
          alert('错误'+err);
        });
    }
  }
};
</script>
<style>
.login_header {
  margin: 0 auto;
  height: 74px;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  justify-content: center;
}
.header_contain {
  height: 74px;
  width: 80%;
  display: flex;
  justify-content: flex-start;
}
.header_img {
  margin-top: 17px;
  width: 10%;
  height: 40px;
  margin-left: 10px;
  margin-right: 20px;
  display: inline-block;
}
.header_title {
  height: 40px;
  display: inline-block;
  line-height: 40px;
  font-size: 20px;
  margin-top: 17px;
  width: 80%;
  font-weight: normal;
  color: #3c3c3c;
  text-align: left;
}
.header_abouttitle {
  display: inline-block;
  width: 10%;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  margin-top: 17px;
  font-weight: normal;
  color: gray;
  font-size: 14px;
}
.login_warp {
  width: 30%;
  height: 400px;
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
  border-radius: 8px;
  border: 1px solid #ddd;
  min-width: 300px;
  min-height: 400px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
}
.login_title {
  margin: 34px 0px 34px 0px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  line-height: 24px;
  height: 24px;
  color: #333333;
  text-align: left;
}
.login_tip {
  text-align: left;
  width: 80%;
  margin: 5px auto 10px auto;
  font-size: 12px;
}
.login_input {
  display: block;
  margin: 5px auto 10px auto;
  width: 80%;
  border: 1px solid #dddddd;
  height: 36px;
  font-size: 16px;
  line-height: 18px;
  box-sizing: border-box;
  padding: 9px 8px;
  box-shadow: none;
  border-radius: 0;
  border-radius: 5px;
}

.login_redex_warp {
  margin: 5px auto 5px auto;
  width: 80%;
  height: 36px;
  text-align: center;
}
.login_redex_input {
  width: 60%;
  margin: 0px;
  float: left;
}
.login_redex {
  float: right;
  width: 35%;
  height: 30px;
  margin-top: 3px;
     cursor: pointer;

}
.login_btn {
  background: #00c1e0;
  border: 0;
  border-radius: 4px;
  width: 80%;
  margin: 20px auto auto auto;
  height: 40px;
  line-height: 40px;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  display: block;
}
</style>
