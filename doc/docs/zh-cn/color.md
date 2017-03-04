<style lang="scss">
  .g-row--color{
    margin-top : 40px;
    margin-bottom : 40px;
    color : #5e6d82;
  }
  .bg-light-blue {
    display:inline-block;
    .value{
      height : 50px;
      line-height: 50px;
      text-align : center;
    }
    .color{
      height : 100px;
      width : 100px;
      border-radius : 100%;
      background-color : #5092E1;
    }
  }
  .bg-blue{
    .color{
      background-color : #3176CB;
    }
  }

  .g-row--primary-color{
    @util clearfix;
    list-style-type:none;
    padding:0px;
    li{
      height:100px;
      width : 100px;
      line-height:100px;
      text-align:center;
      float : left;
    }
    li:hover{
      color : white;
      transition : color 0.3s linear;
      cursor : pointer;
    }
    li:nth-child(1){
      background-color : #dcedfa;
    }
    li:nth-child(2){
      background-color : #94bff0;
    }
    li:nth-child(3){
      background-color : #5493de;
    }
    li:nth-child(4){
      background-color : #3678c8;
    }
  }
  .g-col--font-color{
    .font_1{
      .color{
        background-color : #222222;
      }
    }
    .font_2{
      .color{
        background-color : #666666;
      }
    }
    .font_3{
      .color{
        background-color : #999999;
      }
    }
    .font_4{
      .color{
        background-color : #CCCCCC;
      }
    }
  }
  .g-row--font-color{
    li:nth-child(1){
      background-color : #555555;
    }
    li:nth-child(2){
      background-color : #777777;
    }
    li:nth-child(3){
      background-color : #999999;
    }
    li:nth-child(4){
      background-color : #aaaaaa;
    }
    li:nth-child(5){
      background-color : #cccccc;
    }
    li:nth-child(6){
      background-color : #dddddd;
    }
    li:nth-child(7){
      background-color : #ececec;
    }
  }

  .g-col--font-color{
    .second_1{
      .color{
        background-color : #64C04D;
      }
    }
    .second_2{
      .color{
        background-color : #46BE8A;
      }
    }
    .second_3{
      .color{
        background-color : #FFAA35;
      }
    }
    .second_4{
      .color{
        background-color : #F96868;
      }
    }
    .second_5{
      .color {
        background-color : #926DDE;
      }
    }

  }


  .demo-typo-size {
    .h1 {
      font-size: 20px;
      text-align:left;
    }
    .h2 {
      font-size: 18px;
    }
    .h3 {
      font-size: 16px;
    }
    .text-regular {
      font-size: 14px;
    }
    .text-small {
      font-size: 12px;
    }
    .color-dark-light {
      color: #99a9bf;
    }
  }

  .demo-typo-box {
    height: 200px;
    width: 200px;
    position: relative;
    border: 1px solid #eaeefb;
    font-size: 40px;
    color: #1f2d3d;
    text-align: center;
    line-height: 162px;
    padding-bottom: 36px;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 17px;
    border-radius: 4px;

    .name {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-top: 1px solid #eaeefb;
      font-size: 14px;
      color: #8492a6;
      line-height: 35px;
      text-align: left;
      text-indent: 10px;
      font-family: 'Helvetica Neue';
    }

  }


  .typo-Microsoft {
    font-family: 'Microsoft YaHei';
  }

  .typo-Arial {
    font-family: 'Arial';
  }


</style>
## Color 色彩
根据七鱼设计规范，制定一套特定的色彩规范

### 主色

<div class="g-row g-row--color">
  <div class="g-col-6 g-col--color">
    <div class="bg-light-blue"><div class="color"></div><div class="value">#5092E1</div></div>
  </div>
  <div class="g-col-6 g-col--color">
    <div class="bg-light-blue bg-blue"><div class="color"></div><div class="value">#3176CB</div></div>
  </div>
</div>
<ul class="g-row g-row--color g-row--primary-color">
  <li>#DCEDFA</li><li>#94BFF0</li><li>#5493DE</li><li>#3678C8</li>
</ul>

### 字体颜色

<div class="g-row g-row--color">
  <div class="g-col-6 g-col--color g-col--font-color">
    <div class="bg-light-blue font_1"><div class="color"></div><div class="value">#222222</div></div>
  </div>
  <div class="g-col-6 g-col--color g-col--font-color">
    <div class="bg-light-blue font_2"><div class="color"></div><div class="value">#666666</div></div>
  </div>
  <div class="g-col-6 g-col--color g-col--font-color">
    <div class="bg-light-blue font_3"><div class="color"></div><div class="value">#999999</div></div>
  </div>
  <div class="g-col-6 g-col--color g-col--font-color">
    <div class="bg-light-blue font_4"><div class="color"></div><div class="value">#CCCCCC</div></div>
  </div>
</div>

<ul class="g-row g-row--color g-row--primary-color g-row--font-color">
  <li>#555555</li><li>#777777</li><li>#999999</li><li>#AAAAAA</li><li>#CCCCCC</li><li>#DDDDDD</li><li>#ECECEC</li>
</ul>

### 辅色

<div class="g-row g-row--color">
  <div class="g-col-4 g-col--color g-col--second-color">
    <div class="bg-light-blue second_1"><div class="color"></div><div class="value">#222222</div></div>
  </div>
  <div class="g-col-4 g-col--color g-col--second-color">
    <div class="bg-light-blue second_2"><div class="color"></div><div class="value">#666666</div></div>
  </div>
  <div class="g-col-4 g-col--color g-col--second-color">
    <div class="bg-light-blue second_3"><div class="color"></div><div class="value">#999999</div></div>
  </div>
  <div class="g-col-4 g-col--color g-col--second-color">
    <div class="bg-light-blue second_4"><div class="color"></div><div class="value">#CCCCCC</div></div>
  </div>
  <div class="g-col-4 g-col--color g-col--second-color">
    <div class="bg-light-blue second_5"><div class="color"></div><div class="value">#CCCCCC</div></div>
  </div>
</div>


## 字体
根据七鱼设计规范，制定一套特定的字体规范

### 英文／数字字体
<div class="demo-typo-box typo-Arial">
  SailFish
  <div class="name">Alail</div>
</div>

### 中文字体
<div class="demo-typo-box typo-Microsoft">
  七鱼
  <div class="name">Microsoft YaHei</div>
</div>

### Font-family 代码

```css
  font-family: Arial, 'Microsoft YaHei', "Helvetica Neue", Helvetica, sans-serif;
```

<table class="demo-typo-size">
  <tbody>
    <tr>
      <td class="h1">页面标题</td>
      <td class="h1">SailFish 七鱼</td>
      <td class="color-dark-light">20px large</td>
    </tr>
    <tr>
    <td class="h2">大标题</td>
    <td class="h2">SailFish 七鱼</td>
    <td class="color-dark-light">18px large</td>
    </tr>
    <tr>
      <td class="h3">列表标题</td>
      <td class="h3">SailFish 七鱼</td>
      <td class="color-dark-light">18px large</td>
    </tr>
    <tr>
      <td class="text-regular">正文</td>
      <td class="text-regular">SailFish 七鱼</td>
      <td class="color-dark-light">14px Regular</td>
    </tr>
    <tr>
      <td class="text-small">小标题</td>
      <td class="text-small">SailFish 七鱼</td>
      <td class="color-dark-light">12px Small</td>
    </tr>
  </tbody>
</table>

## 设计规范文档

<img src="https://raw.githubusercontent.com/dkypooh/7-ui/master/docs/design/sailfish.png" style="width:100%;margin-top:30px;" />
