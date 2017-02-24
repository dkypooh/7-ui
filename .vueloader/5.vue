<template><section><h2>七鱼 CSS 代码规范</h2>
<p>此规范结合BEM来使用POSTCSS, 让编写CSS样式更容易、更有效。</p>
<p>BEM是由@Yandex提出的一种类名命名方式。SUIT是基于BEM上的另一种类名命名方式，只不过@Nicholas Gallagher在BEM的基础上做了一些调整。BEM能做的事情，SUIT都可以做，但很多用户觉得SUIT是BEM的一种改进。使用这些方法确实有助于产生更好的，理有结构化的CSS。然而，需要的注意的是，手动输入结构所需的类名会让你感到厌烦，并且跟踪这些类以及如何推动，更会让你感到头痛。</p>
<demo-block class="demo-box">
                    <div class="source"><template>
    <img src="./bem.png" style="width: 100%; padding: 10px;box-sizing: border-box;">
</template>


</div>
                    <div class="meta">
                      <div class="description"><p>七鱼采用<code>BEM</code>命名规范, <a href="http://getbem.com/introduction/">参考文档</a></p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./bem.png"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%; padding: 10px;box-sizing: border-box;"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-built_in">module</span>.exports = {
        <span class="hljs-comment">// bem规则</span>
        bem : {
            <span class="hljs-attr">separators</span> : {
                <span class="hljs-attr">descendent</span> : <span class="hljs-string">'__'</span>,
                <span class="hljs-attr">modifier</span> : <span class="hljs-string">'--'</span>
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>参考文档</h3>
<ul>
<li><a href="http://getbem.com/introduction/">BEM规范文档</a></li>
<li><a href="https://www.w3cplus.com/PostCSS/using-postcss-with-bem-and-suit-methodologies.html">BEM配置</a></li>
</ul>
</section></template>

<script>
    module.exports = {
        // bem规则
        bem : {
            separators : {
                descendent : '__',
                modifier : '--'
            }
        }
    }
</script>