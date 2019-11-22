<template>
  <el-dialog title="预览" :visible.sync="visible" :before-close="handleClose">
    <el-form :model="form" ref="form" :inline="form.inline" :label-position="form['label-position']" :size="form.size" label-width="100px" style="width:90%;margin:0 auto">

      <el-form-item v-for="(item, index) in list" :key="index" :label="item.name + '：'" class="preview__form_item">
        <component :is="item.componentName" v-model="item.vModel" v-bind="item.attrs">
          <template v-if="item.componentName === 'div'">
            {{  item.vModel  }}
          </template>

          <template v-if="item.isComplex">
            <component v-for="(child, idx) in item.children" :key="idx" :is="child.componentName" v-bind="child.attrs">
              <template v-if="child.slot">
                {{ child.slot  }}
              </template>
            </component>
          </template>

        </component>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
        <el-button @click="handleClose">取消</el-button>
      </el-form-item>

    </el-form>

  </el-dialog>
</template>
<script>
export default {
  name: 'PreviewDialog',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    config: {
      type: Object,
      default: () => { }
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    config (val) {
      this.form = { ...val }
    }
  },
  data () {
    return {
      form: { ...this.config }
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
      return false
    },
    handleSubmit () {
      this.$notify({
        title: '表单提交事件',
        message: '预览窗口即将关闭',
        type: 'success'
      })
      setTimeout(() => {
        this.handleClose()
      }, 2000)
    }
  }
}
</script>
