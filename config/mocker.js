var express = require('express');
var apiMocker = require('connect-api-mocker');
const setupMoker = require('./SetupMoker');

var app = express();

setupMoker().then(res => {
    for (let i = 0; i < res.length; i++) {
        app.use(res[i].replace('/mocks',''),apiMocker(res[i]) );
        console.log('EndPoint :'+res[i].replace('/mocks','')+' Address: '+ res[i]);
    }
});

app.listen(8080);
console.log("Listening on port 8080");