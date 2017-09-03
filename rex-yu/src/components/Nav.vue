<template>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
        <el-menu-item index="5" style="float:right;margin-right:10%;">留言板</el-menu-item>
        <el-menu-item index="4" style="float:right;">大数据</el-menu-item>
        <el-menu-item index="3" style="float:right;">PHP</el-menu-item>
        <el-submenu index="2" style="float:right;">
            <template slot="title">Web</template>
            <el-menu-item index="2-1">html5</el-menu-item>
            <el-menu-item index="2-2">css</el-menu-item>
            <el-menu-item index="2-3">JavaScript</el-menu-item>
        </el-submenu>
        <el-menu-item index="Home" style="float:right;">首页</el-menu-item>
        <!-- <el-menu-item index="6">留言</el-menu-item> -->
    </el-menu>
</template>
<script>
export default {
    name:'Nav',
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
}
</script>
