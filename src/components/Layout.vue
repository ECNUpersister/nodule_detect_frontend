<template>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>新建检测</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">上传图片检测</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-setting"></i>结果查询</template>
          <el-menu-item-group>
            <el-menu-item index="3-1">最近检测</el-menu-item>
            <el-menu-item index="3-2">历史记录查询</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>结节博物馆</template>
          <el-menu-item-group>
            <el-menu-item index="3-1">结节分类</el-menu-item>
            <el-menu-item index="3-2">结节病理知识</el-menu-item>
          </el-menu-item-group>
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
        <span>王医生</span>
      </el-header>

      <el-main>
        <el-row :gutter="15">
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="17">
            <el-descriptions class="margin-top" title="待检测病人信息" :column="5" :size="size" border>
              <template slot="extra">
                <el-button type="primary" size="small">编辑</el-button>
              </template>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-user"></i>
                  用户名
                </template>
                nodule_patient0001
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-mobile-phone"></i>
                  手机号
                </template>
                10000000000
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-location-outline"></i>
                  居住地
                </template>
                上海市
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-tickets"></i>
                  备注
                </template>
                <el-tag size="small">无明显症状</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-office-building"></i>
                  联系地址
                </template>
                上海市闵行区XX路 XXXX 号
              </el-descriptions-item>
            </el-descriptions>
          </el-col>
        </el-row>
        <el-row :gutter="15">
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="17" style="margin-bottom: 10px">
            <br/>
            <br/>
            <br/>
            <br/>
            <img-upload @onUpload="uploadImg" ref="imgUpload" :beforeDetectUrl="beforeDetectUrl"></img-upload>
            <el-tag for="beforeDetect" v-show="beforeDetectUrl" size="big">原始图像</el-tag>
            <img :src=beforeDetectUrl alt="" id="beforeDetect" class="dong-image">
            <el-tag for="afterDetect" v-show="afterDetectUrl">检测结果</el-tag>
            <img :src=afterDetectUrl alt="" id="afterDetect" class="dong-image">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入诊断结果"
              v-model="textarea"
              v-show="afterDetectUrl">
            </el-input>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="7">
            <el-calendar v-model="value">
            </el-calendar>
          </el-col>
        </el-row>
        <el-row :gutter="15">
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="17" style="margin-bottom: 10px">
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
      afterDetectUrl: '',
      textarea: '',
      value: new Date()
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
