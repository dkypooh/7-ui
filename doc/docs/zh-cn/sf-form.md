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


#Input组件

###基础用法

```html
<sf-input v-model="input" placeholder="请输入内容"></sf-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```

###禁用状态
:::ysfdoc 通过*disabled*熟悉可以指定是否禁用
```html
<sf-input
  placeholder="请输入内容"
  v-model="input1"
  :disabled="true">
</sf-input>

<script>
export default {
  data() {
    return {
      input1: ''
    }
  }
}
</script>
```

###文本域

:::ysfdoc 通过将type切换为textarea

```html
<sf-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</sf-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
```

:::ysfdoc

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
| form | 原生属性 | string | — | — |

### Input Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| click | 点击 Input 内的图标时触发 | (event: Event) |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 在 Input 值改变时触发 | (value: string \| number) |
