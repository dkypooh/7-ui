<style>
  .demo-box.demo-sf-button {
    .el-row {
      margin-bottom: 10px;
    }
    .sf-button + .sf-button {
      margin-left: 10px;
    }
    .sf-button-group {
      margin-bottom: 20px;

      .sf-button + .sf-button {
        margin-left: 0;
      }

      & + .sf-button-group {
        margin-left: 10px;
      }
    }
  }

  .demo-box.demo-sf-button .intro-block {
    padding: 0;
  }

  .demo-sf-button .intro-block .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;
    }
  }

  .demo-sf-button .intro-block .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }

  .demo-sf-button .intro-block .wrapper {
    float: right;
    margin-right: 20px;
  }
</style>

## sf-button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::ysfdoc sf-button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```html
<sf-button>默认按钮</sf-button>
<sf-button color="primary">主要按钮</sf-button>
```
:::

### 禁用状态

按钮不可用状态。

:::ysfdoc 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<sf-button :plain="true" :disabled="true">主要按钮</sf-button>
<sf-button type="primary" :disabled="true">主要按钮</sf-button>
<sf-button type="text" :disabled="true">文字按钮</sf-button>
```
:::

### 有颜色倾向

不同的颜色倾向代表不同的提示

:::ysfdoc 朴素按钮同样设置了不同的`type`属性对应的样式（可选值同上），默认为`info`。设置`plain`属性，它接受一个`Boolean`。注意，在该情况下，`type`虽然可以为`text`，但是是没有意义的，会显示为`text sf-button`的样式。

```html
<div class="block">
  <span class="demonstration">默认显示颜色</span>
  <span class="wrapper">
    <sf-button color="success">成功按钮</sf-button>
    <sf-button color="warning">警告按钮</sf-button>
    <sf-button color="danger">危险按钮</sf-button>
    <sf-button color="info">信息按钮</sf-button>
  </span>
</div>
<div class="block">
  <span class="demonstration">hover 显示颜色</span>
  <span class="wrapper">
    <sf-button :plain="true" color="success">成功按钮</sf-button>
    <sf-button :plain="true" color="warning">警告按钮</sf-button>
    <sf-button :plain="true" color="danger">危险按钮</sf-button>
    <sf-button :plain="true" color="info">信息按钮</sf-button>
  </span>
</div>
```
:::

### 图标按钮

带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。

:::ysfdoc 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<sf-button icon="sf-icon-loading" :disabled="disabled" v-if="true">加载</sf-button>
<sf-button color="primary" size="large" disabled> disabled<a class="sf-icon sf-icon-date"></a></sf-button>

```
:::



### 不同尺寸

sf-button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::ysfdoc 额外的尺寸：`large`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<sf-button color="primary" size="large">大型按钮</sf-button>
<sf-button color="primary">正常按钮</sf-button>
<sf-button color="primary" size="small">小型按钮</sf-button>
<sf-button color="primary" size="mini">超小按钮</sf-button>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,small,mini            |    —     |
| color     | 类型   | string    |   primary,success,warning,danger,info,text |     —    |
| plain     | 是否朴素按钮   | Boolean    | true,false | false   |
| disabled  | 禁用    | boolean   | true, false   | false   |
