<template>
 <div class="container">
  <el-container style=" flex-direction: column;">
   <RH></RH>
   <RM></RM>
   <RT></RT>
  </el-container>


 </div>

</template>

<script>
import RH from '@/components/resume-nav.vue'
import RM from '@/components/resume-main.vue'
import RT from '@/components/resume-footer.vue'

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
     RH,
     RM,
     RT
   },
   methods: {

    }
 }
</script>

<style scope>
body{
  background-color: #409eff;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.container{
  display: inline-block;
  width: 100%;
}

h3{
  margin: 10px 0;
  font-weight: 400;
  font-size: 20px;
}

.tit{
  padding: 20px;
}

.tag{
  margin: 4px;
}

.text{
  font-size: 16px;
  font-weight: 400;
}


</style>
