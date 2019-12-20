module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'views': '@/views',
                'components': '@/components',
                'network': '@/network',
                'commonjs': '@/commonjs',

            } // 别名配置
        }
    },
    productionSourceMap: process.env.NODE_ENV === "development" || argv.env === "dev",
    css: {
        loaderOptions: {
            less: {
                // todo 修改主题问题待解决
                modifyVars: {
                    "button-primary-background-color": "#000",
                    "button-primary-border-color": "#000",
                    "button-default-height": "36px",
                    "button-default-line-height": "34px"
                }
            }
        }
    }

}