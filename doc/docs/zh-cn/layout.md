<style lang="scss">
    .g-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .g-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
</style>

## Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局

使用单一分栏创建基础的栅格布局。

:::ysfdoc
```html
<div class="g-row">
  <div class="g-col-24"><div class="grid-content bg-purple-dark"></div></div>
</div>
<div class="g-row">
  <div class="g-col-12"><div class="grid-content bg-purple"></div></div>
  <div class="g-col-12"><div class="grid-content bg-purple-light"></div></div>
</div>
<div>
  <div class="g-col-8"><div class="grid-content bg-purple"></div></div>
  <div class="g-col-8"><div class="grid-content bg-purple-light"></div></div>
  <div class="g-col-8"><div class="grid-content bg-purple"></div></div>
</div >
<div class="g-row">
  <div class="g-col-6"><div class="grid-content bg-purple"></div></div>
  <div class="g-col-6"><div class="grid-content bg-purple-light"></div></div>
  <div class="g-col-6"><div class="grid-content bg-purple"></div></div>
  <div class="g-col-6"><div class="grid-content bg-purple-light"></div></div>
</div>
<div class="g-row">
  <div class="g-col-4"><div class="grid-content bg-purple"></div></div>
  <div class="g-col-4"><div class="grid-content bg-purple-light"></div></div>
  <div class="g-col-4"><div class="grid-content bg-purple"></div></div>
  <div class="g-col-4"><div class="grid-content bg-purple-light"></div></div>
  <div class="g-col-4"><div class="grid-content bg-purple"></div></div>
  <div class="g-col-4"><div class="grid-content bg-purple-light"></div></div>
</div>
```
:::
