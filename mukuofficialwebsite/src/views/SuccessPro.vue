<template>
  <div class="successPro">
    <el-container>
      <el-main>
        <div id="pictureTopDiv">
          <img src="../assets/img/product.jpg" alt />
        </div>
        <div style="margin-left:154px; margin-right:154px">
          <!-- <div class="main clearfix">
            <ul class="left">
              <li v-for="item in 5" :key="item">
                <img
                  src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2789753920,68186140&fm=55&app=54&f=JPEG?w=1140&h=640"
                  width="100"
                />
                <p>少年杨家将少年杨家将少年杨家将少年杨家将少年杨家将少年</p>
              </li>
            </ul>
            <ul class="right">
              <li v-for="item in 5" :key="item">
                <img
                  src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2789753920,68186140&fm=55&app=54&f=JPEG?w=1140&h=640"
                  width="100"
                />
                <p>少年杨家将少年杨家将少年杨家将少年杨家将少年杨家将少年</p>
              </li>
            </ul>
          </div>-->
          <ul class="container">
            <li v-for="item in descs">
              <img :src="item.imgs" class="logo" />
              <span>{{item.text}}</span>
            </li>
            <!-- <li class="right">
              <div class="logo"></div>
              <span>测试测试测试2</span>
            </li>
            <li>
              <div class="logo"></div>
              <span>测试测试测试3</span>
            </li>
            <li class="right">
              <div class="logo"></div>
              <span>测试测试测试4</span>
            </li>
            <li>
              <div class="logo"></div>
              <span>测试测试测试3</span>
            </li>
            <li class="right">
              <div class="logo"></div>
              <span>测试测试测试4</span>
            </li>-->
          </ul>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
.content {
  text-indent: 2em;
  margin: 0px;
  font-size: 16px;
  line-height: 1.75;
}
#pictureTopDiv {
  width: 100%;
  height: 305px;
}
#pictureTopDiv > img {
  width: 100%;
  height: 100%;
}
#mapPicture {
  width: 1000px;
  height: 1000px;
}
#mapPicture > img {
  width: 300px;
  height: 300px;
  margin: 100px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 80%;
  width: auto;
  margin: 0 auto;
  list-style-type: none;
  margin-top: 75px;
}

:nth-child(2n) {
  align-self: flex-end;
  margin-top: -50px;
}

.logo {
  width: 170px;
  height: 170px;
  vertical-align: middle;
  border-radius: 50%;
  background-color: gray;
  display: inline-block;
  margin-right: 10px;
  // background-image: url("https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2789753920,68186140&fm=55&app=54&f=JPEG?w=1140&h=640");
}
</style>
<script>
export default {
  data() {
    return {
      company: {},
      // imgs: [
      //   { url: require("../assets/img/1.jpg") },

      //   { url: require("../assets/img/2.jpg") },

      //   { url: require("../assets/img/3.jpg") },
      // ],
      descs: [
        {
          imgs: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2789753920,68186140&fm=55&app=54&f=JPEG?w=1140&h=640',
          text: "testing"
        },
        {
          imgs: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2789753920,68186140&fm=55&app=54&f=JPEG?w=1140&h=640',
          text: "testing"
        },
        {
          imgs: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2789753920,68186140&fm=55&app=54&f=JPEG?w=1140&h=640',
          text: "testing"
        },
        {
          imgs: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2789753920,68186140&fm=55&app=54&f=JPEG?w=1140&h=640',
          text: "testing"
        },
         {
          imgs: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2789753920,68186140&fm=55&app=54&f=JPEG?w=1140&h=640',
          text: "testing"
        },
        {
          imgs: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2789753920,68186140&fm=55&app=54&f=JPEG?w=1140&h=640',
          text: "testing"
        }
      ]
    };
  },
};
</script>
