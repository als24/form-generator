/*
 * @Author: chenghao
 * @Date: 2019-11-19 14:40:24
 * @Last Modified by: chenghao
 * @Last Modified time: 2019-11-19 16:03:57
 * @Desc: 描述组件信息的store
 */
export default {
  state: {
    selectedComponent: {}
  },
  mutations: {
    SET_SELECTED_COMPONENT (state, currentComponent) {
      console.log('===set_selected===', currentComponent)
      state.selectedComponent = currentComponent
    }
  }
}
