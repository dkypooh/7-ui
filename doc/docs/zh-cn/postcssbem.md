## 七鱼 CSS 代码规范
此规范结合BEM来使用POSTCSS, 让编写CSS样式更容易、更有效。

BEM是由@Yandex提出的一种类名命名方式。SUIT是基于BEM上的另一种类名命名方式，只不过@Nicholas Gallagher在BEM的基础上做了一些调整。BEM能做的事情，SUIT都可以做，但很多用户觉得SUIT是BEM的一种改进。使用这些方法确实有助于产生更好的，理有结构化的CSS。然而，需要的注意的是，手动输入结构所需的类名会让你感到厌烦，并且跟踪这些类以及如何推动，更会让你感到头痛。


:::ysfdoc 七鱼采用`BEM`命名规范, [参考文档](http://getbem.com/introduction/)

```html
<template>
    <img src="https://dkypooh.github.io/7-ui/bem.png" style="width: 100%; padding: 10px;box-sizing: border-box;">
</template>

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
```
:::

### 参考文档
- [BEM规范文档](http://getbem.com/introduction/)
- [BEM配置](https://www.w3cplus.com/PostCSS/using-postcss-with-bem-and-suit-methodologies.html)
