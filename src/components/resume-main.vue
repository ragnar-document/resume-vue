<template>
 <div class="container">
    <el-container class="g_media g_c">
        <el-aside class="resume_sidebar">
          <!-- Aside content -->
          <div class="rs_main_intro ">
            <div class="rs_intro_logo b_sider">
              <a href="javascript:;">
                <!-- <img src="https://github.com/ragnar-document/Document-dish/blob/master/images/logo.jpeg?raw=true" alt=""> -->
                <img src="@/assets/img/logo.jpeg" alt="logo">
              </a>
              <h2>董兴龙</h2>
              <p>求职意向：Web前端工程师</p>
            </div>
            <div class="resume_intro_definite b_sider">
              <h3>基本信息</h3>
              <div class="definite_container">
                年龄：20<br>
                住址：广东省广州增城市<br>
                电话：137-2666-6099 <br>
                邮箱：ragnar_document@sohu.com <br>
                专业：电子商务
                学历：中专
              </div>
            </div>
            <div class="resume_intro_skill b_sider">
              <h3>技能栈</h3>
                <div>HTML+CSS+JS: <el-progress :percentage="85" ></el-progress></div>
                <div>ELement+Bootstrap: <el-progress :percentage="80" ></el-progress></div>
                <div>Node.js: <el-progress :percentage="70" ></el-progress></div>
                <div>微信小程序: <el-progress :percentage="70" ></el-progress></div>
                <div>vue 全家桶: <el-progress :percentage="70" ></el-progress></div>
            </div>
            <div class="resume_intro_book b_sider">
              <h3>最近阅读</h3>
              <el-tag class="tag">响应式web设计</el-tag>
              <el-tag class="tag">你不知道的JS（上）</el-tag>
              <el-tag class="tag">vue权威指南</el-tag>
              <el-tag class="tag">HTML5与CSS3</el-tag>
              <el-tag class="tag">卡耐基：人性的优点/缺点</el-tag>

            </div>
          </div>
        </el-aside>

        <el-main class="re_main">
          <!-- Main content -->
            <div class="re_main_definite">
              <div class="re_md_myself tit">
                <el-divider content-position="left" >自我介绍</el-divider>
                <p class="text">
                  您好！很荣幸被你查看简历。我叫董兴龙来自广东佛山，是一名中专毕业的学生。在校学习的是电子商务也接触过网页设计参加过学校举办的技能节拿了网页设计二等奖，我的爱好是摄影所以毕业后从事了5个月的摄影行业，后来回到学校读了一个学期大专但是学的知识比较广感觉到头没什么技能，学期结束后经家人介绍到亲戚公司学习web前端的知识。在这学习的一年里收获很大过的很充实也学会了一门技术，亲身体会到了程序员的感受、热爱新技术、喜欢阅读奇舞团和美团技术的文章。平时生活热爱运动，吃苦耐劳。我的介绍到这谢谢您的倾听，谢谢🙏
                </p>
              </div>
              <div class="re_md_work tit">
                <el-divider content-position="left" >实习经验</el-divider>
                <el-table
                  :data="tableData"
                  style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="公司名称"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="地址">
                  </el-table-column>
                </el-table>
              </div>
              <div class="re_md_project tit">
                <el-divider content-position="left" >写过的项目</el-divider>
                  <el-table  :data="projecttable"
                  style="width: 100%">
                    <el-table-column prop="name" label="项目名称" width="180"></el-table-column>
                     <el-table-column prop="type" label="类型" width="180"></el-table-column>
                     <el-table-column prop="site" label="项目地址"></el-table-column>
                  </el-table>

              </div>
            </div>
        </el-main>
    </el-container>
 </div>
</template>

<script>

 export default {
   data () {
     return {
        tableData: [{
        date: '2017-01至03',
        name: '古装摄影盘子女人坊',
        address: '佛山福禄路岭南新天地对面'
      }, {
        date: '2018-12至04',
        name: '蚂蚁动力广告设计有限公司',
        address: '佛山顺德区AM美学文化中心'
      }],
      projecttable:[{
        name: '微信待办实现',
        type: '微信小程序',
        site: 'https://github.com/ragnar-document/wachat_todolist'
      }, {
        name: 'keep商城购物车',
        type: '小程序',
        site: 'https://github.com/ragnar-document/keep_shop'
      },{
        name: 'CRM后台',
        type: 'Node.js',
        site: 'https://github.com/ragnar-document/expressApp'
      }]
     }
   },
   components: {

   }
 }
</script>

<style scope>
.b_sider{
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border-bottom: 2px solid #f56c6c;
  background-color: #fff;
  -webkit-box-shadow: 6px 23px 24px -7px rgba(0,0,0,.3);
  box-shadow: 6px 23px 24px -7px rgba(0,0,0,.3);
}

.logo{
  display: inline-block;
  height: 100px;
  width: 100px;
  background-position: center;
}


.g_c{
  width: 1000px;
  margin: 0 auto;
}

.resume_container_main{
  background-color: #fff;
  height: 100%;
  width: 660px;
}

.rs_intro_logo{
  text-align: center;
}

.rs_intro_logo img{
  display: inline-block;
  border-radius: 50%;
  height: 130px;
  width: 130px;
}

.resume_sidebar{
  height: 100%;
  width: 300px;
  padding: 20px;
}


.definite_container{
  font-size: 14px;
  font-weight: 200;
  line-height: 25px;
}

.re_main_definite{
  background-color: #fff;
  padding: 10px 30px;
  border-radius: 4px;
}

@media screen and (max-width: 500px) {
 .resume_sidebar{
   width: 90% !important;
   padding: 0;

 }

 .rs_main_intro {
   width: 100%;
 }

 .b_sider{

   box-shadow: none;
 }

 .g_media{
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
 }

.re_main_definite{

}

.re_main{
  width: 90%;
  padding: 0;
}

}

</style>
