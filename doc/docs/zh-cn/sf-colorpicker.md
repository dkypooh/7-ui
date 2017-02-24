## sf-colorpicker 组件

### HEX
:::ysfdoc
```html
    <style>
        .pg-colorpicker{
            text-align: center;

        }
        .pg-colorpicker .sf-colorpicker{
            margin: 0 auto;
        }

    </style>
    <template>
     <div class="pg-colorpicker">
        <sf-colorpicker :hex="hexStr" :on-change="change"></sf-colorpicker>
        <p>HEX</p>
        <p>{{hexStr}}</p>
    </div>
    </template>

    <script>
    export default {
        data () {
            return {
                hexStr : '#E1E1E1',
                rgbStr : 'rgba(255, 0, 0, .5)',
                rgb : {}
            }
        },
        methods : {
            change(color){
                this.rgbStr = color.toRgbString().toUpperCase();
                this.rgb = color.toRgb();
                this.hexStr = color.toHexString().toUpperCase();
            }
        }
    }
    </script>
```
:::

### RGB
:::ysfdoc 参考文献 [Rgb, Hex](http://csscoke.com/2015/01/01/rgb-hsl-hex/)
```html
    <template>
     <div class="pg-colorpicker">
        <sf-colorpicker :hex="rgbStr" :on-change="change"></sf-colorpicker>
        <p>RGB</p>
        <p>{{rgbStr}}</p>
        <p>{{rgb}}</p>
    </div>
    </template>

    <script>
    export default {
        data () {
            return {
                rgbStr : 'rgba(255, 0, 0, .5)',
                hexStr : '#E1E1E1',
                rgb : {}
            }
        },
        methods : {
            change(color){
                this.rgbStr = color.toRgbString().toUpperCase();
                this.rgb = color.toRgb();
                this.hexStr = color.toHexString().toUpperCase();
            }
        }
    }
    </script>
```
:::




### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| hex     | 颜色值   | String  |  rgba,hex            |    #FFFFFF     |
| on-change     | 变更函数   | Function    |   —  |   —   |
