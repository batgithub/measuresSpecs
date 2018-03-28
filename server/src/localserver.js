const express = require('express')
var history = require('connect-history-api-fallback');
const app = express()
app.use(history());
//server static for vue js
var serveStatic = require('serve-static');
app.use(serveStatic(__dirname + "../../../front/dist/"));

app.listen(process.env.PORT || 8080);

console.log('vuejs on http://localhost:8080 ');
