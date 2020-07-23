<template>
  <div class="about">
    <el-container>
      <el-main>
        <div id="pictureTopDiv">
          <img src="../assets/titlePicture.jpg" alt />
        </div>
        <div style="margin-left:154px; margin-right:154px">
          <div>
            <a href="#" style="text-decoration: none; color: #000000;">首页</a> &gt; 公司介绍
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
          <p align="center" style="font-size: 16px;">公司地址:{{address}}</p>
          <div id="mapPicture">
            <img src="../assets/mapPicture01.jpg" /><img src="../assets/mapPicture02.jpg" alt />
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
#mapPicture {
  width: 1000px;
  height: 1000px;
}
#mapPicture > img {
    width: 300px;
    height: 300px;
    margin: 100px;
}
</style>
<script>
export default {
  data () {
    return {
      company: {},
      address: '上海浦东新区'
    }
  }
}
</script>
