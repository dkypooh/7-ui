## 七鱼基础组件-picViewer

### 图片查看器使用demo

:::ysfdoc  1.sf-picviewer实例化后元素要append到document.body下。2.通过调用实例的show方法显示选中的图片。

```html
  <template>
      <div>
        <ul class="sf-picviewer-demos clearfix">
            <li v-for="(url, index) in urls"><img :src="url" @click="showPic(index)"></li>
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
            urls:[
              'http://p1.bqimg.com/582863/25a26800d818e9d5.jpg',
              'http://p1.bqimg.com/582863/9bbd7e4d58f518c8.jpg',
              'http://p1.bqimg.com/582863/2b6bca035b666d5b.jpg',
              'http://p1.bqimg.com/582863/d471d1355fc0ea9d.jpg',
              'http://p1.bqimg.com/582863/4e83300a6a813b0f.jpg',
              'http://p1.bqimg.com/582863/c0d9a4ca8047ff3c.jpg',
              'http://p1.bqimg.com/582863/a00902fb1b9abaef.jpg',
              'http://p1.bqimg.com/582863/965e1dbc83db5681.jpg',
              'http://p1.bqimg.com/582863/1e9772b21d29e873.jpg'
            ],
            pics:[{
                    name: 'tibet-1',
                    src: 'http://p1.bqimg.com/582863/51c7e53d38852677.jpg'
                }, {
                    name: 'tibet-2',
                    src: 'http://p1.bqimg.com/582863/17aadeb590ee059c.jpg'
                }, {
                    name: 'tibet-3',
                    src: 'http://p1.bqimg.com/582863/2b6bca035b666d5b.jpg'
                }, {
                    name: 'tibet-4',
                    src: 'http://p1.bqimg.com/582863/d471d1355fc0ea9d.jpg'
                }, {
                    name: 'tibet-5',
                    src: 'http://p1.bqimg.com/582863/43ddaf20bb40bc82.jpg'
                }, {
                    name: 'tibet-6',
                    src: 'http://p1.bqimg.com/582863/4afcf3cb33d077b3.jpg'
                }, {
                    name: 'tibet-7',
                    src: 'http://p1.bqimg.com/582863/a388949c6428e30a.jpg'
                }, {
                    name: 'tibet-8',
                    src: 'http://p1.bqimg.com/582863/65da6bd4d3991a9d.jpg'
                }, {
                    name: 'tibet-9',
                    src: 'http://p1.bqimg.com/582863/3ed77fd5cf132484.jpg'
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