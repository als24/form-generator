<template>
  <div v-cloak class="component">
    <span>{{ componentCfg.label }}</span>
    <div>{{ componentCfg.name }}</div>
  </div>
</template>
<script>
export default {
  name: 'ComponentBuildIn', // 内置组件
  props: {
    componentCfg: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
<style lang="scss" scoped>
.component {
  width: 120px;
  margin-left: 20px;
  margin-top: 10px;
  padding: 10px 10px 0;
  display: inline-block;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  border: 1px #eee solid;
  cursor: move;
  > div {
    line-height: 18px;
    margin-bottom: 10px;
  }
}
</style>
