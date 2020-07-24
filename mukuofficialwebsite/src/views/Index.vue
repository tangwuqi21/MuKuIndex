<template>
      <el-main>
      <div id="bigPicture">
        <div id="pictureWord">
          <p>
            <span style="color: rgb(255, 255, 255);">通过大数据、人工智能、云计算等技术的应用和创新，助力国家港航信息化事业转型发展。</span>
          </p>
          <p style="text-align: center;">
            <span
              style="color: rgb(255, 255, 255); z-index: 1;"
            >&nbsp; 创新&nbsp; |&nbsp; 合作&nbsp; |&nbsp; 共赢&nbsp;</span>
          </p>
        </div>
      </div>
      <div id="aboutUs">
        <div id="aboutUs_top">
          <div
            style="background-color:rgba(29, 39, 80, 0.91);border-radius: 10px;width: 20%;padding:10px"
          >
            <strong>
              <span style="color:#ffffff;font-size:30px;">关于我们</span>
            </strong>
          </div>
        </div>
        <div id="aboutUs_buttom">
          <div id="aboutUs_buttom_1">
            <div id="aboutUs_left"></div>
            <div id="aboutUs_right">
              <span class="content">上海幕库科技发展有限公司（以下简称：幕库公司）注册成立于2020年5月，办公地址为中国上海自由贸易试验区临港自贸新片区核心区域。幕库公司前身为注册于上海的信息技术公司，为响应临港自贸新片区建设成立，公司具备良好的经营基础，主要致力于新一代信息技术应用项目，主要经营和研发团队具备口岸物流、建筑信息、船料管理、保险金融科技等多行业管理和建设经验，主要为客户提供新一代技术研发、应用、咨询等服务。</span>
              <span class="content">幕库公司的主要经营范围包括从事智能科技、网络科技、环保科技、计算机领域内的技术开发、技术转让、技术咨询、技术服务，计算机设备销售及系统集成，软件开发，网络工程；港口业务咨询，港口主要设备销售及咨询服务；口岸物流信息管理，建筑信息系统建设、数据管理服务，企业管理，商务咨询及各类工程建设活动。</span>
              <span class="content">幕库公司的主要服务和合作对象包括口岸物流相关单位、同济大学建筑信息学院、小英科技、铁实信息、迦楠建设等。幕库以为客户提供更优质的服务为业务宗旨，坚持以人为本、科技先行的管理理念，围绕新一代信息技术跨界多元经营，竭诚为新老客户提供支持与服务。</span>
            </div>
          </div>
        </div>
      </div>
      <div id="joinUs">
        <div id="joinUs_top">
          <div
            style="background-color:rgba(29, 39, 80, 0.91);border-radius: 10px;width: 20%;padding:10px"
          >
            <strong>
              <span style="color:#ffffff;font-size:30px;">加入我们</span>
            </strong>
          </div>
        </div>
        <div id="joinUs_buttom">
          <div id="joinUs_List">
            <ul>
              <li>
                <div>前端开发工程师</div>
                <span>2020年7月23日</span>
              </li>
              <li>
                <div>java开发工程师</div>
                <span>2020年7月23日</span>
              </li>
              <li>
                <div>测试运维工程师</div>
                <span>2020年7月23日</span>
              </li>
              <li>
                <div>大数据开发工程师</div>
                <span>2020年7月23日</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-main>
</template>

<script>

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  height: 100% !important;
}
.el-header {
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  /* height:124px!important; */
}
.el-header > div {
  display: flex;
  align-items: center;
}
#logDiv {
  display: flex;
  align-items: center;
}
#logDiv > span {
  margin-left: 15px;
  font: 20px "Microsoft YaHei", "微软雅黑", "arial", "tahoma",
    "MicrosoftJhengHei";
}
#picture_div {
  width: 100px !important;
  height: 100px !important;
  margin-left: 100px;
  margin-top: 20px;
}
#picture_div > img {
  width: 70px;
  height: 70px;
}
#selectList > div {
  border-left: solid 1px #eeeeee;
  width: 200px;
  text-align: center;
  font-weight: 200;
}
.el-main {
  /* height: 1200px; */
  padding: 0px;
}
#bigPicture {
  background-image: url("../assets/bigPicture1.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-color: rgb(255, 255, 255);
  opacity: 1;
  z-index: 1;
  width: 100% !important;
  height: 652px !important;
}
#pictureWord {
  width: 623px !important;
  font-size: 26px;
  background-color: rgba(29, 39, 80, 0.91);
  text-align: center;
  position: absolute;
  top: 300px;
  right: 100px;
}
#aboutUs {
  margin-top: 80px;
}
#joinUs {
}
#aboutUs_buttom {
  padding-left: 100px;
  padding-right: 100px;
}
#aboutUs_buttom_1 {
  display: inline-flex;
}
#aboutUs_left {
  background-image: url("../assets/aboutUsPicture1.jpg");
  width: 25%;
  height: 500px;
  background-position: 50% 50%;
  background-size: cover;
  opacity: 1;
  z-index: 1;
  border-radius: 10px;
}
#aboutUs_right {
  width: 75%;
  height: 500px;
  padding: 50px;
}
.content {
  text-indent: 2em;
  display: block;
}
#aboutUs_top {
  padding-left: 100px;
}
#joinUs_top {
  padding-left: 100px;
}

#joinUs_List {
  padding-left: 100px;
  padding-right: 100px;
}
#joinUs_List ul li {
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  height: 50px;
  line-height: 50px;
  border-bottom-width: 1px;
  border-bottom-style: dotted;
  border-bottom-color: #ccc;
  text-align: left;
  display: flex;
}
#joinUs_List ul li div {
  width: 90%;
  padding: 0;
  margin-left: 0;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #666;
  font-size: 14px;
  font-family: Tahoma;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  height: 50px;
  line-height: 50px;
}
#joinUs_List ul li span {
  padding: 0 5px 0 10px;
  margin: 0;
  float: right;
  color: #bbb;
  font-size: 14px;
  font-family: Tahoma;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
.el-footer {
  background-color: coral;
  font: 12px/1 "Microsoft YaHei", "微软雅黑", "arial", "tahoma",
    "MicrosoftJhengHei";
  margin: 0;
  padding: 0;
  background-color: rgb(29, 39, 80);
  height: 286px !important;
}
#footer_message{
  text-align: center;
  padding: auto;
}
#footer_logo{
    border-bottom: solid 1px #2f3c72;
    height: 100px;
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
}
#footer_logo ul{
  margin: 10px 0px;
  list-style: none outside none;
  color: #eeeeee;
  display: inline-flex;
  text-align: center;
}
#footer_logo ul li{
  margin: 0px 50px;
}
.miniLogo{
  zoom: 1;
  font-size: 50px;
}
.mimiMessage{
  margin-top: 10px;
}
#footer_officeMessage{
  /* border: 1px solid #eeeeee; */
  width: 400px;
  height: 100px;
  color: #eeeeee;
  text-align: center;
  display: flex;
  margin: 0px auto;
  margin-top: 10px;
}
#footer_officeMessage_police{
  display: flex;
}
#footer_officeMessage_police img{
  width: 20px;
  height: 20px;
}
#footer_officeMessage div{
  margin: 10px 10px;
}
</style>
