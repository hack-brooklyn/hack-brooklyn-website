module.exports = (phase, { defaultConfig }) => {
    return {
        /* config options here */
        module: {
            rules: [
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8192 // in bytes
                        }
                    }]
                }
            ],
        }
    }
}