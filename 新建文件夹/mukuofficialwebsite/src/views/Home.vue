<template>
  <el-container>
  <el-header>
    <div id="logDiv">
      <img src="../assets/mukuLogo.png" alt="">
      <span>上海幕库科技有限公司</span>
    </div>
    <div id="selectList">
      <div>首页</div>
      <div>公司介绍</div>
      <div>成功案例</div>
      <div>加入我们</div>
    </div>
  </el-header>
  <el-main>
    <div id="bigPicture">
        <div id="pictureWord">
          <p>
            <span>通过大数据、人工智能、云计算等技术的应用和创新，助力国家港航信息化事业转型发展。</span>
          </p>
          <p>
            <span style="color: rgb(255, 255, 255); z-index: 1;">&nbsp; 创新&nbsp; |&nbsp; 合作&nbsp; |&nbsp; 共赢&nbsp;</span>
          </p>
        </div>
    </div>
  </el-main>
  <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  height: 100%!important;
}
.el-header{
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  height:124px!important;
}
.el-header>div{
  display: flex;
  align-items: center;
}
#logDiv{
  display: flex;
  align-items: center;
}
#logDiv>span{
  margin-left: 15px;
  font: 30px "Microsoft YaHei","微软雅黑","arial","tahoma","MicrosoftJhengHei"
}
#selectList>div{
  border-left: solid 1px black;
  width: 200px;
  text-align: center;
}
.el-main{
  height: 1200px;
  padding: 0px;
}
#bigPicture{
  background-image: url("../assets/bigPicture.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-color: rgb(255, 255, 255);
  opacity: 1;
  z-index: 1;
  width: 100% !important;
  height: 652px !important;
}
.el-footer{
  background-color: coral;
  font: 12px/1 "Microsoft YaHei","微软雅黑","arial","tahoma","MicrosoftJhengHei";
  margin: 0;
  padding: 0;
  background-color: rgb(29, 39, 80);
  height: 286px!important;
}
</style>
