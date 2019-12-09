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
                    red: '#03a9f4',
                    blue: '#3eaf7c',
                    orange: '#f08d49',
                    'text-color': '#111'
                }
            }
        }
    }
}