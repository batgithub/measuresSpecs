const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//markdown parser
var mds = require('markdown-serve'),
    path = require('path');

// folder parser
var router  = express.Router()
var fs = require('fs')
router.get('/', function(req, res, next) {
    var folders = fs.readdirSync('../../front/static/')
    var objArray = [];
    folders.forEach((folder) => {
        var obj    = {};
        var files  = fs.readdirSync('/path/to/folders/' + folder)

        obj.folder = folder;
        obj.files  = files;
        objArray.push(obj);
    })
})



const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts',(req, res) => {
    res.send(
        [{
            title: "hello World!",
            description: "yo yo yo"
        }]
    )
})

app.use('/markdown', mds.middleware({
    rootDirectory: path.resolve(__dirname, '../../front/static/'),
}));

app.use(mds.middleware({
    rootDirectory: path.resolve(__dirname, '../../front/static/'),
    view: 'markdown'
}));


app.listen(process.env.PORT || 8081)
console.log("go on http://localhost:8081");
