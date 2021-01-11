<template>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>新建检测</template>
          <el-menu-item-group>
            <template slot="title">新建检测</template>
            <el-menu-item index="1-1">上传图片检测</el-menu-item>
            <el-menu-item index="1-2">语音检测</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>历史记录</template>
          <el-menu-item-group>
            <template slot="title">历史记录</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>热门查询</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>垃圾博物馆</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="4-4">
            <template slot="title">选项4</template>
            <el-menu-item index="4-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王冰冰</span>
      </el-header>

      <el-main>
        <el-row :gutter="15">
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="17" style="margin-bottom: 10px">
            <img-upload @onUpload="uploadImg" ref="imgUpload" :beforeDetectUrl="beforeDetectUrl"></img-upload>
            <el-tag for="beforeDetect" v-show="beforeDetectUrl">检测前</el-tag>
            <img :src=beforeDetectUrl alt="" id="beforeDetect" class="dong-image">
            <el-tag for="afterDetect" v-show="afterDetectUrl">检测后</el-tag>
            <img :src=afterDetectUrl alt="" id="afterDetect" class="dong-image">
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="7">
            <div>检测结果</div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ImgUpload from "./ImageUpload";

export default {
  name: "Layout",
  data() {
    return {
      beforeDetectUrl: '',
      afterDetectUrl: ''
    }
  },
  components: {ImgUpload},
  methods: {
    uploadImg() {
      this.beforeDetectUrl = this.$refs.imgUpload.beforeDetectUrl
      this.afterDetectUrl = "data:img/png;base64," + this.$refs.imgUpload.afterDetectUrl
    }
  }
}
</script>

<style scoped>
.dong-image {
  max-width: 100%;
  max-height: 200px;
}
</style>
