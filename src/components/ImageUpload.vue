<template>
  <el-upload
    class="img-upload"
    ref="upload"
    action="http://localhost:8443/api/detect"
    :on-preview="handlePreview"
    :before-upload="handleBeforeUpload"
    :on-success="handleSuccess"
    multiple
    :limit="1">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">上传肺部CT图像</div>
  </el-upload>
</template>

<script>
export default {
  name: 'ImgUpload',
  data () {
    return {
      beforeDetectUrl:'',
      afterDetectUrl: ''
    }
  },
  methods: {
    handleBeforeUpload(file) {
      this.beforeDetectUrl = window.URL.createObjectURL(file)
    },
    handleSuccess (response) {
      this.afterDetectUrl = response
      this.$emit('onUpload')
      this.$message.warning('上传成功')
    }
  }
}
</script>
