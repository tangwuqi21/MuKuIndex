<template>
<div>
    <div id="picture_timg">
        <img src="../assets/timg.jpg"/>
    </div>
    <div id="index">
      <router-link to = "/">首页</router-link>
      <span> > </span>
      <span>加入我们</span>
    </div>
    <div id="office_list">
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
      <div>
        <input type="text" placeholder="留言标题" id="con_Subject" name="Subject" autocomplete="off">
      </div>
      <div style="height: 0px;">
        <textarea placeholder="留言内容" id="con_Message" name="Message" autocomplete="off"></textarea>
      </div>
      <div>
        <input type="text" placeholder="联系邮箱" id="con_Email" name="Email" autocomplete="off">
      </div>
    </div>
</div>
</template>

<style scoped>
#con_Subject{
  width: 100% !important;
  height: 30px !important;
}
#con_Email{
  width: 100% !important;
  height: 30px !important;
  margin-top: 115px;
}
#con_Message{
  width: 100% !important;
  height: 90px !important;
  margin-top: 10px;
}
#picture_timg  > img{
  width: 100% !important;
  height: 300px !important;
}

router-link{
text-decoration:none;
color:#333;
margin-left: 50px;
}

#office_list {
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
}
#office_list ul li {
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
#office_list ul li div {
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
#office_list ul li span {
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
</style>
