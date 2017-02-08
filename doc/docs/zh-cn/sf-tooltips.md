## tooltips组件


### 基础用法

:::ysfdoc sf-tooltips组件。

```html
<template>
<div style="position: relative; width: 400px; margin: 20px auto; height:200px;">
		<sf-tooltips content="<p>tooltips hello</p><p>tooltips hello</p>" placement="left up" style="position: absolute;left:-40px;top:20px;"><sf-button>左上</sf-button></sf-tooltips>
		<sf-tooltips content="<p>tooltips hello</p><p>tooltips hello</p>" placement="left" style="position: absolute;left:-40px;top:80px;"><sf-button>左中</sf-button></sf-tooltips>
		<sf-tooltips content="<p>tooltips hello</p><p>tooltips hello</p>" placement="left down" style="position: absolute;left:-40px;top:140px;"><sf-button>左下</sf-button></sf-tooltips>
		<sf-tooltips content="<p>tooltips hello</p><p>tooltips hello</p>" placement="up left" style="position: absolute;left:40px;top: 0px;"><sf-button>上左</sf-button></sf-tooltips>
		<sf-tooltips content="<p>tooltips hello</p><p>tooltips hello</p>" placement="up" style="position: absolute;left:140px;top: 0px"><sf-button>上中</sf-button></sf-tooltips>
		<sf-tooltips content="<p>tooltips hello</p><p>tooltips hello</p>" placement="up right" style="position: absolute;left:240px;top: 0px;"><sf-button>上右</sf-button></sf-tooltips>
		<sf-tooltips content="<p>tooltips hello</p><p>tooltips hello</p>" placement="right up" style="position: absolute;left:320px;top: 20px;"><sf-button>右上</sf-button></sf-tooltips>
		<sf-tooltips content="<p>tooltips hello</p><p>tooltips hello</p>" placement="right" style="position: absolute;left:320px;top: 80px;"><sf-button>右中</sf-button></sf-tooltips>
		<sf-tooltips content="<p>tooltips hello</p><p>tooltips hello</p>" placement="right down" style="position: absolute;left:320px;top:140px;"><sf-button>右下</sf-button></sf-tooltips>
		<sf-tooltips content="<p>tooltips hello</p><p>tooltips hello</p>" placement="down left" style="position: absolute;left:40px;top:160px;"><sf-button>下左</sf-button></sf-tooltips>
		<sf-tooltips content="<p>tooltips hello</p><p>tooltips hello</p>" placement="down" style="position: absolute;left:140px;top:160px;"><sf-button>下中</sf-button></sf-tooltips>
		<sf-tooltips content="<p>tooltips hello</p><p>tooltips hello</p>" placement="down right" style="position: absolute;left:240px;top:160px;"><sf-button>下右</sf-button></sf-tooltips>
</div>
</template>

<script>

</script>

```

