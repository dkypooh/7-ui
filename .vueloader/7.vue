<template><section><h1>七鱼表单组件</h1>
<p>用于展示多条结构类似的数据, 打包文件自动安装了 <code>sf-table</code>, <code>sf-table-column</code> 组件</p>
<h3>基本用法</h3>
<demo-block class="demo-box">
                    <div class="source">  <template>
    <sf-table :data="tableData">
      <sf-table-column prop="name" label="姓名" width="180">
        </sf-table-column>
      <sf-table-column prop="age" label="年龄">
      </sf-table-column>
      <sf-table-column prop="sex" label="性别">
      </sf-table-column>
    </sf-table>
  </template>

  
</div>
                    <div class="meta">
                      <div class="description"><p>当<code>sf-table</code>元素中注入<code>data</code>对象数组后，在<code>sf-table-column</code>中用<code>prop</code>属性来对应对象中的键名即可填入数据，用<code>label</code>属性来定义表格的列名。可以使用<code>width</code>属性来定义列宽(不设置则自适应)。</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-table</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData"</span>
     &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-table-column</span>
          <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
          <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
          <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table-column</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-table-column</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">"age"</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">"年龄"</span>
        &gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table-column</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-table-column</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">"sex"</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">"性别"</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
      data() {
        <span class="hljs-keyword">return</span> {
          <span class="hljs-attr">tableData</span>: [{
            <span class="hljs-attr">name</span>: <span class="hljs-string">'tom'</span>,
            <span class="hljs-attr">age</span> : <span class="hljs-string">'10'</span>,
            <span class="hljs-attr">sex</span> : <span class="hljs-string">'male'</span>
          }, {
            <span class="hljs-attr">name</span>: <span class="hljs-string">'vina'</span>,
            <span class="hljs-attr">age</span>: <span class="hljs-string">'11'</span>,
            <span class="hljs-attr">sex</span>: <span class="hljs-string">'female'</span>
          }, {
            <span class="hljs-attr">name</span>: <span class="hljs-string">'lucy'</span>,
            <span class="hljs-attr">age</span>: <span class="hljs-string">'12'</span>,
            <span class="hljs-attr">sex</span>: <span class="hljs-string">'female'</span>
          }, {
            <span class="hljs-attr">name</span>: <span class="hljs-string">'joy'</span>,
            <span class="hljs-attr">age</span>: <span class="hljs-string">'13'</span>,
            <span class="hljs-attr">sex</span>: <span class="hljs-string">'male'</span>
          }]
        }
      }
    }
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>带斑马纹表格和边框表格</h3>
<demo-block class="demo-box">
                    <div class="source">  <template>
    <sf-table :data="tableData" stripe="" border="">
      <sf-table-column prop="name" label="姓名" width="180">
        </sf-table-column>
      <sf-table-column prop="age" label="年龄">
      </sf-table-column>
      <sf-table-column prop="sex" label="性别">
      </sf-table-column>
    </sf-table>
  </template>

  
</div>
                    <div class="meta">
                      <div class="description"><p>设置不同的表格表现形式</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-table</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData"</span> <span class="hljs-attr">stripe</span> <span class="hljs-attr">border</span>
     &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-table-column</span>
          <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
          <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
          <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table-column</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-table-column</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">"age"</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">"年龄"</span>
        &gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table-column</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-table-column</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">"sex"</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">"性别"</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
      data() {
        <span class="hljs-keyword">return</span> {
          <span class="hljs-attr">tableData</span>: [{
            <span class="hljs-attr">name</span>: <span class="hljs-string">'tom'</span>,
            <span class="hljs-attr">age</span> : <span class="hljs-string">'10'</span>,
            <span class="hljs-attr">sex</span> : <span class="hljs-string">'male'</span>
          }, {
            <span class="hljs-attr">name</span>: <span class="hljs-string">'vina'</span>,
            <span class="hljs-attr">age</span>: <span class="hljs-string">'11'</span>,
            <span class="hljs-attr">sex</span>: <span class="hljs-string">'female'</span>
          }, {
            <span class="hljs-attr">name</span>: <span class="hljs-string">'lucy'</span>,
            <span class="hljs-attr">age</span>: <span class="hljs-string">'12'</span>,
            <span class="hljs-attr">sex</span>: <span class="hljs-string">'female'</span>
          }, {
            <span class="hljs-attr">name</span>: <span class="hljs-string">'joy'</span>,
            <span class="hljs-attr">age</span>: <span class="hljs-string">'13'</span>,
            <span class="hljs-attr">sex</span>: <span class="hljs-string">'male'</span>
          }]
        }
      }
    }
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>样式自定义</h3>
<demo-block class="demo-box">
                    <div class="source">  <template>
    <sf-table :data="tableData" header-height="100" height="300" clazz="sf-table-custom">
      <sf-table-column prop="name" label="姓名" width="180">
        </sf-table-column>
      <sf-table-column prop="age" label="年龄">
      </sf-table-column>
      <sf-table-column prop="sex" label="性别">
      </sf-table-column>
    </sf-table>
  </template>

  
</div>
                    <div class="meta">
                      <div class="description"><p>支持自定义表格样式<code>clazz</code>, 自定义表格高度<code>height</code>, 表头高度<code>header-height</code></p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-table</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData"</span> <span class="hljs-attr">header-height</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"300"</span> <span class="hljs-attr">clazz</span>=<span class="hljs-string">"sf-table-custom"</span>
     &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-table-column</span>
          <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
          <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
          <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table-column</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-table-column</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">"age"</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">"年龄"</span>
        &gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table-column</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-table-column</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">"sex"</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">"性别"</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
      data() {
        <span class="hljs-keyword">return</span> {
          <span class="hljs-attr">tableData</span>: [{
                <span class="hljs-attr">name</span>: <span class="hljs-string">'tom'</span>,
                <span class="hljs-attr">age</span> : <span class="hljs-string">'10'</span>,
                <span class="hljs-attr">sex</span> : <span class="hljs-string">'male'</span>
            }, {
                <span class="hljs-attr">name</span>: <span class="hljs-string">'vina'</span>,
                <span class="hljs-attr">age</span>: <span class="hljs-string">'11'</span>,
                <span class="hljs-attr">sex</span>: <span class="hljs-string">'female'</span>
            }, {
                <span class="hljs-attr">name</span>: <span class="hljs-string">'lucy'</span>,
                <span class="hljs-attr">age</span>: <span class="hljs-string">'12'</span>,
                <span class="hljs-attr">sex</span>: <span class="hljs-string">'female'</span>
            }, {
                <span class="hljs-attr">name</span>: <span class="hljs-string">'joy'</span>,
                <span class="hljs-attr">age</span>: <span class="hljs-string">'13'</span>,
                <span class="hljs-attr">sex</span>: <span class="hljs-string">'male'</span>
            }, {
                <span class="hljs-attr">name</span>: <span class="hljs-string">'joy'</span>,
                <span class="hljs-attr">age</span>: <span class="hljs-string">'13'</span>,
                <span class="hljs-attr">sex</span>: <span class="hljs-string">'male'</span>
            }, {
                <span class="hljs-attr">name</span>: <span class="hljs-string">'joy'</span>,
                <span class="hljs-attr">age</span>: <span class="hljs-string">'13'</span>,
                <span class="hljs-attr">sex</span>: <span class="hljs-string">'male'</span>
            }]
        }
      }
    }
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div></div></demo-block>
<h3>表格排序功能及自定义事件</h3>
<demo-block class="demo-box">
                    <div class="source">  <template>
    <sf-table :data="tableData" @row-click="rowClick">
      <sf-table-column prop="name" label="姓名" width="180">
        </sf-table-column>
      <sf-table-column prop="age" label="年龄" sortable="" :sort-method="sortMethod" :formatter="formatter">
      </sf-table-column>
      <sf-table-column prop="sex" label="性别">
      </sf-table-column>
    </sf-table>
  </template>

  
</div>
                    <div class="meta">
                      <div class="description"><p>表格支持排序功能<code>sortable</code>, 先支持行选中的自定义事件<code>row-click</code>, 列表格式化 <code>fomatter</code></p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">sf-table</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData"</span> @<span class="hljs-attr">row-click</span>=<span class="hljs-string">"rowClick"</span>
     &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-table-column</span>
          <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
          <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
          <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table-column</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-table-column</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">"age"</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">"年龄"</span>
        <span class="hljs-attr">sortable</span>
        <span class="hljs-attr">:sort-method</span>=<span class="hljs-string">"sortMethod"</span>
        <span class="hljs-attr">:formatter</span>=<span class="hljs-string">"formatter"</span>
        &gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table-column</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-table-column</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">"sex"</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">"性别"</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">sf-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
      data() {
        <span class="hljs-keyword">return</span> {
          <span class="hljs-attr">tableData</span>: [{
            <span class="hljs-attr">name</span>: <span class="hljs-string">'tom'</span>,
            <span class="hljs-attr">age</span> : <span class="hljs-string">'10'</span>,
            <span class="hljs-attr">sex</span> : <span class="hljs-string">'male'</span>
          }, {
            <span class="hljs-attr">name</span>: <span class="hljs-string">'vina'</span>,
            <span class="hljs-attr">age</span>: <span class="hljs-string">'11'</span>,
            <span class="hljs-attr">sex</span>: <span class="hljs-string">'female'</span>
          }, {
            <span class="hljs-attr">name</span>: <span class="hljs-string">'lucy'</span>,
            <span class="hljs-attr">age</span>: <span class="hljs-string">'12'</span>,
            <span class="hljs-attr">sex</span>: <span class="hljs-string">'female'</span>
          }, {
            <span class="hljs-attr">name</span>: <span class="hljs-string">'joy'</span>,
            <span class="hljs-attr">age</span>: <span class="hljs-string">'13'</span>,
            <span class="hljs-attr">sex</span>: <span class="hljs-string">'male'</span>
          }]
        }
      },
      <span class="hljs-attr">methods</span> : {
            <span class="hljs-attr">sortMethod</span> : <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a, b</span>)</span>{
                <span class="hljs-keyword">return</span> a - b;
            },
            <span class="hljs-attr">formatter</span> : <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">row, column</span>)</span>{
                <span class="hljs-keyword">return</span> row.age + <span class="hljs-string">'year'</span>;
            },
            <span class="hljs-attr">rowClick</span> : <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">row, column, event</span>)</span>{
                <span class="hljs-keyword">return</span> row
            }

        }
    }
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</div></div></demo-block>
</section></template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            name: 'tom',
            age : '10',
            sex : 'male'
          }, {
            name: 'vina',
            age: '11',
            sex: 'female'
          }, {
            name: 'lucy',
            age: '12',
            sex: 'female'
          }, {
            name: 'joy',
            age: '13',
            sex: 'male'
          }]
        }
      }
    }
  </script><script>
    export default {
      data() {
        return {
          tableData: [{
            name: 'tom',
            age : '10',
            sex : 'male'
          }, {
            name: 'vina',
            age: '11',
            sex: 'female'
          }, {
            name: 'lucy',
            age: '12',
            sex: 'female'
          }, {
            name: 'joy',
            age: '13',
            sex: 'male'
          }]
        }
      }
    }
  </script><script>
    export default {
      data() {
        return {
          tableData: [{
                name: 'tom',
                age : '10',
                sex : 'male'
            }, {
                name: 'vina',
                age: '11',
                sex: 'female'
            }, {
                name: 'lucy',
                age: '12',
                sex: 'female'
            }, {
                name: 'joy',
                age: '13',
                sex: 'male'
            }, {
                name: 'joy',
                age: '13',
                sex: 'male'
            }, {
                name: 'joy',
                age: '13',
                sex: 'male'
            }]
        }
      }
    }
  </script><script>
    export default {
      data() {
        return {
          tableData: [{
            name: 'tom',
            age : '10',
            sex : 'male'
          }, {
            name: 'vina',
            age: '11',
            sex: 'female'
          }, {
            name: 'lucy',
            age: '12',
            sex: 'female'
          }, {
            name: 'joy',
            age: '13',
            sex: 'male'
          }]
        }
      },
      methods : {
            sortMethod : function(a, b){
                return a - b;
            },
            formatter : function(row, column){
                return row.age + 'year';
            },
            rowClick : function(row, column, event){
                return row
            }

        }
    }
  </script>