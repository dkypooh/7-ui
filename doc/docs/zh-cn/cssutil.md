## 七鱼CSS函数集合
<style lang="scss">
.sf-cssutil--clearfix{
    li{
      height : 100px;
      width  : 100px;
      line-height: 100px;
      text-align: center;
      color:white;
      background-color : #20a0ff;
      float:left;
      opacity: 1;
    }
    li:nth-child(2n){
      background-color : #9e9e9e;
    }
    li:hover{
      opacity: 0.6;
      transition: all 0.3s linear;
      cursor:  pointer;
    }
}
.sf-cssutil--aspect-ratio{
    background-color: #dac582;
    text-align: center;
    font-size: 2em;
    color: #9E9E9E;
    &:hover{
      color : white;
      transition:all 0.3s linear;
      cursor:pointer;
    }
}

</style>

### 开源参考
7-ui的css函数库使用了 [postcss-utilities](https://ismamz.github.io/postcss-utilities/) 第三方开源PostCSS函数库。
具体函数请参考 [@util docs](https://ismamz.github.io/postcss-utilities/docs)

### clearfix

:::ysfdoc

```html
  <template>
      <ul class="sf-cssutil--clearfix">
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
      </ul>
  </template>
  <style lang="scss">
    .sf-cssutil--clearfix{
      @util clearfix;
    }
  </style>
```
:::

### circle

:::ysfdoc

```html
  <template>

      <div class="sf-cssutil--circle"></div>
  </template>
  <style>
    .sf-cssutil--circle{
        @util circle(200px, #268BD2);
    }
  </style>
```
:::


### Aspect Ratio

:::ysfdoc

```html
  <template>
    <div class="sf-cssutil--aspect-parent">
      <div class="sf-cssutil--aspect-ratio">
          16 : 9
      </div>
    </div>

  </template>
  <style lang="scss">
  .sf-cssutil--aspect-parent{
    margin: 0 auto;
    max-width : 300px;
    line-height: 168px;
  }
  .sf-cssutil--aspect-ratio{
      @util aspect-ratio(16:9);
  }
  </style>
```
:::

### Word Wrap 换行

:::ysfdoc

```html
  <template>
    <div class="sf-cssutil--break-word">
        超长超长超长超长超长超长超长超长超长超长超长超长
    </div>

  </template>
  <style lang="scss">

  .sf-cssutil--break-word{
      width : 100px;
      @util word-wrap(break-word);
  }
  </style>
```
:::

### Truncate 截断

:::ysfdoc 支持`single line` 和 `multiline` 截断

```html
  <template>
    <div class="sf-cssutil--single-line">
        单行单行单行单行单行单行单行单行单行单行单行单行单行单行单行单行
    </div>
    <div class="sf-cssutil--multiline">
        多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行多行
    </div>

  </template>
  <style lang="scss">

  .sf-cssutil--single-line{
      width : 100px;
      @util truncate;

  }

  .sf-cssutil--multiline{
    width : 100px;
    @util truncate(3, 1.5);
  }
  </style>
```
:::
### CSS 函数列表

| 函数      | 说明    | 可选值       | 默认值   |
|---------- |-------- |-------------  |-------- |
| clearfix      | 清浮动   |   YES   |      |
| circle([radio], [color])     | 圆圈   |   YES   |   (100px, #000)    |
| aspect-ratio([ratio])      | 区域   |   YES   |    16:9     |
| word-wrap([wrap])  | wrap   |   normal； break-word； initial； inherit   |    break-word     |
|  truncate | 单行截断   |  YES   |        |
|  truncate([lines], [line-height]) | 多行截断   |  YES   |  int:3, line-height:1     |
