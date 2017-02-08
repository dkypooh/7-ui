<template><section><h2>Toast 组件</h2>
<h3>Toast Error</h3>
<demo-block class="demo-box">
                    <div class="source">    <template>
        <sf-button color="danger" @click.native="onClick('error','error')">Error</sf-button>
    </template>
    
</div>
                    <div class="meta">
                      
                      <div class="highlight"><pre><code class="hljs language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"danger"</span> @<span class="hljs-attr">click.native</span>=<span class="hljs-string">"onClick('error','error')"</span>&gt;</span>Error<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
        <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
            <span class="hljs-attr">methods</span> : {
                <span class="hljs-attr">onClick</span> : <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">type, msg</span>)</span>{
                    <span class="hljs-built_in">window</span>.sfToast[type](msg)
                }
            }
        }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>Toast Info</h3>
<demo-block class="demo-box">
                    <div class="source">    <template>
        <sf-button color="info" @click.native="onClick('info','info')">Info</sf-button>
    </template>
    
</div>
                    <div class="meta">
                      
                      <div class="highlight"><pre><code class="hljs language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"info"</span> @<span class="hljs-attr">click.native</span>=<span class="hljs-string">"onClick('info','info')"</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
        <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
            <span class="hljs-attr">methods</span> : {
                <span class="hljs-attr">onClick</span> : <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">type, msg</span>)</span>{
                    <span class="hljs-built_in">window</span>.sfToast[type](msg)
                }
            }
        }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>Toast Warning</h3>
<demo-block class="demo-box">
                    <div class="source">    <template>
        <sf-button color="warning" @click.native="onClick('warning','warning')">Warning</sf-button>
    </template>
    
</div>
                    <div class="meta">
                      
                      <div class="highlight"><pre><code class="hljs language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"warning"</span> @<span class="hljs-attr">click.native</span>=<span class="hljs-string">"onClick('warning','warning')"</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
        <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
            <span class="hljs-attr">methods</span> : {
                <span class="hljs-attr">onClick</span> : <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">type, msg</span>)</span>{
                    <span class="hljs-built_in">window</span>.sfToast[type](msg)
                }
            }
        }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>Toast Success</h3>
<demo-block class="demo-box">
                    <div class="source">    <template>
        <sf-button color="primary" @click.native="onClick('success','success')">Success</sf-button>
    </template>
    
</div>
                    <div class="meta">
                      
                      <div class="highlight"><pre><code class="hljs language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"primary"</span> @<span class="hljs-attr">click.native</span>=<span class="hljs-string">"onClick('success','success')"</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
        <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
            <span class="hljs-attr">methods</span> : {
                <span class="hljs-attr">onClick</span> : <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">type, msg</span>)</span>{
                    <span class="hljs-built_in">window</span>.sfToast[type](msg)
                }
            }
        }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div></div></demo-block>
</section></template>

<script>
        export default {
            methods : {
                onClick : function(type, msg){
                    window.sfToast[type](msg)
                }
            }
        }
    </script><script>
        export default {
            methods : {
                onClick : function(type, msg){
                    window.sfToast[type](msg)
                }
            }
        }
    </script><script>
        export default {
            methods : {
                onClick : function(type, msg){
                    window.sfToast[type](msg)
                }
            }
        }
    </script><script>
        export default {
            methods : {
                onClick : function(type, msg){
                    window.sfToast[type](msg)
                }
            }
        }
    </script>