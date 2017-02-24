<template><section><h2>七鱼分页器组件</h2>
<h3>基础功能</h3>
<demo-block class="demo-box">
                    <div class="source">    
    <template>
        <sf-pagination :limit="limit" :total="total" :current="current" :unit="unit"></sf-pagination>
    </template>

    
</div>
                    <div class="meta">
                      
                      <div class="highlight"><pre><code class="hljs language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
        <span class="hljs-selector-class">.sf-pagination</span> {<span class="hljs-attribute">text-align</span>: center}
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-pagination</span> <span class="hljs-attr">:limit</span>=<span class="hljs-string">"limit"</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">"total"</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">"current"</span> <span class="hljs-attr">:unit</span>=<span class="hljs-string">"unit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-pagination</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data (){
            <span class="hljs-keyword">return</span> {
             <span class="hljs-attr">limit</span> : <span class="hljs-number">2</span>,
            <span class="hljs-attr">total</span> : <span class="hljs-number">20</span>,
            <span class="hljs-attr">current</span> : <span class="hljs-number">2</span>,
            <span class="hljs-attr">unit</span>: <span class="hljs-number">5</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>Attributes</h3>
<table class="table"><thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>limit</td>
<td>分页限制</td>
<td>String, Number</td>
<td></td>
<td>—</td>
</tr>
<tr>
<td>total</td>
<td>总数</td>
<td>String, Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>current</td>
<td>当前页</td>
<td>String, Number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>unit</td>
<td>单元数</td>
<td>String, Number</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</section></template>
<style>
        .sf-pagination {text-align: center}
    </style>
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