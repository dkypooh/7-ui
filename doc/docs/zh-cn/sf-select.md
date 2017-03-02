## sf-select 下拉选择

当选项过多时，使用下拉菜单展示并选择内容。

### 基本用法

:::ysfdoc 列表以 id 作为主键   

```html
  <template>
    <sf-select>
        <sf-option v-for="option in options" :id="option.id" :name="option.name" :disabled="option.disabled">
    </sf-select>
  </template>

  <script>
    export default {
      data() {
        return {
            options:[
              {id: 0, name: '网易云'},
              {id: 1, name: '网易七鱼'},
              {id: 2, name: '网易云信'},
              {id: 3, name: '网易蜂巢'},
              {id: 4, name: '网易易盾'}
            ]
        }
      }
    }
  </script>
```
:::

### 默认选中

:::ysfdoc 设置sf-select的defid属性，则默认选中对应项

```html
  <template>
    <sf-select :defid="1">
        <sf-option v-for="option in options" :id="option.id" :name="option.name" :disabled="option.disabled">
    </sf-select>
  </template>

  <script>
    export default {
      data() {
        return {
            options:[
              {id: 0, name: '网易云'},
              {id: 1, name: '网易七鱼'},
              {id: 2, name: '网易云信'},
              {id: 3, name: '网易蜂巢'},
              {id: 4, name: '网易易盾'}
            ]
        }
      }
    }
  </script>
```
:::

### 禁用状态

:::ysfdoc 设置sf-select的disabled属性为true，禁用整个组件

```html
  <template>
    <sf-select :disabled=true>
        <sf-option v-for="option in options" :id="option.id" :name="option.name" :disabled="option.disabled">
    </sf-select>
  </template>

  <script>
    export default {
      data() {
        return {
            options:[
              {id: 0, name: '网易云'},
              {id: 1, name: '网易七鱼'},
              {id: 2, name: '网易云信'},
              {id: 3, name: '网易蜂巢'},
              {id: 4, name: '网易易盾'}
            ]
        }
      }
    }
  </script>
```
:::

### 禁用单个选项

:::ysfdoc 设置sf-option的disabled属性为true，禁用该选项

```html
  <template>
    <sf-select>
        <sf-option v-for="option in options1" :id="option.id" :name="option.name" :disabled="option.disabled">
    </sf-select>
  </template>

  <script>
    export default {
      data() {
        return {
          options:[
            {id: 0, name: '网易云'},
            {id: 1, name: '网易七鱼'},
            {id: 2, name: '网易云信'},
            {id: 3, name: '网易蜂巢'},
            {id: 4, name: '网易易盾'}
          ],
          options1:[
            {id: 0, name: '网易云'},
            {id: 1, name: '网易七鱼', disabled: true},
            {id: 2, name: '网易云信'},
            {id: 3, name: '网易蜂巢'},
            {id: 4, name: '网易易盾'}
          ]
        }
      }
    }
  </script>
```
:::

### 自定义模板

:::ysfdoc 通过slot方式可自定义单个选项的html模板

```html
  <template>
    <sf-select>
        <sf-option v-for="option in options" :id="option.id" :name="option.name" :disabled="option.disabled">
          <span>{{option.name}}</span>
          <span style="color: #d3dce6; margin-left: 10px;">{{option.des}}</span>
        </sf-option>
    </sf-select>
  </template>

  <script>
    export default {
      data() {
        return {
          options:[
            {id: 0, name: '网易云', des: 'cloud'},
            {id: 1, name: '网易七鱼', des: 'qiyu'},
            {id: 2, name: '网易云信', des: 'yunxin'},
            {id: 3, name: '网易蜂巢', des:'fc'},
            {id: 4, name: '网易易盾', des: 'edun'}
          ],
          options1:[
            {id: 0, name: '网易云'},
            {id: 1, name: '网易七鱼', disabled: true},
            {id: 2, name: '网易云信'},
            {id: 3, name: '网易蜂巢'},
            {id: 4, name: '网易易盾'}
          ]
        }
      }
    }
  </script>
```
:::

### Select Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| defid     | 默认选中项id   | [Number, String]  |  —  |  —  |
| title  | 未设置默认选中项时的占位符    | String   | — | 请选择   |
| disabled  | 是否禁用    | boolean   | true, false   | false   |

### Select Events
| 事件      | 说明    | 回调参数 |
|---------- |-------- |----------|
| change    | 选中项变化   | 目标选中项 |
| toggle    | 下拉框展开/收起 | 展开为true，收起为false |

### Select Methods
| 方法      | 说明    | 参数 |
|---------- |-------- |----------|
| select    | 选中某一项   | 目标选中项 |
| toggle    | 展开/收起下拉框 | 展开为true，收起为false |

### Option Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| id     | 选项id，主键   | [Number, String]  |  —  |  —  |
| name  | 选项名称    | String   | — | — |
| disabled  | 是否禁用    | boolean   | true, false   | false   |
