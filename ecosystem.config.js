module.exports = {
    apps: [{
        name: 'vendure-angular-storefront',
        script: './dist/server/main.js',
        env: {
            NODE_ENV: 'production'
        }
    }]
};
