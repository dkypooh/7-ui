<template><section><h2>sf-colorpicker 组件</h2>
<h3>HEX</h3>
<demo-block class="demo-box">
                    <div class="source">    
    <template>
     <div class="pg-colorpicker">
        <sf-colorpicker :hex="hexStr" :on-change="change"></sf-colorpicker>
        <p>HEX</p>
        <p>{{hexStr}}</p>
    </div>
    </template>

    
</div>
                    <div class="meta">
                      
                      <div class="highlight"><pre><code class="hljs language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
        <span class="hljs-selector-class">.pg-colorpicker</span>{
            <span class="hljs-attribute">text-align</span>: center;

        }
        <span class="hljs-selector-class">.pg-colorpicker</span> <span class="hljs-selector-class">.sf-colorpicker</span>{
            <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
        }

    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"pg-colorpicker"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-colorpicker</span> <span class="hljs-attr">:hex</span>=<span class="hljs-string">"hexStr"</span> <span class="hljs-attr">:on-change</span>=<span class="hljs-string">"change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-colorpicker</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>HEX<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span>{{</span>hexStr<span>}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                <span class="hljs-attr">hexStr</span> : <span class="hljs-string">'#E1E1E1'</span>,
                <span class="hljs-attr">rgbStr</span> : <span class="hljs-string">'rgba(255, 0, 0, .5)'</span>,
                <span class="hljs-attr">rgb</span> : {}
            }
        },
        <span class="hljs-attr">methods</span> : {
            change(color){
                <span class="hljs-keyword">this</span>.rgbStr = color.toRgbString().toUpperCase();
                <span class="hljs-keyword">this</span>.rgb = color.toRgb();
                <span class="hljs-keyword">this</span>.hexStr = color.toHexString().toUpperCase();
            }
        }
    }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>RGB</h3>
<demo-block class="demo-box">
                    <div class="source">    <template>
     <div class="pg-colorpicker">
        <sf-colorpicker :hex="rgbStr" :on-change="change"></sf-colorpicker>
        <p>RGB</p>
        <p>{{rgbStr}}</p>
        <p>{{rgb}}</p>
    </div>
    </template>

    
</div>
                    <div class="meta">
                      <div class="description"><p>参考文献 <a href="http://csscoke.com/2015/01/01/rgb-hsl-hex/">Rgb, Hex</a></p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"pg-colorpicker"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-colorpicker</span> <span class="hljs-attr">:hex</span>=<span class="hljs-string">"rgbStr"</span> <span class="hljs-attr">:on-change</span>=<span class="hljs-string">"change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-colorpicker</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>RGB<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span>{{</span>rgbStr<span>}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span>{{</span>rgb<span>}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                <span class="hljs-attr">rgbStr</span> : <span class="hljs-string">'rgba(255, 0, 0, .5)'</span>,
                <span class="hljs-attr">hexStr</span> : <span class="hljs-string">'#E1E1E1'</span>,
                <span class="hljs-attr">rgb</span> : {}
            }
        },
        <span class="hljs-attr">methods</span> : {
            change(color){
                <span class="hljs-keyword">this</span>.rgbStr = color.toRgbString().toUpperCase();
                <span class="hljs-keyword">this</span>.rgb = color.toRgb();
                <span class="hljs-keyword">this</span>.hexStr = color.toHexString().toUpperCase();
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
<td>hex</td>
<td>颜色值</td>
<td>String</td>
<td>rgba,hex</td>
<td>#FFFFFF</td>
</tr>
<tr>
<td>on-change</td>
<td>变更函数</td>
<td>Function</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
</section></template>
<style>
        .pg-colorpicker{
            text-align: center;

        }
        .pg-colorpicker .sf-colorpicker{
            margin: 0 auto;
        }

    </style>
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
    </script><script>
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