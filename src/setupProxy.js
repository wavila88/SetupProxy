const proxy = require('http-proxy-middleware');

module.exports = function(app){

    app.use(proxy('/users',{
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
      
    }));
}