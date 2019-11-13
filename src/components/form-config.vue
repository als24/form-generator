<template>
  <el-form style="width:90%;margin: 0 20px" label-position="left">

    <el-form-item label="行内模式:">
      <el-switch v-model="form.inline"></el-switch>
    </el-form-item>

    <el-form-item label="标签位置:">
      <el-select v-model="form['label-position']" placeholder="请选择标签位置">
        <el-option label="左对齐" value="left" />
        <el-option label="右对齐" value="right" />
        <el-option label="置于上方" value="top" />
      </el-select>
    </el-form-item>

    <el-form-item label="组件尺寸:">
      <el-select v-model="form.size" placeholder="请选择标签位置">
        <el-option label="mini" value="mini" />
        <el-option label="small" value="small" />
        <el-option label="medium" value="medium" />
      </el-select>
    </el-form-item>

  </el-form>
</template>
<script>
import { deepClone } from '@/utils'
export default {
  name: 'FormConfig',
  watch: {
    form: {
      handler (current) {
        this.$emit('form-change', deepClone(current))
      },
      deep: true
    }
  },
  props: {
    config: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      form: deepClone(this.config)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
