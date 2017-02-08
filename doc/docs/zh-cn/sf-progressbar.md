## 七鱼进度条组件

### Success

:::ysfdoc 四种状态的`success`, `info`, `error`, `warning`进度条组件

```html
    <sf-progressbar label="success" :percent=20 type="success" striped></sf-progressbar>
```
:::

### Info

:::ysfdoc 四种状态的`success`, `info`, `error`, `warning`进度条组件

```html

    <sf-progressbar label="info" :percent=30 type="info"></sf-progressbar>

```
:::

### Warning

:::ysfdoc 四种状态的`success`, `info`, `error`, `warning`进度条组件

```html

    <sf-progressbar label="warning" :percent=50 type="warning"></sf-progressbar>

```
:::

### Error

:::ysfdoc 四种状态的`success`, `info`, `error`, `warning`进度条组件

```html

    <sf-progressbar label="error" :percent=40 type="error" striped></sf-progressbar>

```
:::


### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 文本   | String, Number  |              |    —     |
| percent     | 百分比   | Number    |   0-100 |     0   |
| type     | 类型   | String    | sucess, info, warning, error | info   |
| striped  | 是否条纹    | Boolean   | true, false   | false   |