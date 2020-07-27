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
                  <img :src="item.picture" class="logo" />
                </div>
                <div id="textDiv">
                  <p style="font-size: 18px;"></p>
                  <h4>{{item.name}}</h4>
                  <p style="font-size: 16px;margin-top: 10px;">{{item.node}}</p>
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
import Vue from "vue";

export default {
  data () {
    return {
       descs: []
    };
  },
  methods: {
    // 方式1
    sendPost() {
      var that = this
      this.$http
        .post("/websiteservice/sysCasus/searchSysCasusListPage",
          {}
        )
        .then((response)=> {
          console.log(response);
          if (response.data.data) {
            this.descs = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
  mounted() {
    this.sendPost();
  },
};
</script>
