<template>
  <el-form v-if="hasComponent" label-position="top" style="width:80%;margin:0 auto">
    <el-form-item required label="标签：">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="默认值：">
      <component :is="getComponent('vModel')" v-model="form.vModel"></component>
    </el-form-item>
    <template v-for="(item, index) in attrs">
      <el-form-item :label="attrsLabel[index] + '：'" :key="index">
        <component :is="getComponent(item)" v-model="form.attrs[item]"></component>
      </el-form-item>
    </template>
    <!-- <el-form-item label="默认值">
      <codemirror v-model="code" :options="cmOptions" style="height:100px;overflow:hidden"></codemirror>
    </el-form-item> -->
  </el-form>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'FormItemConfig',

  data () {
    return {
      form: {
        attrs: {}
      }
    }
  },
  watch: {
    currentComp (val) {
      // if (JSON.stringify(val) === JSON.stringify(this.form)) return

      this.form = val
    }
  },
  computed: {
    ...mapState({
      currentComp: state => state.component.selectedComponent
    }),
    hasComponent () {
      return Object.keys(this.currentComp).length > 0
    },
    getComponent () {
      return (key) => {
        let val = this.form[key] !== undefined ? this.form[key] : this.form.attrs[key]
        const ret = typeof val
        console.log(key, val, ret)
        let name = 'el-input'
        if (ret === 'string' && val.length === 7 && val[0] === '#') {
          // 临时这样判断16进制颜色值
          name = 'el-color-picker'
          return name
        }
        switch (ret) {
          case 'string':
            name = 'el-input'
            break
          case 'number':
            name = 'el-input-number'
            break
          case 'boolean':
            name = 'el-switch'
            break
          default:
            break
        }
        return name
      }
    },
    attrs () {
      return Object.keys(this.form.attrsLabel || {})
    },
    attrsLabel () {
      return Object.values(this.form.attrsLabel || {})
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
