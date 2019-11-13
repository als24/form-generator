/*
 * @Author: chenghao
 * @Date: 2019-11-12 10:10:34
 * @Last Modified by: chenghao
 * @Last Modified time: 2019-11-13 16:40:20
 * @Desc: 内置组件配置
 */
import { generateData, cascaderOption } from './options'
export default [
  {
    name: '静态文本',
    label: 'Text',
    componentName: 'div',
    defaultValue: '一句话的静态文本'
  },
  {
    name: '单行输入框',
    label: 'Input',
    componentName: 'el-input',
    vModel: '',
    attrs: {
      placeholder: '请输入单行输入框的值'
    }
  },
  {
    name: '多行输入框',
    label: 'Textarea',
    componentName: 'el-input',
    vModel: '',
    attrs: {
      placeholder: '请输入多行输入框的值',
      type: 'textarea'
    }
  },
  {
    name: '数字框',
    label: 'InputNumber',
    componentName: 'el-input-number',
    vModel: 0,
    attrs: {
      step: 1
    },
    attrsLabel: {
      step: '计数器步长'
    }
  },
  {
    name: '开关',
    label: 'Switch',
    componentName: 'el-switch',
    vModel: true,
    attrs: {},
    attrsLabel: {}
  },
  {
    name: '滑块',
    label: 'Slider',
    componentName: 'el-slider',
    vModel: 30,
    attrs: {},
    attrsLabel: {}
  },
  {
    name: '时间选择器',
    label: 'TimeSelect',
    componentName: 'el-time-select',
    vModel: '08:30',
    attrs: {},
    attrsLabel: {}
  },
  {
    name: '日期选择器',
    label: 'DatePicker',
    componentName: 'el-date-picker',
    vModel: '2019-11-12',
    attrs: {},
    attrsLabel: {}
  },
  {
    name: '日期和时间',
    label: 'DateTimePicker',
    componentName: 'el-date-picker',
    vModel: '2019-11-12 17:04:50',
    attrs: {
      type: 'datetime'
    },
    attrsLabel: {}
  },
  {
    name: '评分',
    label: 'Rate',
    componentName: 'el-rate',
    vModel: 3,
    attrs: {},
    attrsLabel: {}
  },
  {
    name: '颜色选择器',
    label: 'ColorPicker',
    componentName: 'el-color-picker',
    vModel: '#409EFF',
    attrs: {},
    attrsLabel: {}
  },
  {
    name: '穿梭框',
    label: 'Transfer',
    componentName: 'el-transfer',
    vModel: [1, 4],
    attrs: {
      data: generateData()
    },
    attrsLabel: {}
  },
  {
    name: '级联选择器',
    label: 'Cascader',
    componentName: 'el-cascader',
    vModel: [],
    attrs: {
      options: cascaderOption
    },
    attrsLabel: {}
  }
]
