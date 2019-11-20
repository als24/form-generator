<template>
  <div class="preview">
    <el-form :model="formConfig" ref="form" :inline="formConfig.inline" :label-position="formConfig['label-position']" :size="formConfig.size" label-width="100px">
      <draggable class="preview__form" :animation="200" :disabled="false" :list="list" group="form" @add="handleAdd" @end="handleMoveEnd" @start="handleMoveStart">

        <div v-if="list.length ===0" class="preview__nodata"> Drag a component from the left aside to here ! </div>

        <template v-else>
          <el-form-item v-for="(item, index) in list" :key="index" :class="{'active': index === select_item_index}" :label="item.name" @click.native="handleFormItemClick(index)" class="preview__form_item">
            <component :is="item.componentName" v-model="item.vModel" v-bind="item.attrs">
              <template v-if="item.componentName === 'div'">
                {{  item.vModel  }}
              </template>
            </component>
            <el-button v-if="index === select_item_index" type="primary" icon="el-icon-delete" size="mini" class="preview__delete_btn" @click.stop="handleDelete(index)" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </template>

      </draggable>

    </el-form>
  </div>
</template>
<script>
import Draggable from 'vuedraggable'
import { mapMutations } from 'vuex'
export default {
  name: 'PreviewPage',
  props: {
    formConfig: {
      type: Object,
      default: () => { }
    },
    formItemConfig: {
      type: Object,
      default: () => { }
    }
  },
  components: {
    Draggable
  },
  watch: {
    list: {
      handler (val) { },
      deep: true
    },
    select_item_index (val) {
      if (val === this.list.length) {
        this.select_item_index--
        this.SET_SELECTED_COMPONENT(this.list[this.select_item_index])
      }
    }
  },
  data () {
    return {
      list: [],
      select_item_index: -1
    }
  },
  methods: {
    ...mapMutations([
      'SET_SELECTED_COMPONENT'
    ]),
    handleFormItemClick (index) {
      this.select_item_index = index

      this.SET_SELECTED_COMPONENT(this.list[this.select_item_index])
    },
    handleAdd (e) {
      console.log('component was added', e)
      this.select_item_index = e.newIndex
      this.SET_SELECTED_COMPONENT(this.list[this.select_item_index])
      console.log('this.select_item_index', this.select_item_index)
    },
    handleDelete (index) {
      console.log('component was delete', index)
      this.list.splice(index, 1)
      if (index >= this.list.length) {
        this.select_item_index = this.list.length - 1
        this.SET_SELECTED_COMPONENT(this.list[this.select_item_index])
      }
    },
    handleMoveEnd (e) {
      console.log('move end', e)
      this.select_item_index = e.newIndex
      this.SET_SELECTED_COMPONENT(this.list[this.select_item_index])
    },
    handleMoveStart (e) {
      console.log('move start', e)
      this.select_item_index = e.oldIndex
      this.SET_SELECTED_COMPONENT(this.list[this.select_item_index])
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
  &__form_item {
    cursor: move;
    position: relative;
    &.active {
      border: 1px dashed #409eff;
    }
    &::after {
      content: " ";
      display: block;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      z-index: 1002;
    }
  }

  &__delete_btn {
    position: absolute;
    border-radius: 0;
    padding: 5px 5px;
    right: 0;
    bottom: 0;
    z-index: 1003;
  }
}
</style>
