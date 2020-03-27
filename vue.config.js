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
                    // 直接覆盖变量
                    'text-color': '#DC143C',
                    'border-color': '#eee',
                    'gray-8': '#FF00FF',
                    'search-left-icon-color': '#8B008B',
                },
            },
        },
    },

}