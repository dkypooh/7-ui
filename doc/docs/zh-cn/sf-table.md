# 七鱼表单组件

用于展示多条结构类似的数据, 打包文件自动安装了 `m-table`, `m-table-column` 组件


### 基本用法

:::ysfdoc 当`m-table`元素中注入`data`对象数组后，在`m-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽(不设置则自适应)。

```html
  <template>
    <m-table
      :data="tableData"
     >
      <m-table-column
          prop="name"
          label="姓名"
          width="180">
        </m-table-column>
      <m-table-column
        prop="age"
        label="年龄"
        >
      </m-table-column>
      <m-table-column
        prop="sex"
        label="性别">
      </m-table-column>
    </m-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            name: 'tom',
            age : '10',
            sex : 'male'
          }, {
            date: 'vina',
            name: '11',
            sex: 'female'
          }, {
            date: 'lucy',
            name: '12',
            sex: 'female'
          }, {
            date: 'joy',
            name: '13',
            sex: 'male'
          }]
        }
      }
    }
  </script>
```


### 带斑马纹表格和边框表格
:::ysfdoc 设置不同的表格表现形式

```html
  <template>
    <m-table
      :data="tableData" stripe border
     >
      <m-table-column
          prop="name"
          label="姓名"
          width="180">
        </m-table-column>
      <m-table-column
        prop="age"
        label="年龄"
        >
      </m-table-column>
      <m-table-column
        prop="sex"
        label="性别">
      </m-table-column>
    </m-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            name: 'tom',
            age : '10',
            sex : 'male'
          }, {
            date: 'vina',
            name: '11',
            sex: 'female'
          }, {
            date: 'lucy',
            name: '12',
            sex: 'female'
          }, {
            date: 'joy',
            name: '13',
            sex: 'male'
          }]
        }
      }
    }
  </script>
```

### 样式自定义
:::ysfdoc 支持自定义表格样式`clazz`, 自定义表格高度`height`, 表头高度`header-height`

```html
  <template>
    <m-table
      :data="tableData" height="800" header-height="200" clazz="m-table-custom"
     >
      <m-table-column
          prop="name"
          label="姓名"
          width="180">
        </m-table-column>
      <m-table-column
        prop="age"
        label="年龄"
        >
      </m-table-column>
      <m-table-column
        prop="sex"
        label="性别">
      </m-table-column>
    </m-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            name: 'tom',
            age : '10',
            sex : 'male'
          }, {
            date: 'vina',
            name: '11',
            sex: 'female'
          }, {
            date: 'lucy',
            name: '12',
            sex: 'female'
          }, {
            date: 'joy',
            name: '13',
            sex: 'male'
          }]
        }
      }
    }
  </script>
```

### 表格排序功能及自定义事件
:::ysfdoc 表格支持排序功能`sortable`, 先支持行选中的自定义事件`row-click`, 列表格式化 `fomatter`

```html
  <template>
    <m-table
      :data="tableData" @row-click="rowClick"
     >
      <m-table-column
          prop="name"
          label="姓名"
          width="180">
        </m-table-column>
      <m-table-column
        prop="age"
        label="年龄"
        sortable
        :sort-method="sortMethod"
        :formatter="formatter"
        >
      </m-table-column>
      <m-table-column
        prop="sex"
        label="性别">
      </m-table-column>
    </m-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            name: 'tom',
            age : '10',
            sex : 'male'
          }, {
            date: 'vina',
            name: '11',
            sex: 'female'
          }, {
            date: 'lucy',
            name: '12',
            sex: 'female'
          }, {
            date: 'joy',
            name: '13',
            sex: 'male'
          }]
        }
      },
      methods : {
            sortMethod : function(a, b){
                return a - b;
            },
            formatter : function(row, column){
                return row.address;
            },
            rowClick : function(row, column, event){
                return row
            }

        }
    }
  </script>
```

