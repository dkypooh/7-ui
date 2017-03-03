## 七鱼基础组件-picViewer

### 图片查看器使用demo

:::ysfdoc  1.sf-picviewer实例化后元素要append到document.body下。2.通过调用实例的show方法显示选中的图片。

```html
  <template>
      <div>
        <ul class="sf-picviewer-demos clearfix">
          <li v-for="n in 9"><img :src="'./img/thumbnails/tibet-' + n + '.jpg' " @click="showPic(n-1)"></li>
        </ul>
        <sf-picviewer :pics=pics ref="viewer"></sf-picviewer>
      </div>
  </template>
  <style lang="scss">
   .sf-picviewer-demos{
          list-style: none;
          width: 555px;
          height: 555px;

          li{
              box-sizing: border-box;
              float: left;
              width: 33.3%;
              height: 33.3%;
              margin: 0 -1px -1px 0;
              border: 1px solid transparent;
              overflow: hidden;
              cursor: pointer;
              img{
                width: 100%;
              }
          }
    }
  </style>
  <script>
    export default {
      data() {
        return {
            pics:[{
                    name: 'tibet-1',
                    src: './img/tibet-1.jpg'
                }, {
                    name: 'tibet-2',
                    src: './img/tibet-2.jpg'
                }, {
                    name: 'tibet-3',
                    src: './img/tibet-3.jpg'
                }, {
                    name: 'tibet-4',
                    src: './img/tibet-4.jpg'
                }, {
                    name: 'tibet-5',
                    src: './img/tibet-5.jpg'
                }, {
                    name: 'tibet-6',
                    src: './img/tibet-6.jpg'
                }, {
                    name: 'tibet-7',
                    src: './img/tibet-7.jpg'
                }, {
                    name: 'tibet-8',
                    src: './img/tibet-8.jpg'
                }, {
                    name: 'tibet-9',
                    src: './img/tibet-9.jpg'
                }]
            }
      },
      methods:{
        showPic(ind){
          this.$refs.viewer.show(ind);
        }
      },
      mounted() {
          document.body.appendChild(this.$refs.viewer.$el);
      }
    }
  </script>
```
:::


###  Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| pics     | 需要查看的图片信息   | [{name,src}]  |  false  |  —  |

### Methods
| 方法      | 说明    | 参数 |
|---------- |-------- |----------|
| show    | 要显示的图片索引,不传时显示之间显示过的图片   | Number |