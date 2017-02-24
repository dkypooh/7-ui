# 七鱼form组件

### 基础用法

:::ysfdoc sf-form组件 包括  *input* *checkbox* *radio*  *switch* *form验证*  
```html
<sf-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
      <sf-form-item label="Title" prop="name">
        <sf-input v-model="ruleForm.name"></sf-input>
      </sf-form-item>
      <sf-form-item label="Checkbox" prop="city">
        <sf-checkbox-group v-model="ruleForm.city">
          <sf-checkbox v-for="item in cities" :label="item.key">{{item.value}}</sf-checkbox>
        </sf-checkbox-group>
      </sf-form-item>
      <sf-form-item label="Radio" prop="radio">
        <sf-radio-group v-model="ruleForm.radio">
          <sf-radio label="1">Radio1</sf-radio>
          <sf-radio label="2">Radio2</sf-radio>
        </sf-radio-group>
      </sf-form-item>
      <sf-form-item label="Textarea" prop="textarea">
        <sf-input type="textarea" :autosize="true" v-model="ruleForm.textarea"></sf-input>
      </sf-form-item>
      <sf-form-item label="Switch" prop="switch">
        <sf-switch v-model="ruleForm.switch" ></sf-switch>
      </sf-form-item>
      <sf-form-item>
        <sf-button @click.native="submitForm('ruleForm')">立即创建</sf-button>
        <sf-button @click.native="resetForm('ruleForm')">重置</sf-button>
      </sf-form-item>
    </sf-form>
    <script>
  export default {
    name: 'app',
    data(){
      return {
        cities: [
          {key: 1, value: "北京"},
          {key: 2, value: "上海"},
          {key: 3, value: "天津"},
          {key: 4, value: "杭州"},
        ],
        ruleForm: {
          name: '',
          city: [],
          radio: '',
          textarea: '',
          switch:true
        },
        rules: {
          name: [
            {required: true, message: '请输入title', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          city: [
            {type: 'array', required: true, message: '请选择city', trigger: 'change'}
          ],
          radio: [
            {required: true, message: '请选择radio', trigger: 'change'}
          ],
          textarea: [
            {required: true, message: '请填写textarea', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
          } else {
            console.log('error');
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
  ```
:::

### Form Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model   | 表单数据对象 | object      |                  —                |  — |
| rules    | 表单验证规则 | object | — | — |
| inline    | 行内表单模式 | boolean | — | false |
| label-position | 表单域标签的位置 | string |  right/left/top            | right |
| label-width | 表单域标签的宽度，所有的 form-item 都会继承 form 组件的 labelWidth 的值 | string | — | — |
| label-suffix | 表单域标签的后缀 | string | — | — |
| show-message  | 是否显示校验错误信息 | boolean | — | true |

### Form Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| validate | 对整个表单进行校验的方法 | Function(callback: Function(boolean))
| validateField | 对部分表单字段进行校验的方法 | Function(prop: string, callback: Function(errorMessage: string))
| resetFields | 对整个表单进行重置，将所有字段值重置为空并移除校验结果 | -

### Form-Item Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| prop    | 表单域 model 字段 | string    | 传入 Form 组件的 `model` 中的字段 | — |
| label | 标签文本 | string | — | — |
| label-width | 表单域标签的的宽度，例如 '50px' | string |       —       | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | bolean | — | false |
| rules    | 表单验证规则 | object | — | — |
| error    | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string | — | — |
| show-message  | 是否显示校验错误信息 | boolean | — | true |


### Input Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text/textarea | text |
| value         | 绑定值           | string, number  | — | — |
| maxlength     | 最大输入长度      | number          |  —  | — |
| minlength     | 最小输入长度      | number          | — | — |
| placeholder   | 输入框占位文本    | string          | — | — |
| disabled      | 禁用            | boolean         | — | false   |
| size          | 输入框尺寸，只在 `type!="textarea"` 时有效      | string          | large, small, mini  | — |
| rows          | 输入框行数，只对 `type="textarea"` 有效  |  number | — |  2   |
| autosize      | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }  |  boolean/object | — |  false   |
| auto-complete | 原生属性，自动补全 | string | on, off | off |
| name | 原生属性 | string | — | — |
| max | 原生属性，设置最大值 | * | — | — |
| min | 原生属性，设置最小值 | * | — | — |
| resize | 控制是否能被用户缩放 | string | none, both, horizontal, vertical | — |
| autofocus | 原生属性，自动获取焦点 | boolean | true, false | false |

### Input Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 在 Input 值改变时触发 | (value: string \| number) |


### Radio Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value   | string,number    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |

### Radio-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | Radio 按钮组尺寸   | string  | large, small  |    —     |
| fill  | 按钮激活时的填充色和边框色    | string   | — | #20a0ff   |
| text-color  | 按钮激活时的文本颜色    | string   | — | #ffffff   |

### Radio-group Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value  | string,number  |        —       |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |


### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled  | 是否禁用    | boolean   | — | false   |
| width  | switch 的宽度（像素）    | number   | — | 166（有文字）/ 158（无文字） |
| on-text  | switch 打开时的文字    | string   | — | 启用 |
| off-text  | switch 关闭时的文字    | string   | — | 停用 |
| on-color  | switch 打开时的背景色    | string   | — | #20A0FF |
| off-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |
| name  | switch 对应的 name 属性    | string   | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    | 新状态的布尔值 |


### Checkbox Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string    |       —        |     —    |
| true-label | 选中时的值   | string, number | — |     —    |
| false-label | 没有选中时的值   | string, number    |      —         |     —    |
| name | 原生 name 属性 | string    |      —         |     —    |
| disabled  | 按钮禁用    | boolean   |  — | false   |
| checked  | 当前是否勾选    | boolean   |  — | false   |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制    | boolean   |  — | false   |

### Checkbox-group Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | event 事件对象 |
