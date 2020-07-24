<template>
  <div class="successPro">
    <el-container>
      <el-main>
        <div id="pictureTopDiv">
          <img src="../assets/img/product.jpg" alt />
        </div>
        <div style="margin-left:154px; margin-right:154px">
          <ul class="container">
            <li v-for="(item,index) in descs" :key="index">
              <div id="proMain">
                <div id="imgDiv">
                  <img :src="item.imgs" class="logo" />
                </div>
                <div id="textDiv">
                  <p style="font-size: 18px;"></p>
                  <h4>{{item.text}}</h4>
                  <p style="font-size: 16px;margin-top: 10px;">{{item.detail}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
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

#proMain {
  width: 500px;
  height: 250px;
}

#imgDiv {
  width: 273px;
  height: 243px;
  float: left;
}
#textDiv {
  margin-top: 112px;
  float: right;
  width: 200px;
}
.logo {
  width: 273px;
  height: 250px;
  vertical-align: middle;
  border-radius: 50%;
  background-color: gray;
  display: inline-block;
  margin-right: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      company: {},
      descs: [
        {
          imgs: require("../assets/img/1.jpg"),
          text: "保险行业解决方案",
          detail: "公司保险行业团队拥有从咨询、解决方案、系统开发与运...",
        },
        {
          imgs: require("../assets/img/2.jpg"),
          text: "新零售解决方案",
          detail: "行业累积，数据挖掘，探索商业本源价值",
        },
        {
          imgs: require("../assets/img/3.jpg"),
          text: "商业地产解决方案",
          detail: "实现基于大数据的商业地产运营和营销创新",
        },
        {
          imgs: require("../assets/img/4.jpg"),
          text: "大数据服务解决方案",
          detail: "全方位企业级大数据解决方案，慕库科技助力企业数字信息...",
        },
        {
          imgs: require("../assets/img/5.jpg"),
          text: "大数据运维解决方案",
          detail: "挖掘运维大数据，提升服务源动力",
        },
        {
          imgs: require("../assets/img/pro-01.jpg"),
          text: "集装箱码头系统智能化升级改造",
          detail:
            "为码头生产决策提供完备的数据统计和信息分析，从而实现了岸边装卸系统、水平运输系统和堆场装卸系统无人化操作",
        },
      ],
    };
  },
};
</script>
