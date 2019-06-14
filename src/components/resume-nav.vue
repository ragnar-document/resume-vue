<template>
 <div class="container">
   <el-header class="resume_nav">
       <!-- Header content -->
       <nav class="rn_main">
          <div class="rn_bt">
              <router-link to="/" class="rn_main_item">Home</router-link>
              <el-divider direction="vertical"></el-divider>
              <router-link to="/project" class="rn_main_item">Project</router-link>
          </div>
        </nav>
     </el-header>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scope>
.resume_nav{
  background-color: #fff;
  margin-bottom: 10px;
}

.rn_main{

   height: 60px;
   width: 1000px;
   margin: 0 auto;
   line-height: 60px;
 }

.rn_main .rn_bt{
  float: right;
}

.rn_main .rn_bt a{
   color: #409eff;
   text-decoration: none;
   font-size: 18px;
   margin: 0 10px;
   padding: 5px;
 }

@media screen and (max-width: 500px){
  .rn_main{
    width: 90%;
    text-align: center;
  }
  .rn_main .rn_bt{
    float: none;
  }
}
</style>
