<template><section><h2>七鱼 JavaScript 代码规范</h2>
<h3>配置参考</h3>
<demo-block class="demo-box">
                    <div class="source">    <template>
        <img src="./eslint.png" style="width: 100%; padding: 10px;box-sizing: border-box;">
    </template>

    
</div>
                    <div class="meta">
                      <div class="description"><p>七鱼代码规范配置文件, 此文件可以放在工程根目录, <a href="http://eslint.cn/docs/user-guide/configuring#configuration-cascading-and-hierarchy">配置原理</a></p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./eslint.png"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%; padding: 10px;box-sizing: border-box;"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
        <span class="hljs-built_in">module</span>.exports = {
            <span class="hljs-string">"parserOptions"</span>: {
                <span class="hljs-string">"ecmaVersion"</span>: <span class="hljs-number">5</span>,
                <span class="hljs-string">"ecmaFeatures"</span>: {
                    <span class="hljs-string">"jsx"</span>: <span class="hljs-literal">true</span>
                }
            },
            <span class="hljs-string">"extends"</span>: <span class="hljs-string">"eslint:recommended"</span>,
            <span class="hljs-string">"env"</span> : {
                <span class="hljs-string">"browser"</span> : <span class="hljs-literal">true</span>,
                 <span class="hljs-string">"node"</span> : <span class="hljs-literal">true</span>
            },
           <span class="hljs-string">"rules"</span>: {
               <span class="hljs-comment">// 强制使用一致的缩进</span>
               <span class="hljs-string">"indent"</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">4</span>],
               <span class="hljs-comment">// 强制使用一致的换行风格</span>
               <span class="hljs-string">"linebreak-style"</span>: [<span class="hljs-number">0</span>, <span class="hljs-string">"unix"</span>],
               <span class="hljs-comment">// 强制使用一致的反勾号、双引号或单引号</span>
               <span class="hljs-string">"quotes"</span>: [<span class="hljs-number">0</span>, <span class="hljs-string">"double"</span>],
               <span class="hljs-comment">// 要求或禁止使用分号而不是 ASI</span>
               <span class="hljs-string">"semi"</span>: [<span class="hljs-string">"error"</span>, <span class="hljs-string">"always"</span>],
               <span class="hljs-comment">// 禁止条件表达式中出现赋值操作符</span>
               <span class="hljs-string">"no-cond-assign"</span>: [<span class="hljs-string">"warn"</span>, <span class="hljs-string">"always"</span>],
               <span class="hljs-comment">// 驼峰形式</span>
               <span class="hljs-string">"camelcase"</span>: [<span class="hljs-string">"warn"</span>],
               <span class="hljs-comment">// 规则强制在对象和数组字面量中使用一致的拖尾逗号。</span>
               <span class="hljs-string">"comma-dangle"</span>: [<span class="hljs-string">"error"</span>],

               <span class="hljs-comment">// 重写默认配置</span>
               <span class="hljs-string">"no-console"</span>: <span class="hljs-string">"off"</span>,
               <span class="hljs-string">"no-debugger"</span> : <span class="hljs-string">"off"</span>,
               <span class="hljs-string">"no-delete-var"</span> : <span class="hljs-string">"off"</span>

           },
           <span class="hljs-string">"globals"</span>: {
               <span class="hljs-string">"NEJ"</span> : <span class="hljs-literal">false</span>
           }
        }

    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>参考</h3>
<ul>
<li><a href="http://eslint.cn/docs">Eslint 中文文档</a></li>
<li><a href="http://airbnb.io/javascript/">Airbnb JavaScript Style Guild</a></li>
<li><a href="https://github.com/feross/standard/blob/master/RULES.md">JavaScript Standard Style</a></li>
</ul>
</section></template>

<script>
        module.exports = {
            "parserOptions": {
                "ecmaVersion": 5,
                "ecmaFeatures": {
                    "jsx": true
                }
            },
            "extends": "eslint:recommended",
            "env" : {
                "browser" : true,
                 "node" : true
            },
           "rules": {
               // 强制使用一致的缩进
               "indent": [0, 4],
               // 强制使用一致的换行风格
               "linebreak-style": [0, "unix"],
               // 强制使用一致的反勾号、双引号或单引号
               "quotes": [0, "double"],
               // 要求或禁止使用分号而不是 ASI
               "semi": ["error", "always"],
               // 禁止条件表达式中出现赋值操作符
               "no-cond-assign": ["warn", "always"],
               // 驼峰形式
               "camelcase": ["warn"],
               // 规则强制在对象和数组字面量中使用一致的拖尾逗号。
               "comma-dangle": ["error"],

               // 重写默认配置
               "no-console": "off",
               "no-debugger" : "off",
               "no-delete-var" : "off"

           },
           "globals": {
               "NEJ" : false
           }
        }

    </script>