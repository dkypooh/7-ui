## sf-treeSelect 树形下拉选择

多级下拉菜单

### 基本用法

:::ysfdoc 列表以 id 作为主键   

```html
  <template>
    <sf-tree-select :options="options" ref="sel"></sf-tree-select>
  </template>

  <script>
    export default {
      data() {
        return {
            options:[{
                id: 0, 
                name: '所有选项'
            },{
                id: 1,
                name: '选项1', 
                children: [{
                    id: 11, 
                    name:'选项1-1'
                }]
            },{
                id: 2, 
                name: '选项2', 
                children: [{
                    id: 21, 
                    name:'选项2-1'
                }, {
                    id: 22, 
                    name:'选项2-2'
                }]
            }]
        }
      }
    }
  </script>
```
:::

### 默认选中

:::ysfdoc 设置sf-tree-select的defid属性，则默认选中对应项

```html
  <template>
    <sf-tree-select :options="options" defid='11' ref="sel"></sf-tree-select>
  </template>

  <script>
    export default {
      data() {
        return {
            options:[{
                id: 0, 
                name: '所有选项'
            },{
                id: 1,
                name: '选项1', 
                children: [{
                    id: 11, 
                    name:'选项1-1'
                }]
            },{
                id: 2, 
                name: '选项2', 
                children: [{
                    id: 21, 
                    name:'选项2-1'
                }, {
                    id: 22, 
                    name:'选项2-2'
                }]
            }]
        }
      }
    }
  </script>
```
:::

### 禁用状态

:::ysfdoc 设置sf-tree-select的disabled属性为true，禁用整个组件

```html
  <template>
    <sf-tree-select :options="options" :disabled=true ref="sel"></sf-tree-select>
  </template>

  <script>
    export default {
      data() {
        return {
            options:[{
                id: 0, 
                name: '所有选项'
            },{
                id: 1,
                name: '选项1', 
                children: [{
                    id: 11, 
                    name:'选项1-1'
                }]
            },{
                id: 2, 
                name: '选项2', 
                children: [{
                    id: 21, 
                    name:'选项2-1'
                }, {
                    id: 22, 
                    name:'选项2-2'
                }]
            }]
        }
      }
    }
  </script>
```
:::

### 禁用单个选项

:::ysfdoc 设置备选项的disabled属性为true，禁用该选项

```html
  <template>
    <sf-tree-select :options="options1" ref="sel"></sf-tree-select>
  </template>

  <script>
    export default {
      data() {
        return {
            options1:[{
                id: 0, 
                name: '所有选项'
            },{
                id: 1,
                name: '选项1', 
                children: [{
                    id: 11, 
                    name:'选项1-1'
                }]
            },{
                id: 2, 
                name: '选项2', 
                children: [{
                    id: 21, 
                    name:'选项2-1',
                    disabled: true
                }, {
                    id: 22, 
                    name:'选项2-2'
                }]
            }]
        }
      }
    }
  </script>
```
:::

### 分组展示

:::ysfdoc 不包含id字段的备选项则作为分组名展示

```html
  <template>
    <sf-tree-select :options="options2" ref="sel"></sf-tree-select>
  </template>

  <script>
    export default {
      data() {
        return {
            options:[{
                id: 0, 
                name: '所有选项'
            },{
                id: 1,
                name: '选项1', 
                children: [{
                    id: 11, 
                    name:'选项1-1'
                }]
            },{
                id: 2, 
                name: '选项2', 
                children: [{
                    id: 21, 
                    name:'选项2-1'
                }, {
                    id: 22, 
                    name:'选项2-2'
                }]
            }],
            options1:[{
                id: 0, 
                name: '所有选项'
            },{
                id: 1,
                name: '选项1', 
                children: [{
                    id: 11, 
                    name:'选项1-1'
                }]
            },{
                id: 2, 
                name: '选项2', 
                children: [{
                    id: 21, 
                    name:'选项2-1',
                    disabled: true
                }, {
                    id: 22, 
                    name:'选项2-2'
                }]
            }],
            options2:[{
                id: 0, 
                name: '所有选项'
            },{
                name: '选项1', 
                children: [{
                    id: 11, 
                    name:'选项1-1'
                }]
            },{
                name: '选项2', 
                children: [{
                    id: 21, 
                    name:'选项2-1'
                }, {
                    id: 22, 
                    name:'选项2-2'
                }]
            }]
        }
      }
    }
  </script>
```
:::

### 多级

:::ysfdoc

```html
  <template>
    <sf-tree-select :options="options3" ref="sel"></sf-tree-select>
  </template>

  <script>
    export default {
      data() {
        return {
            options:[{
                id: 0, 
                name: '所有选项'
            },{
                id: 1,
                name: '选项1', 
                children: [{
                    id: 11, 
                    name:'选项1-1'
                }]
            },{
                id: 2, 
                name: '选项2', 
                children: [{
                    id: 21, 
                    name:'选项2-1'
                }, {
                    id: 22, 
                    name:'选项2-2'
                }]
            }],
            options1:[{
                id: 0, 
                name: '所有选项'
            },{
                id: 1,
                name: '选项1', 
                children: [{
                    id: 11, 
                    name:'选项1-1'
                }]
            },{
                id: 2, 
                name: '选项2', 
                children: [{
                    id: 21, 
                    name:'选项2-1',
                    disabled: true
                }, {
                    id: 22, 
                    name:'选项2-2'
                }]
            }],
            options2:[{
                id: 0, 
                name: '所有选项'
            },{
                name: '选项1', 
                children: [{
                    id: 11, 
                    name:'选项1-1'
                }]
            },{
                name: '选项2', 
                children: [{
                    id: 21, 
                    name:'选项2-1'
                }, {
                    id: 22, 
                    name:'选项2-2'
                }]
            }],
            options3:[{
                id: 0, 
                name: '所有选项'
            },{
                id: 1,
                name: '选项1', 
                children: [{
                    id: 11, 
                    name:'选项1-1',
                    children: [{
                        id: 111,
                        name: '选项1-1-1'
                    },{
                        id: 112,
                        name: '选项1-1-2'
                    }]
                }]
            },{
                id: 2,
                name: '选项2', 
                children: [{
                    id: 21, 
                    name:'选项2-1'
                }, {
                    id: 22, 
                    name:'选项2-2',
                    children: [{
                        id: 221,
                        name: '选项2-2-1'
                    },{
                        id: 222,
                        name: '选项2-2-2'
                    }]
                }]
            }]
        }
      }
    }
  </script>
```
:::

### Select Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| options   | 备选项数组   | Array  |  —  |  []  |
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
| toggle    | 展开/收起下拉框 | 展开为true，收起为false，为空则切换 |

