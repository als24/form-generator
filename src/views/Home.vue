<template>
  <el-container class="container">
    <el-header class="header">
      <h3>Element-ui 表单生成器</h3>
      <el-link type="primary" href="https://github.com/ch957869975/form-generator" target="_blank">To star this repo</el-link>
    </el-header>
    <el-container>
      <el-aside width="300px" class="el-aside__right">
        <el-card shadow="never" :body-style="{padding: 0, border: 'none', overflow: 'auto'}">

          <div slot="header">
            <span class="primary-color">内置组件</span>
          </div>

          <draggable v-model="components" :clone="clone" :sort="false" :group="{ name: 'form', pull: 'clone', put: false }">
            <component-build-in v-for="(item, index) in components" :key="index" :component-cfg="item" />
          </draggable>

        </el-card>
      </el-aside>
      <el-main>
        <el-card shadow="never" :body-style="{padding: 0,border: 'none', overflow: 'auto'}">

          <div slot="header">
            <el-button type="text" class="el-icon-view" @click="showPreviewDialog">预览</el-button>
            <el-button type="text" class="el-icon-document-copy">复制代码</el-button>
          </div>

          <preview-container ref="preview" :form-config="formConfig" />

        </el-card>
      </el-main>
      <el-aside width="300px" class="el-aside__left">
        <el-tabs v-model="tabValue" stretch>

          <el-tab-pane label="表单配置" name="form">
            <form-config :config="formConfig" @form-change="handleFormConfigChange" />
          </el-tab-pane>

          <el-tab-pane label="表单项配置" name="formItem">
            <form-item-config />
          </el-tab-pane>

        </el-tabs>
      </el-aside>
    </el-container>
    <preview-dialog :visible="previewVisible" :list="list" :config="formConfig" @close="previewVisible=false" />
  </el-container>

</template>

<script>
import Draggable from 'vuedraggable'
import ComponentBuildIn from '@/components/component-build-in'
import PreviewContainer from '@/components/preview'
import FormConfig from '@/components/form-config'
import FormItemConfig from '@/components/form-item-config'
import PreviewDialog from '@/components/preview-dialog'
import { components } from '@/config'
import { deepClone } from '@/utils'
export default {
  name: 'Home',
  components: {
    ComponentBuildIn,
    Draggable,
    PreviewContainer,
    FormConfig,
    FormItemConfig,
    PreviewDialog
  },
  data () {
    return {
      tabValue: 'formItem',
      components,
      previewVisible: false,
      list: [],
      globalId: 0, // 全局索引标志
      formConfig: {
        inline: false,
        'label-position': 'left',
        size: 'medium',
        'label-width': 'auto'
      }

    }
  },
  methods: {
    deepClone,
    clone (comp) {
      console.log(deepClone(comp))
      return deepClone(comp)
    },
    handleFormConfigChange (data) {
      console.log(data)
      if (typeof data === 'object') {
        this.formConfig = { ...data }
      }
    },
    showPreviewDialog () {
      if (this.$refs.preview.list.length === 0) {
        // 当中间区域没有组件存在时，禁止预览
        this.$message({
          center: true,
          type: 'warning',
          message: '先从左侧拖拽组件到中央展示区域试试吧！',
          offset: 65
        })
        return false
      }
      this.list = deepClone(this.$refs.preview.list)
      this.previewVisible = true
    }
  }
}
</script>
<style lang="scss">
.container {
  .el-tabs__item {
    height: 60px;
    line-height: 60px;
  }
  .el-main {
    padding: 0;
  }
  .el-aside,
  .el-main {
    height: calc(100vh - 60px);
    &__right {
      border-right: 1px #cecece solid;
    }
    &__left {
      border-left: 1px #cecece solid;
    }
    .el-card__body,
    .el-tabs__content {
      height: calc(100vh - 120px);
      overflow: scroll;
    }
  }
  .el-card.is-never-shadow {
    border: none;
    .el-card__header .el-button {
      padding: 0;
    }
  }
  .el-tabs__header.is-top {
    margin: 0;
  }
  .header {
    line-height: 60px;
    color: #409eff;
    text-align: center;
    position: relative;
    border-bottom: 1px #cecece solid;
    h3 {
      margin: 0;
    }
    .el-link {
      position: absolute;
      right: 45px;
      top: 0;
    }
  }
}
</style>
