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
        console.log(key)
        const ret = typeof (this.form[key] !== undefined ? this.form[key] : this.form.attrs[key])
        console.log(ret)
        let name = 'el-input'
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
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
</style>
