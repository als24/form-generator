<template>
  <div class="preview">
    <el-form :model="form" ref="form" label-width="100px">
      <draggable class="preview__form" :animation="200" :disabled="false" :list="list" group="form" @add="handleAdd" @end="handleMoveEnd" @start="handleMoveStart">

        <div v-if="list.length ===0" class="preview__nodata"> Drag a component from the left aside to here ! </div>

        <template v-else>
          <el-form-item v-for="(item, index) in list" :key="index" :label="item.name">
            <component :is="item.componentName" v-model="item.vModel" v-bind="item.attrs">
              <template v-if="!!item.defaultValue">
                {{  item.defaultValue  }}
              </template>
            </component>
          </el-form-item>
        </template>

      </draggable>

    </el-form>
  </div>
</template>
<script>
import Draggable from 'vuedraggable'
export default {
  name: 'PreviewPage',
  components: {
    Draggable
  },
  watch: {
    list: {
      handler (val) {
        console.log(0, val)
      },
      deep: true
    }
  },
  data () {
    return {
      form: {},
      list: []
    }
  },
  methods: {
    handleAdd (e) {
      console.log(1, e)
    },
    handleMoveEnd (e) {
      console.log(2, e)
    },
    handleMoveStart (e) {
      console.log(3, e)
    }
  }
}
</script>
<style lang="scss" scoped>
.preview {
  padding: 20px;
  &__form {
    min-height: 300px;
  }
  &__nodata {
    height: 300px;
    color: #ccc;
    font-size: 28px;
    line-height: 300px;
    text-align: center;
    border: 1px #ccc dashed;
  }
}
</style>
