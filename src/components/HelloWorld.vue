<template>
  <div>
    <tavbar></tavbar>

    <van-swipe :autoplay="3000" indicator-color="green">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="img" :src="image" />
      </van-swipe-item>
    </van-swipe>
    <img src="../assets/img/sec_img_01.png" alt srcset style="display:none" />

    <div>
      <ul class="ul">
      <li class="li" v-for="(item, index) in text" :key="index">{{item}}</li>
    </ul>
    </div>

    <div class="bgcolor"></div>

    <h2 style="font-size:8vw">整体家居需要花多少钱</h2>

    <van-cell-group>
      <van-field v-model="sms" center clearable placeholder="您的房屋面积"></van-field>
      <van-field v-model="sms1" center clearable placeholder="您的手机号码"></van-field>
    </van-cell-group>

    <div>
      <button
        style="width:90vw;background-color: limegreen;border-radius: 5px;outline: none;border: none;height: 7vh;"
      >提交信息</button>
    </div>

    <div>
      <span style="font-size: 0.5rem;color: gainsboro;">您的信息将严格保密，稍后会有专业人员为您服务</span>
    </div>

    <div>
      <div class="box">
        <div style="font-size: 1.5rem;">
          <span style="color:green">罗森</span>家居服务
        </div>
        <div style="font-size: 0.5rem;color: gainsboro;">了解罗森</div>
      </div>

      <div class="box1">
        <div class="left">
          <div class="xbgcor"></div>
          <h4 style="text-align: left;margin: 1vh 0;">改造类</h4>
          <ul style="text-align: left;">
            <li>封阳台</li>
            <li>电视墙背景</li>
            <li>卧室墙背景</li>
            <li>沙发背景</li>
          </ul>
        </div>
        <div class="right">
          <div style="margin: 0 0 2vh 0;">
            <div class="xbgcor"></div>
            <h4 style="text-align: left;margin: 1vh 0;">家居类</h4>
            <ul style="text-align: left;">
              <li>全屏柜子定制</li>
              <li>家居，窗帘，墙纸，灯饰</li>
              <li>软装饰品</li>
            </ul>
          </div>
          <div class="xbgcor"></div>
          <h4 style="text-align: left;margin: 1vh 0;">电器类</h4>
          <ul style="text-align: left;">
            <li>中央空调</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tavbar from "./tavbar";
export default {
  name: "HelloWorld",
  data() {
    return {
      images: [
        "/static/img/sec_img_01.428b625.png",
        "/static/img/sec_img_01.428b625.png",
        "/static/img/sec_img_01.428b625.png"
      ],
      text: ["产品介绍", "精品案例", "软装报价", "关于罗森"],
      sms: null,
      sms1: null
    };
  },
  created() {},
  components: {
    tavbar: tavbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  width: 96%;
  border-radius: 5px;
}
.ul {
  height: 10vh;
  width: 96vw;
  margin: auto;
  line-height: 10vh;
}
.ul .li {
  width: 23vw;
  display: inline-block;
  font-size: 5vw;
}
.box {
  display: flex;
  justify-content: space-between;
  height: 8vh;
  align-items: center;
  width: 96vw;
  margin: auto;
}

.box1 {
  display: flex;
  width: 96vw;
  margin: auto;
}
.left {
  width: 50vw;
}
.right {
  flex: 1;
}

</style>