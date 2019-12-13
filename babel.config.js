module.exports = {
    presets: [
        '@vue/app'
    ],

    // todo 这个ivew的按需引入关闭
    plugins: [
        [
            "import",
            {
                "libraryName": "iview",
                "libraryDirectory": "src/components"
            }
        ],
    ]
}

