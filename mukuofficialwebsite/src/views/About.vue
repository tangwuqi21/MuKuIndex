<script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=GBsu1G2zGYFS1BrFvnMEizHFsgvj74nX"></script>
<template>
  <div class="about">
    <el-container>
      <el-main>
        <div id="pictureTopDiv">
          <img src="../assets/titlePicture.jpg" alt />
        </div>
        <div style="margin-left:154px; margin-right:154px">
          <div>
            <a href="index.vue" style="text-decoration: none; color: #000000;">首页</a> &gt; 公司介绍
          </div>
          <div align="center" style="margin:20px;font-size:22px">上海幕库科技发展有限公司</div>
          <p
            class="content"
          >上海幕库科技发展有限公司（以下简称：幕库公司）注册成立于2020年5月，办公地址为中国上海自由贸易试验区临港自贸新片区核心区域。幕库公司前身为注册于上海的信息技术公司，为响应临港自贸新片区建设成立，公司具备良好的经营基础，主要致力于新一代信息技术应用项目，主要经营和研发团队具备口岸物流、建筑信息、船料管理、保险金融科技等多行业管理和建设经验，主要为客户提供新一代技术研发、应用、咨询等服务。</p>
          <p
            class="content"
          >幕库公司的主要经营范围包括从事智能科技、网络科技、环保科技、计算机领域内的技术开发、技术转让、技术咨询、技术服务，计算机设备销售及系统集成，软件开发，网络工程；港口业务咨询，港口主要设备销售及咨询服务；口岸物流信息管理，建筑信息系统建设、数据管理服务，企业管理，商务咨询及各类工程建设活动。</p>
          <p
            class="content"
          >幕库公司的主要服务和合作对象包括口岸物流相关单位、同济大学建筑信息学院、小英科技、铁实信息、迦楠建设等。幕库以为客户提供更优质的服务为业务宗旨，坚持以人为本、科技先行的管理理念，围绕新一代信息技术跨界多元经营，竭诚为新老客户提供支持与服务。</p>
          <p class="content"></p>
          <p align="center" style="font-size: 16px;">公司地址:{{SysCorp.address}}</p>
          <div id="mapDiv" align="center">
            <p><span style="margin-right: 250px;">普通图</span><span style=" margin-left: 250px">卫星图</span></p>
            <baidu-map
              class="map"
              :center="center"
              :zoom="zoom"
              @ready="handler"
              :scroll-wheel-zoom="true"
            >
              <bm-marker
                :position="{lng:121.932756, lat: 30.897182}"
                :dragging="true"
                animation="BMAP_ANIMATION_BOUNCE"
              >
                <bm-label
                  content="上海幕库科技发展有限公司"
                  :labelStyle="{color: 'black', fontSize : '12px'}"
                  :offset="{width: -35, height: 30}"
                />
              </bm-marker>
            </baidu-map>
            <baidu-map
              class="map"
              :center="center"
              :zoom="zoom"
              @ready="handler"
              :scroll-wheel-zoom="true"
              mapType="BMAP_SATELLITE_MAP"
            >
              <bm-marker
                :position="{lng: 121.932756, lat: 30.897182}"
                :dragging="true"
                animation="BMAP_ANIMATION_BOUNCE"
              >
                <bm-label
                  content="上海幕库科技发展有限公司"
                  :labelStyle="{color: 'black', fontSize : '8px'}"
                  :offset="{width: -35, height: 30}"
                />
              </bm-marker>
            </baidu-map>
            <!-- <img src="../assets/mapPicture01.jpg" /><img src="../assets/mapPicture02.jpg" alt /> -->
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style>
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
#mapDiv {
  margin-top: 100px;
  align-items: center;
}
.map {
  width: 500px;
  height: 500px;
}
#mapDiv > .map {
  margin: 50px;
  margin-top: 0;
  display: inline-block;
}
</style>
<script>
import Vue from "vue";
import BaiduMap from "vue-baidu-map";

Vue.use(BaiduMap, {
  ak: "GBsu1G2zGYFS1BrFvnMEizHFsgvj74nX",
  dragging: true,
});
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      SysCorp: {},
    };
  },
  methods: {
    searchSysCorpOne() {
      this.$http
        .get("/websiteservice/sysCorp/searchSysCorpOne", {
          withCredentials: true,
        })
        .then((Response) => {
          this.SysCorp = Response.data.data;
        })
        .catch((err) => console.log(err));
    },
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 121.9327563;
      this.center.lat = 30.897182;
      this.zoom = 18;
    },
  },
  mounted() {
    this.searchSysCorpOne();
  },
};
</script>
