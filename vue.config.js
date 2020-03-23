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
    css: {
        loaderOptions: {
            less: {
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