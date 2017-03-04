## 七鱼 JavaScript 代码规范

### 配置参考
:::ysfdoc 七鱼代码规范配置文件, 此文件可以放在工程根目录, [配置原理](http://eslint.cn/docs/user-guide/configuring#configuration-cascading-and-hierarchy)
```html
    <template>
        <img src="https://dkypooh.github.io/7-ui/eslint.png" style="width: 100%; padding: 10px;box-sizing: border-box;">
    </template>

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
```
:::
### 参考

- [Eslint 中文文档](http://eslint.cn/docs)
- [Airbnb JavaScript Style Guild](http://airbnb.io/javascript/)
- [JavaScript Standard Style](https://github.com/feross/standard/blob/master/RULES.md)
