const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')

//markdown parser
var mds = require('markdown-serve'),
    path = require('path')


const app = express()



//return child folders and if they are specs folders
var getChildFolders = function(folderPathRoot) {
  var childFolders = fs.readdirSync(folderPathRoot)
  var childFoldersArray = [];

  childFolders.forEach((folder) => {
    var obj    = {};
    var subFolders  = fs.readdirSync(folderPathRoot + folder);
    var isSpec = function(){
      var response = false
      subFolders.forEach((file) => {
        var filePath = folderPathRoot + folder +'/' +file
        if(!fs.lstatSync(filePath).isDirectory()){
          response = true
        }
      })
      return response
    }

    obj.folderName = folder
    obj.folderPath  = folderPathRoot + folder
    obj.isSpec = isSpec()

    childFoldersArray.push(obj)
  })

  return childFoldersArray
}

// console.log(getChildFolders("../front/static/"))

app.get('/folders/*', function(req, res) {
  var checkIfParam = function(){
    if (req.params[0]){
      return req.params[0]+'/'
    }
  }
  checkIfParam()
  const pathFolder = '../front/static/' + req.params[0]
  res.send(getChildFolders(pathFolder))
})

// Parser MD
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use('/markdown', mds.middleware({
    rootDirectory: path.resolve(__dirname, '../../front/static/'),
}))

app.use(mds.middleware({
    rootDirectory: path.resolve(__dirname, '../../front/static/'),
    view: 'markdown'
}))


// Server listener
app.listen(process.env.PORT || 8081)
console.log("go on http://localhost:8081")
