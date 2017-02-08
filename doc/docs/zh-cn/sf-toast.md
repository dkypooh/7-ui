## Toast 组件


### Toast Error

:::ysfdoc

```html
    <template>
        <sf-button color="danger" @click.native="onClick('error','error')">Error</sf-button>
    </template>
    <script>
        export default {
            methods : {
                onClick : function(type, msg){
                    window.sfToast[type](msg)
                }
            }
        }
    </script>
```
:::

### Toast Info

:::ysfdoc

```html
    <template>
        <sf-button color="info" @click.native="onClick('info','info')">Info</sf-button>
    </template>
    <script>
        export default {
            methods : {
                onClick : function(type, msg){
                    window.sfToast[type](msg)
                }
            }
        }
    </script>
```
:::

### Toast Warning

:::ysfdoc

```html
    <template>
        <sf-button color="warning" @click.native="onClick('warning','warning')">Warning</sf-button>
    </template>
    <script>
        export default {
            methods : {
                onClick : function(type, msg){
                    window.sfToast[type](msg)
                }
            }
        }
    </script>
```
:::

### Toast Success

:::ysfdoc

```html
    <template>
        <sf-button color="primary" @click.native="onClick('success','success')">Success</sf-button>
    </template>
    <script>
        export default {
            methods : {
                onClick : function(type, msg){
                    window.sfToast[type](msg)
                }
            }
        }
    </script>
```
:::