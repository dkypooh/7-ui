<template><section><h1>七鱼form组件</h1>
<h3>基础用法</h3>
<demo-block class="demo-box">
                    <div class="source"><sf-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
      <sf-form-item label="Title" prop="name">
        <sf-input v-model="ruleForm.name"></sf-input>
      </sf-form-item>
      <sf-form-item label="Checkbox" prop="city">
        <sf-checkbox-group v-model="ruleForm.city">
          <sf-checkbox v-for="item in cities" :label="item.key">{{item.value}}</sf-checkbox>
        </sf-checkbox-group>
      </sf-form-item>
      <sf-form-item label="Radio" prop="radio">
        <sf-radio-group v-model="ruleForm.radio">
          <sf-radio label="1">Radio1</sf-radio>
          <sf-radio label="2">Radio2</sf-radio>
        </sf-radio-group>
      </sf-form-item>
      <sf-form-item label="Textarea" prop="textarea">
        <sf-input type="textarea" :autosize="true" v-model="ruleForm.textarea"></sf-input>
      </sf-form-item>
      <sf-form-item label="Switch" prop="switch">
        <sf-switch v-model="ruleForm.switch"></sf-switch>
      </sf-form-item>
      <sf-form-item>
        <sf-button @click.native="submitForm('ruleForm')">立即创建</sf-button>
        <sf-button @click.native="resetForm('ruleForm')">重置</sf-button>
      </sf-form-item>
    </sf-form>
    
</div>
                    <div class="meta">
                      <div class="description"><p>sf-form组件 包括  <em>input</em> <em>checkbox</em> <em>radio</em>  <em>switch</em> <em>form验证</em></p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">sf-form</span> <span class="hljs-attr">:model</span>=<span class="hljs-string">"ruleForm"</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">"rules"</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"ruleForm"</span> <span class="hljs-attr">label-width</span>=<span class="hljs-string">"100px"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ruleForm"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Title"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.name"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-input</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Checkbox"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"city"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.city"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">sf-checkbox</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.key"</span>&gt;</span><span>{{</span>item.value<span>}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">sf-checkbox-group</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Radio"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"radio"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.radio"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">sf-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"1"</span>&gt;</span>Radio1<span class="hljs-tag">&lt;/<span class="hljs-name">sf-radio</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">sf-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"2"</span>&gt;</span>Radio2<span class="hljs-tag">&lt;/<span class="hljs-name">sf-radio</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">sf-radio-group</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Textarea"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"textarea"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"textarea"</span> <span class="hljs-attr">:autosize</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.textarea"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-input</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Switch"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"switch"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.switch"</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-switch</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-form-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">sf-form-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> @<span class="hljs-attr">click.native</span>=<span class="hljs-string">"submitForm('ruleForm')"</span>&gt;</span>立即创建<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">sf-button</span> @<span class="hljs-attr">click.native</span>=<span class="hljs-string">"resetForm('ruleForm')"</span>&gt;</span>重置<span class="hljs-tag">&lt;/<span class="hljs-name">sf-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">sf-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">sf-form</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'app'</span>,
    data(){
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">cities</span>: [
          {<span class="hljs-attr">key</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">"北京"</span>},
          {<span class="hljs-attr">key</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">"上海"</span>},
          {<span class="hljs-attr">key</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">"天津"</span>},
          {<span class="hljs-attr">key</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">"杭州"</span>},
        ],
        <span class="hljs-attr">ruleForm</span>: {
          <span class="hljs-attr">name</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">city</span>: [],
          <span class="hljs-attr">radio</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">textarea</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">switch</span>:<span class="hljs-literal">true</span>
        },
        <span class="hljs-attr">rules</span>: {
          <span class="hljs-attr">name</span>: [
            {<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'请输入title'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">'blur'</span>},
            {<span class="hljs-attr">min</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">max</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'长度在 3 到 5 个字符'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">'blur'</span>}
          ],
          <span class="hljs-attr">city</span>: [
            {<span class="hljs-attr">type</span>: <span class="hljs-string">'array'</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'请选择city'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">'change'</span>}
          ],
          <span class="hljs-attr">radio</span>: [
            {<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'请选择radio'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">'change'</span>}
          ],
          <span class="hljs-attr">textarea</span>: [
            {<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'请填写textarea'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">'blur'</span>}
          ]
        }
      };
    },
    <span class="hljs-attr">methods</span>: {
      submitForm(formName) {
        <span class="hljs-keyword">this</span>.$refs[formName].validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
          <span class="hljs-keyword">if</span> (valid) {
            <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.ruleForm);
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'error'</span>);
          }
        });
      },
      resetForm(formName) {
        <span class="hljs-keyword">this</span>.$refs[formName].resetFields();
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<p>#Input组件</p>
<p>###基础用法</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">sf-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sf-input</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">input</span>: <span class="hljs-string">''</span>
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<p>###禁用状态</p>
<demo-block class="demo-box">
                    <div class="source"><sf-input placeholder="请输入内容" v-model="input1" :disabled="true">
</sf-input>


</div>
                    <div class="meta">
                      <div class="description"><p>通过<em>disabled</em>熟悉可以指定是否禁用</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">sf-input</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input1"</span>
  <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">sf-input</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">input1</span>: <span class="hljs-string">''</span>
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<p>###文本域</p>
<demo-block class="demo-box">
                    <div class="source"><sf-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
</sf-input>


</div>
                    <div class="meta">
                      <div class="description"><p>通过将type切换为textarea</p>
</div>
                      <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">sf-input</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">"textarea"</span>
  <span class="hljs-attr">:rows</span>=<span class="hljs-string">"2"</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"textarea"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">sf-input</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">textarea</span>: <span class="hljs-string">''</span>
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<demo-block class="demo-box">
                    <div class="source"></div>
                    <div class="meta">
                      
                      <div class="highlight"><h3>Input Attributes</h3>
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
<td>type</td>
<td>类型</td>
<td>string</td>
<td>text/textarea</td>
<td>text</td>
</tr>
<tr>
<td>value</td>
<td>绑定值</td>
<td>string, number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>maxlength</td>
<td>最大输入长度</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>minlength</td>
<td>最小输入长度</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框占位文本</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>输入框尺寸，只在 <code>type!=&quot;textarea&quot;</code> 时有效</td>
<td>string</td>
<td>large, small, mini</td>
<td>—</td>
</tr>
<tr>
<td>rows</td>
<td>输入框行数，只对 <code>type=&quot;textarea&quot;</code> 有效</td>
<td>number</td>
<td>—</td>
<td>2</td>
</tr>
<tr>
<td>autosize</td>
<td>自适应内容高度，只对 <code>type=&quot;textarea&quot;</code> 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }</td>
<td>boolean/object</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>auto-complete</td>
<td>原生属性，自动补全</td>
<td>string</td>
<td>on, off</td>
<td>off</td>
</tr>
<tr>
<td>name</td>
<td>原生属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max</td>
<td>原生属性，设置最大值</td>
<td>*</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>min</td>
<td>原生属性，设置最小值</td>
<td>*</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>resize</td>
<td>控制是否能被用户缩放</td>
<td>string</td>
<td>none, both, horizontal, vertical</td>
<td>—</td>
</tr>
<tr>
<td>autofocus</td>
<td>原生属性，自动获取焦点</td>
<td>boolean</td>
<td>true, false</td>
<td>false</td>
</tr>
<tr>
<td>form</td>
<td>原生属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3>Input Events</h3>
<table class="table"><thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>点击 Input 内的图标时触发</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>blur</td>
<td>在 Input 失去焦点时触发</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>在 Input 获得焦点时触发</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>change</td>
<td>在 Input 值改变时触发</td>
<td>(value: string | number)</td>
</tr>
</tbody>
</table>
</div></div></demo-block>
</div></div></demo-block>
</div></div></demo-block>
</div></div></demo-block>
</section></template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        cities: [
          {key: 1, value: "北京"},
          {key: 2, value: "上海"},
          {key: 3, value: "天津"},
          {key: 4, value: "杭州"},
        ],
        ruleForm: {
          name: '',
          city: [],
          radio: '',
          textarea: '',
          switch:true
        },
        rules: {
          name: [
            {required: true, message: '请输入title', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          city: [
            {type: 'array', required: true, message: '请选择city', trigger: 'change'}
          ],
          radio: [
            {required: true, message: '请选择radio', trigger: 'change'}
          ],
          textarea: [
            {required: true, message: '请填写textarea', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
          } else {
            console.log('error');
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script><script>
export default {
  data() {
    return {
      input1: ''
    }
  }
}
</script><script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>