<template>
  <el-container class="container">
    <el-header class="header">
      <h3>Element-ui 表单生成器</h3>
    </el-header>
    <el-container>
      <el-aside width="300px" class="el-aside__right">
        <el-card shadow="never" :body-style="{padding: 0, border: 'none', overflow: 'auto'}">
          <div slot="header">
            <span class="primary-color">内置组件</span>
          </div>

        </el-card>
      </el-aside>
      <el-main>
        <el-card shadow="never" :body-style="{padding: 0,border: 'none', overflow: 'auto'}">

          <div slot="header">
            <el-button type="text" class="el-icon-view">预览</el-button>
            <el-button type="text" class="el-icon-document-copy">复制代码</el-button>
          </div>

        </el-card>
      </el-main>
      <el-aside width="300px" class="el-aside__left">
        <el-tabs v-model="tabValue" stretch>
          <el-tab-pane label="表单项配置" name="formItem">

          </el-tab-pane>
          <el-tab-pane label="表单配置" name="form"></el-tab-pane>
        </el-tabs>
      </el-aside>
    </el-container>
  </el-container>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data () {
    return {
      tabValue: 'formItem'
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

    border-bottom: 1px #cecece solid;
    h3 {
      margin: 0;
    }
  }
}
</style>
