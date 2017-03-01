## 七鱼拖拽组件

### Draggable

:::ysfdoc `axis`属性设置拖拽方向, `clone`属性选择是否克隆

```html
    <style>
        .pg-drop {
            height : 100px;
            width : 100px;
            background-color: rgba(33, 150, 243, 0.5);
            border : 2px dashed #d1d1d1;
            font-size: 18px;
            color: white;
            text-align: center;
            vertical-align: middle;
            line-height: 100px;
        }
    </style>

    <template>
        <sf-draggable axis="horizontal" name="">
               <div class="pg-drop"> Drag </div>
        </sf-draggable>
    </template>
```
:::

### Draggable(clone)

:::ysfdoc `axis`属性设置拖拽方向, `clone`属性选择是否克隆

```html
    <style>
        .pg-drop {
            height : 100px;
            width : 100px;
            background-color: rgba(33, 150, 243, 0.5);
            border : 2px dashed #d1d1d1;
            font-size: 18px;
            color: white;
            text-align: center;
            vertical-align: middle;
            line-height: 100px;
        }
    </style>

    <template>
        <sf-draggable axis="horizontal" name="" clone>
               <div class="pg-drop"> Drag </div>
        </sf-draggable>
    </template>
```
:::





### DragAndDrop

:::ysfdoc 继承于`sf-draggable` 组件

```html
    <style>
       .h1 {
            margin-bottom: 30px;
            text-align: center;
            font-size: 36px;
        }
        .sf-dnd-tom{
            padding: 20px;
            border:1px dotted #d1d1d1
        }
        .sf-dnd-tom .tom_item{
            height:33px;
            line-height:33px;
            padding : 5px;
            box-sizing: border-box;
        }
        .sf-dnd-tom .tom_item:nth-child(n+2){
            border-top : 2px dashed #ffffff;
        }
        .sf-dnd-tom .tom_item:nth-child(even){
            background-color : rgba(255, 193, 7, 0.5)
        }
        .sf-dnd-tom .tom_item:nth-child(odd){
            background-color : rgba(33, 150, 243, 0.5)
        }

        .sf-dnd-lucy{
             padding: 20px;
             border:1px dotted #d1d1d1
         }
        .sf-dnd-lucy .tom_item{
            height:33px;
            line-height:33px;
            padding : 5px;
            box-sizing: border-box;
        }
        .sf-dnd-lucy .tom_item:nth-child(n+2){
            border-top : 2px dashed #ffffff;
        }
        .sf-dnd-lucy .tom_item:nth-child(even){
            background-color : rgba(255, 193, 7, 0.5)
        }
        .sf-dnd-lucy .tom_item:nth-child(odd){
            background-color : rgba(33, 150, 243, 0.5)
        }
        .sf-dnd-juck{
            padding: 20px;
            border:1px dotted #d1d1d1
        }
        .sf-dnd-juck .tom_item{
            height:33px;
            line-height:33px;
            padding : 5px;
            box-sizing: border-box;
        }
        .sf-dnd-juck .tom_item:nth-child(n+2){
            border-top : 2px dashed #ffffff;
        }
        .sf-dnd-juck .tom_item:nth-child(even){
            background-color : rgba(255, 193, 7, 0.5)
        }
        .sf-dnd-juck .tom_item:nth-child(odd){
            background-color : rgba(33, 150, 243, 0.5)
        }
        .code{
            margin-top:20px;
            text-align: center;
        }
    </style>

    <template>
         <h1 class="h1" >lucy -- tom</h1>
         	<sf-dnd :source="source" name="lucy" from="tom" >
         		<li v-for="(x, index) in source" :key="x" class="tom_item" >
         			{{x}}
         		</li>
         	</sf-dnd>
         	<h1>juck -- lucy</h1>
         	<sf-dnd :source="source2" name="juck" from="lucy" >
         		<li v-for="(x, index) in source2" :key="x" class="tom_item"  >
         				{{x}}
         		</li>
         	</sf-dnd>
         	<h1>tom -- lucy</h1>
         	<sf-dnd :source="source1" name="tom" from="lucy">
         		<li v-for="(x, index) in source1" :key="x" class="tom_item">
         			{{x}}
         		</li>
         	</sf-dnd>

         	<h1 class="code">{{source1}}</h1>
         	<h1 class="code">{{list}}</h1>
    </template>

    <script>
            window.sfDND = {
        		tom : ['1','2','3','4','5'],
        		juck : ['z', 'y'],
        		lucy : ['a', 'b']
        	};

        	export default {
        		data : function(){
        			return {
        				source1 : window.sfDND.tom,
        				source : window.sfDND.lucy,
        				source2 : window.sfDND.juck,
        				list : []
        			}
        		},
        		methods:{
        			change : function(list){
        				console.log(list)
        			}
        		}
        	}
    </script>


```
:::

### DragResize
:::ysfdoc `e`, `w`, `n`, `s`, `ew`, `ns` 六种模式，实例为`ew`模式，鼠标hover区块最右边可以拖动。

```html
    <style>
    .drag-container {
    	position: relative;
    	display: inline-block;
    }
    .drag-dom{
    	height : 200px;
    	width  : 200px;
    	display: inline-block;
    	background-color: #03a9f4;
        box-sizing: border-box;
        border: 2px dashed #ddd;
        border-right : 0px;
    }
    .sf-dragresize--ew{
    	right : 0;
    }
    </style>

    <template>
         <div class="drag-container">
            <div class="drag-dom" v-dragresize:ew="resize"></div>
         </div>
    </template>

    <script>
        export default {
            methods:{
                 /**
                  * [resize description]
                  * @param  {[type]} store [数据实体]
                  * @param  {[type]} type  [mousemove, mouseup, mousedown]
                  * @param  {[type]} el    [拖动节点元素]
                  */
                 resize : function(store, type, el){
                     switch(type){
                         case 'mousedown':
                             break;
                         case 'mousemove':
                             el.style.height = store.rectangle.height + 'px';
                             el.style.width = store.rectangle.width + 'px';
                             break;
                         case 'mouseup':
                             break;
                     }
                 }
            }
        }
    </script>

```
:::

### Draggable Attributes

| name       | 描述           |参数|  必填  |
|:---|:---|:---|:---|
| axis       | 拖动方式        |horizontal,vertical,x, y |否|
| name       | 拖动的名称     | '' |是|
| clone      | 是否克隆元素    |  |否|


### DragAndDrop Attributes

| name       | 描述            |  必填  |
|:----|:----|:----|
| drag       | 可否拉起         |否|
| drop       | 可否放置         |否|
| from       | 可接受的DND别名   |否|
| to         | 可到达的DND别名   |否|
| name       | DND名称         |是|
| source     | 数据源           |是|



### 栗子

**组件演示地址**[demo](https://codepen.io/dkypooh/pen/kkRkEL)
