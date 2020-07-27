<template>
<div>
<el-container>
<el-main>
    <div id="picture_timg">
        <img src="../assets/HZ.jpg"/>
    </div>
    <div id="index">
      <router-link to = "/">首页</router-link>
      <span>  >  </span>
      <span>加入我们</span>
    </div>
    <div id="office_list">
      <ul>
        <li v-for="job in jobs" :key="job.id">
          <div>{{job.name}}</div>
          <span>{{job.publishDate}}</span>
        </li>
      </ul>
    </div>
    <div>
      <from action="">
        <input type="text" placeholder="留言标题" id="con_Subject" name="Subject" autocomplete="off" v-model="formMess.subject">
        <textarea placeholder="留言内容" id="con_Msg" name="Msg" autocomplete="off" v-model="formMess.msg"></textarea>
        <input type="text" placeholder="联系邮箱" id="con_Email" name="Email" autocomplete="off" v-model="formMess.email">
      </from>
      <button type="submit" v-on:click="submit">提交</button>
    </div>
</el-main>
</el-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
      ]
    }
  },
  created() {
    this.sendPost()
  },
  methods: {
    // 方式1
    sendPost() {
      var that = this
      this.$http
        .post(
          '/websiteservice/sysJob/searchSysJobListPage?currentPage=1&pageSize=10',
          {}
        )
        .then(function (response) {
          console.log(response)
          if (response.data.data) {
            debugger
            that.jobs = response.data.data.records
            // Vue.set(this.jobs,response.data.data)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>
#con_Subject{
  width: 100% !important;
  height: 30px !important;
}
#con_Email{
  width: 100% !important;
  height: 30px !important;
  margin-top: 5px;
}
#con_Msg{
  width: 100% !important;
  height: 90px !important;
  margin-top: 10px;
}
#picture_timg  > img{
  width: 100% !important;
  height: 300px !important;
}

.router-link-active{
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
