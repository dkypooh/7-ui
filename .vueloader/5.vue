<template><section><h2>七鱼进度条组件</h2>
<h3>Success</h3>
<demo-block class="demo-box">
                    <div class="source">    <sf-progressbar label="success" :percent="20" type="success" striped=""></sf-progressbar>
</div>
                    <div class="meta">
                      <div class="description"><p>四种状态的<code>success</code>, <code>info</code>, <code>error</code>, <code>warning</code>进度条组件</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">sf-progressbar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">:percent</span>=<span class="hljs-string">20</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">striped</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-progressbar</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>Info</h3>
<demo-block class="demo-box">
                    <div class="source">
    <sf-progressbar label="info" :percent="30" type="info"></sf-progressbar>

</div>
                    <div class="meta">
                      <div class="description"><p>四种状态的<code>success</code>, <code>info</code>, <code>error</code>, <code>warning</code>进度条组件</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-progressbar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">:percent</span>=<span class="hljs-string">30</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-progressbar</span>&gt;</span>

</code></pre>
</div></div></demo-block>
<h3>Warning</h3>
<demo-block class="demo-box">
                    <div class="source">
    <sf-progressbar label="warning" :percent="50" type="warning"></sf-progressbar>

</div>
                    <div class="meta">
                      <div class="description"><p>四种状态的<code>success</code>, <code>info</code>, <code>error</code>, <code>warning</code>进度条组件</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-progressbar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">:percent</span>=<span class="hljs-string">50</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-progressbar</span>&gt;</span>

</code></pre>
</div></div></demo-block>
<h3>Error</h3>
<demo-block class="demo-box">
                    <div class="source">
    <sf-progressbar label="error" :percent="40" type="error" striped=""></sf-progressbar>

</div>
                    <div class="meta">
                      <div class="description"><p>四种状态的<code>success</code>, <code>info</code>, <code>error</code>, <code>warning</code>进度条组件</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-progressbar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"error"</span> <span class="hljs-attr">:percent</span>=<span class="hljs-string">40</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"error"</span> <span class="hljs-attr">striped</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-progressbar</span>&gt;</span>

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
<td>label</td>
<td>文本</td>
<td>String, Number</td>
<td></td>
<td>—</td>
</tr>
<tr>
<td>percent</td>
<td>百分比</td>
<td>Number</td>
<td>0-100</td>
<td>0</td>
</tr>
<tr>
<td>type</td>
<td>类型</td>
<td>String</td>
<td>sucess, info, warning, error</td>
<td>info</td>
</tr>
<tr>
<td>striped</td>
<td>是否条纹</td>
<td>Boolean</td>
<td>true, false</td>
<td>false</td>
</tr>
</tbody>
</table>
</section></template>

