## 七鱼分页器组件

### 基础功能

:::ysfdoc

```html
    <style>
        .sf-pagination {text-align: center}
    </style>
    <template>
        <sf-pagination :limit="limit" :total="total" :current="current" :unit="unit"></sf-pagination>
    </template>

    <script>
    export default {
        data (){
            return {
             limit : 2,
            total : 20,
            current : 2,
            unit: 5
            }
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| limit     | 分页限制   | String, Number  |              |    —     |
| total     | 总数   | String, Number    |    |       |
| current     | 当前页   | String, Number    |  |    |
| unit  | 单元数    | String, Number   |  |    |


