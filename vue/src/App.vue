<template>
  <div id="app">
    <div class="login_header">
      <div class="header_contain">
        <img
          src="https://upload-images.jianshu.io/upload_images/1416859-7c9aeec44ea0578f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp"
          class="header_img"
        />
        <h3 class="header_title">Shopshops哪逛管理后台</h3>
        <h6 class="header_abouttitle">关于我们</h6>
      </div>
      <div class="contain">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  position: relative;

}
* {
  margin: 0;
  padding: 0;
}
.login_header {
  margin: 0 auto;
  height: 74px;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  justify-content: center;
  position: absolute;
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
.contain {
  margin-top: 75px;
  width: 100%;
  height: calc(100vh - 74px);
  position: absolute;
  overflow: auto;

}
</style>
