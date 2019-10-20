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
}