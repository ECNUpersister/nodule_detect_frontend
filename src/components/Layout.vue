<template>
  <div>
    <img-upload @onUpload="uploadImg" ref="imgUpload" :beforeDetectUrl="beforeDetectUrl"></img-upload>
    <div>
    <el-tag for="beforeDetect" v-show="beforeDetectUrl">检测前</el-tag>
    <img :src=beforeDetectUrl alt="" id="beforeDetect">
    </div>
    <div>
    <el-tag for="afterDetect" v-show="afterDetectUrl">检测后</el-tag>
    <img :src=afterDetectUrl alt="" id="afterDetect">
    </div>
  </div>
</template>

<script>
import ImgUpload from "./ImageUpload";
export default {
  name: "Layout",
  data(){
    return{
      beforeDetectUrl:'',
      afterDetectUrl:''
  }
  },
  components: {ImgUpload},
  methods:{
    uploadImg () {
      this.beforeDetectUrl=this.$refs.imgUpload.beforeDetectUrl
      this.afterDetectUrl = "data:img/png;base64,"+this.$refs.imgUpload.afterDetectUrl
    }
  }
}
</script>

<style scoped>

</style>
