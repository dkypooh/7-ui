<script>
var iconList = [
'dcaret',
'caret-down',
'caret-left',
'arrow-down',
'arrow-right',
'fullscreen',
'narrow',
'delete',
'ok',
'close',
'more',
'remove',
'add',
'refresh',
'loading',
'edit',
'edit-ok',
'upload',
'search',
'revoke',
'camera',
'image',
'menu-1',
'menu',
'share',
'share-1',
'sale',
'date',
'time',
'wechat',
'more-circle',
'more-fill',
'good',
'good-fill',
'star-fill',
'star',
'radio',
'radio-selected',
'radio-selected-fill',
'checkbox',
'checkbox-selected',
'checkbox-selected-fill',
'success',
'warning',
'error',
'info',
'github'
]

  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>
<style lang="sass">
  .demo-icon .source > i {
    font-size: 24px;
    color: #8492a6;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }

  .demo-icon .source > button {
    margin: 0 20px;
  }

  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: all .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;

    & span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
      color: #99a9bf;
    }
    & i {
      display: block;
      font-size: 24px;
      margin-bottom: 15px;
      color: #8492a6;
    }
    &:hover {
      transform : scale(1.3);
      cursor : pointer;
      background-color: rgba(92, 182, 255, 1);

      i {
        color : #fff;
      }
      span {
        color : #fff;
      }
    }
  }
</style>
## Icon 图标


### 使用方法

直接通过设置类名为 `sf-icon sf-icon-iconName` 来使用即可。例如：

:::ysfdoc
```html
<i class="sf-icon sf-icon--edit"></i>
<i class="sf-icon sf-icon--share"></i>
<i class="sf-icon sf-icon--delete"></i>
<sf-button  color="primary">搜索</sf-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in icons">
    <span>
      <i :class="['sf-icon','sf-icon--' + name]"></i>
      {{'sf-icon-' + name}}
    </span>
  </li>
</ul>
