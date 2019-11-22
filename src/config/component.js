/*
 * @Author: chenghao
 * @Date: 2019-11-12 10:10:34
 * @Last Modified by: chenghao
 * @Last Modified time: 2019-11-22 16:13:12
 * @Desc: 内置组件配置
 */
import {
  cascaderOption
  /* generateData, */
} from './options';
export default [
  {
    name: '静态文本',
    label: 'Text',
    componentName: 'div',
    vModel: '一句话的静态文本'
  },
  {
    name: '单选框',
    label: 'Radio',
    componentName: 'el-radio-group',
    isComplex: true,
    vModel: '备选项1',
    children: [
      {
        componentName: 'el-radio',
        attrs: {
          label: '备选项1'
        }
      },
      {
        componentName: 'el-radio',
        attrs: {
          label: '备选项2'
        }
      }
    ],
    attrs: {
      disabled: false
    },
    attrsLabel: {
      disabled: '是否禁用'
    }
  },
  {
    name: '复选框',
    label: 'Checkbox',
    componentName: 'el-checkbox',
    vModel: true,
    attrs: {
      disabled: false,
      border: false,
      label: '备选项'
    },
    attrsLabel: {
      disabled: '是否禁用',
      border: '是否显示边框',
      label: '显示文字'
    }
  },
  {
    name: '下拉选择框',
    label: 'Select',
    componentName: 'el-select',
    isComplex: true,
    vModel: 'macbook pro',
    children: [
      {
        componentName: 'el-option',
        attrs: {
          value: 'macbook pro',
          label: 'macbook pro'
        }
      },
      {
        componentName: 'el-option',
        attrs: {
          value: 'macbook air',
          label: 'macbook air'
        }
      }
    ],
    attrs: {
      placeholder: '请选择',
      multiple: false,
      clearable: false,
      disabled: false
    },
    attrsLabel: {
      placeholder: '占位符',
      multiple: '是否多选',
      clearable: '是否可清空',
      disabled: '是否禁用'
    }
  },
  {
    name: '单行输入框',
    label: 'Input',
    componentName: 'el-input',
    vModel: '',
    attrs: {
      placeholder: '请输入单行输入框的值',
      clearable: false,
      disabled: false,
      readonly: false
    },
    attrsLabel: {
      placeholder: '占位符',
      clearable: '是否可清空',
      disabled: '是否禁用',
      readonly: '是否只读'
    }
  },
  {
    name: '多行输入框',
    label: 'Textarea',
    componentName: 'el-input',
    vModel: '',
    attrs: {
      placeholder: '请输入多行输入框的值',
      type: 'textarea',
      rows: 2,
      disabled: false,
      readonly: false
    },
    attrsLabel: {
      placeholder: '占位符',
      rows: '输入框行数',
      disabled: '是否禁用',
      readonly: '是否只读'
    }
  },
  {
    name: '数字框',
    label: 'InputNumber',
    componentName: 'el-input-number',
    vModel: 0,
    attrs: {
      step: 1,
      disabled: false,
      min: 0,
      max: Infinity
    },
    attrsLabel: {
      step: '计数器步长',
      disabled: '是否禁用',
      min: '最小值',
      max: '最大值'
    }
  },
  {
    name: '开关',
    label: 'Switch',
    componentName: 'el-switch',
    vModel: true,
    attrs: {
      width: 40,
      disabled: false,
      'active-color': '#409EFF',
      'inactive-color': '#C0CCDA',
      'active-text': '',
      'inactive-text': ''
    },
    attrsLabel: {
      width: 'switch 的宽度（像素）',
      disabled: '是否禁用',
      'active-color': 'switch 打开时的背景色',
      'inactive-color': 'switch 关闭时的背景色',
      'active-text': 'switch 打开时的文字描述',
      'inactive-text': 'switch 关闭时的文字描述'
    }
  },
  {
    name: '滑块',
    label: 'Slider',
    componentName: 'el-slider',
    vModel: 30,
    attrs: {
      min: 0,
      max: 100,
      disabled: false,
      step: 1,
      range: false
    },
    attrsLabel: {
      min: '最小值',
      max: '最大值',
      disabled: '是否禁用',
      step: '步长',
      range: '是否范围选择'
    }
  },
  {
    name: '时间选择器',
    label: 'TimeSelect',
    componentName: 'el-time-select',
    vModel: '08:30',
    attrs: {
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '请选择时间'
    },
    attrsLabel: {
      readonly: '是否只读',
      disabled: '是否禁用',
      editable: '文本框可输入',
      clearable: '是否显示清除按钮',
      placeholder: '非范围选择时的占位内容'
    }
  },
  {
    name: '日期选择器',
    label: 'DatePicker',
    componentName: 'el-date-picker',
    vModel: '2019-11-12',
    attrs: {
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '请选择日期'
    },
    attrsLabel: {
      readonly: '是否只读',
      disabled: '是否禁用',
      editable: '文本框可输入',
      clearable: '是否显示清除按钮',
      placeholder: '非范围选择时的占位内容'
    }
  },
  {
    name: '日期和时间',
    label: 'DateTimePicker',
    componentName: 'el-date-picker',
    vModel: '2019-11-12 17:04:50',
    attrs: {
      type: 'datetime',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '请选择日期'
    },
    attrsLabel: {
      readonly: '是否只读',
      disabled: '是否禁用',
      editable: '文本框可输入',
      clearable: '是否显示清除按钮',
      placeholder: '非范围选择时的占位内容'
    }
  },
  {
    name: '评分',
    label: 'Rate',
    componentName: 'el-rate',
    vModel: 3,
    attrs: {
      max: 5,
      disabled: false,
      'allow-half': false,
      'void-color': '#C6D1DE',
      'show-text': false
    },
    attrsLabel: {
      max: '最大分值',
      disabled: '是否禁用',
      'allow-half': '是否允许半选',
      'void-color': '未选中 icon 的颜色',
      'show-text': '是否显示辅助文字'
    }
  },
  {
    name: '颜色选择器',
    label: 'ColorPicker',
    componentName: 'el-color-picker',
    vModel: '#409EFF',
    attrs: {
      disabled: false,
      'show-alpha': false
    },
    attrsLabel: {
      disabled: '是否禁用',
      'show-alpha': '是否支持透明度选择'
    }
  },
  {
    name: '上传',
    label: 'Upload',
    componentName: 'el-upload',
    vModel: undefined,
    isComplex: true,
    children: [
      {
        componentName: 'el-button',
        slot: '上传文件',
        attrs: {
          type: 'primary',
          size: 'small'
        }
      }
    ],
    attrs: {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      multiple: false,
      name: 'file',
      'with-credentials': false,
      'show-file-list': true,
      disabled: false,
      drag: false
    },
    attrsLabel: {
      action: '上传的地址',
      multiple: '是否多选',
      name: '上传的文件字段名',
      'with-credentials': '支持发送 cookie 凭证信息',
      'show-file-list': '是否显示已上传文件列表',
      disabled: '是否禁用',
      drag: '是否启用拖拽上传'
    }
  },
  // {
  //   name: '穿梭框',
  //   label: 'Transfer',
  //   componentName: 'el-transfer',
  //   vModel: [1, 4],
  //   attrs: {
  //     data: generateData(),
  //     filterable: false
  //   },
  //   attrsLabel: {
  //     filterable: '是否可搜索'
  //   }
  // },
  {
    name: '级联选择器',
    label: 'Cascader',
    componentName: 'el-cascader',
    vModel: '',
    attrs: {
      options: cascaderOption,
      disabled: false,
      clearable: false,
      'show-all-levels': true
    },
    attrsLabel: {
      disabled: '是否禁用',
      clearable: '是否支持清空选项',
      'show-all-levels': '输入框中是否显示选中值的完整路径'
    }
  }
];
