<template>
  <div class="hello">
<!--    <h1>{{ msg }}</h1> -->
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1" style="color: red;" disabled>
			<el-image src="https://www.ninesleeves.online/image/logo.jpg" style="height: -186px;"></el-image>
			</el-menu-item>
        <el-sub-menu index="2">
          <el-menu-item >关于我们</el-menu-item>
          <el-menu-item index="2-1">服务类目</el-menu-item>
          <el-menu-item index="2-2">
			  <router-link to="/about">企业文化</router-link>
			  企业文化</el-menu-item>
          <el-menu-item index="2-3">产品下载</el-menu-item>
          <el-sub-menu index="2-4">
            <el-menu-item index="2-4-1">案例中心</el-menu-item>
  <router-link to="/guanyuwomeng">关于我们</router-link>
          </el-sub-menu>
        </el-sub-menu>
	
        <el-menu-item index="4">加入联盟</el-menu-item>
      </el-menu>
  </div>
  <div class="block text-center">

      <el-carousel height="350px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
   <el-table-v2 fixed :columns="columns" :data="data" :width="700" :height="400">
    <template #row="props">
      <Row v-bind="props" />
    </template>
  </el-table-v2>
 <!-- <el-footer style="background-color:#313131;padding:288px 0 40px;">
<a href="https://www.ninesleeves.online/vueify.html" style="color:royalblue;text-align:left;font-family:微软雅黑;">官方主页</a>
<a href="https://www.ninesleeves.online/dist.html" style="color: red;text-align: center;">关于我们</a>
  </el-footer> -->
<!-- <div>
	
    <marquee style="color: navy;text-align: left;background-color: darkturquoise;">
     这是一个elementplus得按钮组件
      <code v-text="'<el-button>'"></code>
      其实并不好看
    </marquee>
	<marquee behavior="" direction="" style="color:red;">123321你是一个大傻逼这会影响你单手开法拉利吗，不只会让你沉迷装逼</marquee>
    <el-button type="primary">尼玛—傻逼(即你不美vue版button)</el-button>
	<input type="checkbox" name="复选框" />
	<button style="width: 220px;height: 40px;background-color: red;">原生版button</button>
	<input type="button" value="原生版button效果2" style="background-color: blue;width: 220px;height: 40px;color: aliceblue;"/>
	<dl></dl>
	<iframe src="https://www.ninesleeves.online/pingyu.html"></iframe>
	<select style="width: 124px;background-color: aqua;width: 140px;height: 34px;">
		<option value="Vue(element)">Vue(element)</option>
		<option value="原生">原生</option>
	</select>
	<iframe src="https://www.ninesleeves.online/element.html"></iframe>
  </div> -->
  <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always">7+年工作经验</el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover"> 40+行业服务 </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never"> 8x8代码安全审计保障 </el-card>
      </el-col>
    </el-row>
	
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
