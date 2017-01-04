<style lang="scss">
    .page-component {
        padding-bottom: 95px;
    }

    .page-component {

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

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    #app {
        height: 100%;
    }

    body {
        font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif;
        overflow: auto;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
    }

    a {
        color: #4078c0;
        text-decoration: none;
    }

    button, input, select, textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        color: inherit;
    }

    .hljs {
        line-height: 1.8;
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
        font-size: 12px;
        padding: 18px 24px;
        background-color: #f9fafc;
        border: solid 1px #eaeefb;
        margin-bottom: 25px;
        border-radius: 2px;
        -webkit-font-smoothing: auto;
    }

    .main-cnt {
        &:after {
            content: "";
            display: table;
            clear: both;
        }
        margin-top: -80px;
        padding: 80px 0 120px;
        box-sizing: border-box;
        min-height: 100%;
    }

    .container,
    .page-container {
        width: 1140px;
        margin: 0 auto;
    }

    .page-container {
        padding-top: 55px;

        h2 {
            font-size: 28px;
            color: #1f2d3d;
            margin: 0;
        }
        h3 {
            font-size: 22px;
        }
        h2, h3, h4, h5 {
            font-weight: normal;
            color: #1f2f3d;
        }
        p {
            font-size: 14px;
            color: #5e6d82;
        }
    }

    .demo {
        margin: 20px 0;
    }

    @media (max-width: 1140px) {
        .container,
        .page-container {
            width: 100%;
        }
    }
</style>

<template>
    <div id="app">
        <div class="main-cnt">
            <main-body></main-body>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        created() {
            window.addEventListener('hashchange', () => {
                document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
        }
    };
</script>