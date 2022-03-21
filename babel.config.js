module.exports = {
    presets: [
        ['@babel/env', {
            modules: false,
            targets: {
                browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
            }
        }]
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-unicode-property-regex'
    ],
    sourceType: 'unambiguous',
    env: {
        test: {
            presets: ['@babel/env']
        }
    }
};
