<template>
  <el-container>
    <el-header>
      <div id="logDiv">
        <div id="picture_div">
          <img src="../assets/mukuLogo1.png" alt />
        </div>
        <span>上海幕库科技发展有限公司</span>
      </div>
      <div id="selectList">
        <div><router-link to = "/">首页</router-link></div>
        <div><router-link to = "/about">公司介绍</router-link></div>
        <div><router-link to = "/successPro">成功案例</router-link></div>
        <div><router-link to = "/joinUs">加入我们</router-link></div>
      </div>
    </el-header>
    <el-main>
      <router-view>
      </router-view>
      <!-- <div id="bigPicture">
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
              <span>上海咪啰信息科技有限公司，是上海海事大学在上海市全面推进国际航运中心和科创中心大背景下，立足港口航运行业，结合业务与技术基础研究优势组建成立。咪啰科技以港航信息化为核心，以创建国际一流的创新型高科技企业为目标，将推动国家整体港航事业转型发展作为使命，前瞻应用VR技术、AI技术，AR和OCR技术等，在各关键物流节点开展管理信息系统自动化、智能化改造，辅助搭建港口航运物流信息大数据平台，积极优化口岸信息环境。</span>
              <span>公司主要产品有：OCR智能识别系统、VR虚拟现实培训系统、集装箱码头系统智能化升级改造、集装箱码头大数据分析系统、口岸信息大数据分析系统等。其中OCR桥吊智能理货系统和VR虚拟现实培训系统均走在同行业前列，其它相关产品也均应用在业务量最庞大、工作最繁忙和业务模式最复杂上海港码头和口岸环境中。公司主要客户单位包括上海国际港务（集团）股份有限公司，上海亿通国际股份有限公司、上海振华重工股份有限公司、上海海勃物流软件有限公司、北京中软国际股份有限公司、美国Precise Asset Sourcing LLC（租箱公司）、安徽港航集团芜湖港股份有限公司。公司客户基本囊括了上海口岸最主要的运营实体。公司内部管理秉持创新和规范原则，在技术和业务沿革进步中，强化公司核心竞争力，通过核心员工持股计划，团结和留住核心技术和业务人员。公司在规范方面坚持制度治理，科学管理，确保企业始终在健康轨道，保持产品、技术和经营发展的可持续。公司人力资源稳定，人员流动率低于5%，团队凝聚力好。公司经营和财务状态健康。公司成立当年内即实现盈利，并在营收和利润方面，均保持了超过50%的增长率，在未来一到两年时间，公司有把握可以继续保持高增长状态。公司主营业务收入聚焦在港口物流行业，约占收入的95%，成本费用方面，研发费是公司业务成本的最主要组成部分，2018和2019年度占营收比重均超过50%。符合高科技企业迅速发展的一般规律。</span>
              <span>咪啰公司的核心价值观：创新、合作、共赢，在成立近两年的发展过程中，始终坚持初心，聚焦港航业务和最新前沿技术研发及应用，规范管理，稳步前行，争取早日跻身国际一流的创新型高科技企业，为上海国际航运中心建设贡献一份力量。</span>
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
      </div> -->
    </el-main>
    <el-footer>
      <div id="footer_message">
        <div id="footer_logo">
          <ul>
            <li>
              <div class="miniLogo"><i class="el-icon-map-location"></i></div>
              <div class="mimiMessage">上海市浦东新区临港新片区港城广场一街坊7号楼401</div>
            </li>
            <li>
              <div class="miniLogo"><i class="el-icon-message"></i></div>
              <div class="mimiMessage">admin@mukulogic.com</div>
            </li>
          </ul>
        </div>
        <div id="footer_officeMessage">
            <div id="footer_officeMessage_police">
              <img src="../assets/police.png">
              <span>沪ICP备18034309号</span>
            </div>
            <div>
              <span>版权所有 © </span>
              <span>上海幕库科技发展有限公司</span>
            </div>
        </div>
      </div>
    </el-footer>
    <div style="width:100%;height:20px;color: rgb(152, 152, 152);text-align: center;font-size: 12px;">
      沪ICP备18034309号
    </div>
  </el-container>
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
#selectList div a{
  text-decoration: none;
  color: #383838;
}
</style>
