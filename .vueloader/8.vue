<template><section><h2>七鱼拖拽组件</h2>
<h3>Draggable</h3>
<demo-block class="demo-box">
                    <div class="source">    

    <template>
        <sf-draggable axis="horizontal" name="">
               <div class="pg-drop"> Drag </div>
        </sf-draggable>
    </template>
</div>
                    <div class="meta">
                      <div class="description"><p><code>axis</code>属性设置拖拽方向, <code>clone</code>属性选择是否克隆</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
        <span class="hljs-selector-class">.pg-drop</span> {
            <span class="hljs-attribute">height </span>: <span class="hljs-number">100px</span>;
            <span class="hljs-attribute">width </span>: <span class="hljs-number">100px</span>;
            <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(33, 150, 243, 0.5);
            <span class="hljs-attribute">border </span>: <span class="hljs-number">2px</span> dashed <span class="hljs-number">#d1d1d1</span>;
            <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
            <span class="hljs-attribute">color</span>: white;
            <span class="hljs-attribute">text-align</span>: center;
            <span class="hljs-attribute">vertical-align</span>: middle;
            <span class="hljs-attribute">line-height</span>: <span class="hljs-number">100px</span>;
        }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-draggable</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">"horizontal"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">""</span>&gt;</span>
               <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"pg-drop"</span>&gt;</span> Drag <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">sf-draggable</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>Draggable(clone)</h3>
<demo-block class="demo-box">
                    <div class="source">    

    <template>
        <sf-draggable axis="horizontal" name="" clone="">
               <div class="pg-drop"> Drag </div>
        </sf-draggable>
    </template>
</div>
                    <div class="meta">
                      <div class="description"><p><code>axis</code>属性设置拖拽方向, <code>clone</code>属性选择是否克隆</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
        <span class="hljs-selector-class">.pg-drop</span> {
            <span class="hljs-attribute">height </span>: <span class="hljs-number">100px</span>;
            <span class="hljs-attribute">width </span>: <span class="hljs-number">100px</span>;
            <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgba</span>(33, 150, 243, 0.5);
            <span class="hljs-attribute">border </span>: <span class="hljs-number">2px</span> dashed <span class="hljs-number">#d1d1d1</span>;
            <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
            <span class="hljs-attribute">color</span>: white;
            <span class="hljs-attribute">text-align</span>: center;
            <span class="hljs-attribute">vertical-align</span>: middle;
            <span class="hljs-attribute">line-height</span>: <span class="hljs-number">100px</span>;
        }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-draggable</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">"horizontal"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">""</span> <span class="hljs-attr">clone</span>&gt;</span>
               <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"pg-drop"</span>&gt;</span> Drag <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">sf-draggable</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>DragAndDrop</h3>
<demo-block class="demo-box">
                    <div class="source">    

    <template>
         <h1 class="h1">lucy -- tom</h1>
         	<sf-dnd :source="source" name="lucy" from="tom">
         		<li v-for="(x, index) in source" :key="x" class="tom_item">
         			{{x}}
         		</li>
         	</sf-dnd>
         	<h1>juck -- lucy</h1>
         	<sf-dnd :source="source2" name="juck" from="lucy">
         		<li v-for="(x, index) in source2" :key="x" class="tom_item">
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

    


</div>
                    <div class="meta">
                      <div class="description"><p>继承于<code>sf-draggable</code> 组件</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
       <span class="hljs-selector-class">.h1</span> {
            <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">30px</span>;
            <span class="hljs-attribute">text-align</span>: center;
            <span class="hljs-attribute">font-size</span>: <span class="hljs-number">36px</span>;
        }
        <span class="hljs-selector-class">.sf-dnd-tom</span>{
            <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;
            <span class="hljs-attribute">border</span>:<span class="hljs-number">1px</span> dotted <span class="hljs-number">#d1d1d1</span>
        }
        <span class="hljs-selector-class">.sf-dnd-tom</span> <span class="hljs-selector-class">.tom_item</span>{
            <span class="hljs-attribute">height</span>:<span class="hljs-number">33px</span>;
            <span class="hljs-attribute">line-height</span>:<span class="hljs-number">33px</span>;
            <span class="hljs-attribute">padding </span>: <span class="hljs-number">5px</span>;
            <span class="hljs-attribute">box-sizing</span>: border-box;
        }
        <span class="hljs-selector-class">.sf-dnd-tom</span> <span class="hljs-selector-class">.tom_item</span><span class="hljs-selector-pseudo">:nth-child(n+2)</span>{
            <span class="hljs-attribute">border-top </span>: <span class="hljs-number">2px</span> dashed <span class="hljs-number">#ffffff</span>;
        }
        <span class="hljs-selector-class">.sf-dnd-tom</span> <span class="hljs-selector-class">.tom_item</span><span class="hljs-selector-pseudo">:nth-child(even)</span>{
            <span class="hljs-attribute">background-color </span>: <span class="hljs-built_in">rgba</span>(255, 193, 7, 0.5)
        }
        <span class="hljs-selector-class">.sf-dnd-tom</span> <span class="hljs-selector-class">.tom_item</span><span class="hljs-selector-pseudo">:nth-child(odd)</span>{
            <span class="hljs-attribute">background-color </span>: <span class="hljs-built_in">rgba</span>(33, 150, 243, 0.5)
        }

        <span class="hljs-selector-class">.sf-dnd-lucy</span>{
             <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;
             <span class="hljs-attribute">border</span>:<span class="hljs-number">1px</span> dotted <span class="hljs-number">#d1d1d1</span>
         }
        <span class="hljs-selector-class">.sf-dnd-lucy</span> <span class="hljs-selector-class">.tom_item</span>{
            <span class="hljs-attribute">height</span>:<span class="hljs-number">33px</span>;
            <span class="hljs-attribute">line-height</span>:<span class="hljs-number">33px</span>;
            <span class="hljs-attribute">padding </span>: <span class="hljs-number">5px</span>;
            <span class="hljs-attribute">box-sizing</span>: border-box;
        }
        <span class="hljs-selector-class">.sf-dnd-lucy</span> <span class="hljs-selector-class">.tom_item</span><span class="hljs-selector-pseudo">:nth-child(n+2)</span>{
            <span class="hljs-attribute">border-top </span>: <span class="hljs-number">2px</span> dashed <span class="hljs-number">#ffffff</span>;
        }
        <span class="hljs-selector-class">.sf-dnd-lucy</span> <span class="hljs-selector-class">.tom_item</span><span class="hljs-selector-pseudo">:nth-child(even)</span>{
            <span class="hljs-attribute">background-color </span>: <span class="hljs-built_in">rgba</span>(255, 193, 7, 0.5)
        }
        <span class="hljs-selector-class">.sf-dnd-lucy</span> <span class="hljs-selector-class">.tom_item</span><span class="hljs-selector-pseudo">:nth-child(odd)</span>{
            <span class="hljs-attribute">background-color </span>: <span class="hljs-built_in">rgba</span>(33, 150, 243, 0.5)
        }
        <span class="hljs-selector-class">.sf-dnd-juck</span>{
            <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;
            <span class="hljs-attribute">border</span>:<span class="hljs-number">1px</span> dotted <span class="hljs-number">#d1d1d1</span>
        }
        <span class="hljs-selector-class">.sf-dnd-juck</span> <span class="hljs-selector-class">.tom_item</span>{
            <span class="hljs-attribute">height</span>:<span class="hljs-number">33px</span>;
            <span class="hljs-attribute">line-height</span>:<span class="hljs-number">33px</span>;
            <span class="hljs-attribute">padding </span>: <span class="hljs-number">5px</span>;
            <span class="hljs-attribute">box-sizing</span>: border-box;
        }
        <span class="hljs-selector-class">.sf-dnd-juck</span> <span class="hljs-selector-class">.tom_item</span><span class="hljs-selector-pseudo">:nth-child(n+2)</span>{
            <span class="hljs-attribute">border-top </span>: <span class="hljs-number">2px</span> dashed <span class="hljs-number">#ffffff</span>;
        }
        <span class="hljs-selector-class">.sf-dnd-juck</span> <span class="hljs-selector-class">.tom_item</span><span class="hljs-selector-pseudo">:nth-child(even)</span>{
            <span class="hljs-attribute">background-color </span>: <span class="hljs-built_in">rgba</span>(255, 193, 7, 0.5)
        }
        <span class="hljs-selector-class">.sf-dnd-juck</span> <span class="hljs-selector-class">.tom_item</span><span class="hljs-selector-pseudo">:nth-child(odd)</span>{
            <span class="hljs-attribute">background-color </span>: <span class="hljs-built_in">rgba</span>(33, 150, 243, 0.5)
        }
        <span class="hljs-selector-class">.code</span>{
            <span class="hljs-attribute">margin-top</span>:<span class="hljs-number">20px</span>;
            <span class="hljs-attribute">text-align</span>: center;
        }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
         <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"h1"</span> &gt;</span>lucy -- tom<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
         	<span class="hljs-tag">&lt;<span class="hljs-name">sf-dnd</span> <span class="hljs-attr">:source</span>=<span class="hljs-string">"source"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"lucy"</span> <span class="hljs-attr">from</span>=<span class="hljs-string">"tom"</span> &gt;</span>
         		<span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(x, index) in source"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"x"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tom_item"</span> &gt;</span>
         			<span>{{</span>x<span>}}</span>
         		<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
         	<span class="hljs-tag">&lt;/<span class="hljs-name">sf-dnd</span>&gt;</span>
         	<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>juck -- lucy<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
         	<span class="hljs-tag">&lt;<span class="hljs-name">sf-dnd</span> <span class="hljs-attr">:source</span>=<span class="hljs-string">"source2"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"juck"</span> <span class="hljs-attr">from</span>=<span class="hljs-string">"lucy"</span> &gt;</span>
         		<span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(x, index) in source2"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"x"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tom_item"</span>  &gt;</span>
         			<span>{{</span>x<span>}}</span>
         		<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
         	<span class="hljs-tag">&lt;/<span class="hljs-name">sf-dnd</span>&gt;</span>
         	<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>tom -- lucy<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
         	<span class="hljs-tag">&lt;<span class="hljs-name">sf-dnd</span> <span class="hljs-attr">:source</span>=<span class="hljs-string">"source1"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"tom"</span> <span class="hljs-attr">from</span>=<span class="hljs-string">"lucy"</span>&gt;</span>
         		<span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(x, index) in source1"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"x"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tom_item"</span>&gt;</span>
         			<span>{{</span>x<span>}}</span>
         		<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
         	<span class="hljs-tag">&lt;/<span class="hljs-name">sf-dnd</span>&gt;</span>

         	<span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"code"</span>&gt;</span><span>{{</span>source1<span>}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
         	<span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"code"</span>&gt;</span><span>{{</span>list<span>}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
            <span class="hljs-built_in">window</span>.sfDND = {
        		<span class="hljs-attr">tom</span> : [<span class="hljs-string">'1'</span>,<span class="hljs-string">'2'</span>,<span class="hljs-string">'3'</span>,<span class="hljs-string">'4'</span>,<span class="hljs-string">'5'</span>],
        		<span class="hljs-attr">juck</span> : [<span class="hljs-string">'z'</span>, <span class="hljs-string">'y'</span>],
        		<span class="hljs-attr">lucy</span> : [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>]
        	};

        	<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        		<span class="hljs-attr">data</span> : <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
        			<span class="hljs-keyword">return</span> {
        				<span class="hljs-attr">source1</span> : <span class="hljs-built_in">window</span>.sfDND.tom,
        				<span class="hljs-attr">source</span> : <span class="hljs-built_in">window</span>.sfDND.lucy,
        				<span class="hljs-attr">source2</span> : <span class="hljs-built_in">window</span>.sfDND.juck,
        				<span class="hljs-attr">list</span> : []
        			}
        		},
        		<span class="hljs-attr">methods</span>:{
        			<span class="hljs-attr">change</span> : <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">list</span>)</span>{
        				<span class="hljs-built_in">console</span>.log(list)
        			}
        		}
        	}
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</code></pre>
</div></div></demo-block>
<h3>Draggable Attributes</h3>
<table class="table"><thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">参数</th>
<th style="text-align:left">必填</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">axis</td>
<td style="text-align:left">拖动方式</td>
<td style="text-align:left">horizontal,vertical,x, y</td>
<td style="text-align:left">否</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">拖动的名称</td>
<td style="text-align:left">''</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">clone</td>
<td style="text-align:left">是否克隆元素</td>
<td style="text-align:left"></td>
<td style="text-align:left">否</td>
</tr>
</tbody>
</table>
<h3>DragAndDrop Attributes</h3>
<table class="table"><thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">必填</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">drag</td>
<td style="text-align:left">可否拉起</td>
<td style="text-align:left">否</td>
</tr>
<tr>
<td style="text-align:left">drop</td>
<td style="text-align:left">可否放置</td>
<td style="text-align:left">否</td>
</tr>
<tr>
<td style="text-align:left">from</td>
<td style="text-align:left">可接受的DND别名</td>
<td style="text-align:left">否</td>
</tr>
<tr>
<td style="text-align:left">to</td>
<td style="text-align:left">可到达的DND别名</td>
<td style="text-align:left">否</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">DND名称</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">source</td>
<td style="text-align:left">数据源</td>
<td style="text-align:left">是</td>
</tr>
</tbody>
</table>
<h3>栗子</h3>
<p><strong>组件演示地址</strong><a href="https://codepen.io/dkypooh/pen/kkRkEL">demo</a></p>
</section></template>
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
    </style><style>
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
    </style><style>
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