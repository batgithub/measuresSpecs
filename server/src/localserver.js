const express = require('express')

const app = express()
//server static for vue js
var serveStatic = require('serve-static');
app.use(serveStatic(__dirname + "../../../front/dist/"));

app.listen(process.env.PORT || 8080);

console.log('vuejs on http://localhost:8080 ');
