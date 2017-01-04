<style lang="scss">
  .page-component {
    padding-bottom: 95px;
  }
  .page-component {
    .content {
      margin-left: -1px;
      
      > {
        h3 {
          margin: 45px 0 15px;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          background-color: #fff;
          color: #5e6d82;
          font-size: 14px;
          margin-bottom: 45px;
          
          strong {
            font-weight: normal;
          }
          th {
            text-align: left;
            border-top: 1px solid #eaeefb;
            background-color: #EFF2F7;
          }
          td, th {
            border-bottom: 1px solid #eaeefb;
            padding: 10px;
          }
          th:first-child, td:first-child {
            padding-left: 10px;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="page-container page-component">
      <div class="g-row">
          <div class="g-col-6">
              <side-nav :data="navsData" base="/component"></side-nav>
          </div>

          <div class="g-col-18">
              <router-view class="content"></router-view>
              <footer-nav></footer-nav>
          </div>
      </div>
  </div>
</template>
<script>
  import { navs } from '../route.config';
  export default {
    data() {
      return {
        navsData: navs
      };
    }
  };
</script>
