const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')



//markdown parser
var mds = require('markdown-serve'),
    path = require('path');


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


// folder parser
const dirTree = require('directory-tree');
const filteredTree = dirTree('../front/static/', {exclude:/.DS_Store/})

app.get('/',(req, res) => {
    res.send(
      filteredTree
    )
})

// Test
app.get('/posts',(req, res) => {
    res.send(
        [{
            title: "hello World!",
            description: "yo yo yo"
        }]
    )
})

// Parser MD
app.use('/markdown', mds.middleware({
    rootDirectory: path.resolve(__dirname, '../../front/static/'),
}));

app.use(mds.middleware({
    rootDirectory: path.resolve(__dirname, '../../front/static/'),
    view: 'markdown'
}));


// Server listener
app.listen(process.env.PORT || 8081)
console.log("go on http://localhost:8081");
