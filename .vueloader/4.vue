<template><section><h2>sf-button 按钮</h2>
<p>常用的操作按钮。</p>
<h3>基础用法</h3>
<p>基础的按钮用法。</p>
<demo-block class="demo-box">
                    <div class="source"><sf-button>默认按钮</sf-button>
<sf-button color="primary">主要按钮</sf-button>
</div>
                    <div class="meta">
                      <div class="description"><p>sf-button 组件默认提供7种主题，由<code>type</code>属性来定义，默认为<code>default</code>。</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"primary"</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>禁用状态</h3>
<p>按钮不可用状态。</p>
<demo-block class="demo-box">
                    <div class="source"><sf-button :plain="true" :disabled="true">主要按钮</sf-button>
<sf-button type="primary" :disabled="true">主要按钮</sf-button>
<sf-button type="text" :disabled="true">文字按钮</sf-button>
</div>
                    <div class="meta">
                      <div class="description"><p>你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">:plain</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>有颜色倾向</h3>
<p>不同的颜色倾向代表不同的提示</p>
<demo-block class="demo-box">
                    <div class="source"><div class="block">
  <span class="demonstration">默认显示颜色</span>
  <span class="wrapper">
    <sf-button color="success">成功按钮</sf-button>
    <sf-button color="warning">警告按钮</sf-button>
    <sf-button color="danger">危险按钮</sf-button>
    <sf-button color="info">信息按钮</sf-button>
  </span>
</div>
<div class="block">
  <span class="demonstration">hover 显示颜色</span>
  <span class="wrapper">
    <sf-button :plain="true" color="success">成功按钮</sf-button>
    <sf-button :plain="true" color="warning">警告按钮</sf-button>
    <sf-button :plain="true" color="danger">危险按钮</sf-button>
    <sf-button :plain="true" color="info">信息按钮</sf-button>
  </span>
</div>
</div>
                    <div class="meta">
                      <div class="description"><p>朴素按钮同样设置了不同的<code>type</code>属性对应的样式（可选值同上），默认为<code>info</code>。设置<code>plain</code>属性，它接受一个<code>Boolean</code>。注意，在该情况下，<code>type</code>虽然可以为<code>text</code>，但是是没有意义的，会显示为<code>text sf-button</code>的样式。</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>默认显示颜色<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"wrapper"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"success"</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"warning"</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"danger"</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"info"</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>hover 显示颜色<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"wrapper"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">:plain</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"success"</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">:plain</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"warning"</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">:plain</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"danger"</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">:plain</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"info"</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>图标按钮</h3>
<p>带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。</p>
<demo-block class="demo-box">
                    <div class="source"><sf-button icon="sf-icon-loading" :disabled="disabled" v-if="true">加载</sf-button>
<sf-button color="primary" size="large" disabled> disabled<a class="sf-icon sf-icon-date"></a></sf-button>

</div>
                    <div class="meta">
                      <div class="description"><p>设置<code>icon</code>属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用<code>i</code>标签即可，可以使用自定义图标。</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"sf-icon-loading"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"disabled"</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"true"</span>&gt;</span>加载<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span> <span class="hljs-attr">disabled</span>&gt;</span> disabled<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sf-icon sf-icon-date"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>

</code></pre>
</div></div></demo-block>
<h3>不同尺寸</h3>
<p>sf-button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
<demo-block class="demo-box">
                    <div class="source"><sf-button color="primary" size="large">大型按钮</sf-button>
<sf-button color="primary">正常按钮</sf-button>
<sf-button color="primary" size="small">小型按钮</sf-button>
<sf-button color="primary" size="mini">超小按钮</sf-button>
</div>
                    <div class="meta">
                      <div class="description"><p>额外的尺寸：<code>large</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>&gt;</span>大型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"primary"</span>&gt;</span>正常按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>小型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span>&gt;</span>超小按钮<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
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
<td>size</td>
<td>尺寸</td>
<td>string</td>
<td>large,small,mini</td>
<td>—</td>
</tr>
<tr>
<td>color</td>
<td>类型</td>
<td>string</td>
<td>primary,success,warning,danger,info,text</td>
<td>—</td>
</tr>
<tr>
<td>plain</td>
<td>是否朴素按钮</td>
<td>Boolean</td>
<td>true,false</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用</td>
<td>boolean</td>
<td>true, false</td>
<td>false</td>
</tr>
</tbody>
</table>
</section></template>

