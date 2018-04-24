const express = require('express')
// utils for transfert data through http request
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')

//markdown parser
var mds = require('markdown-serve')
var path = require('path')

// start
const API = express()
API.use(morgan('combined'))
API.use(morgan('combined'))
API.use(bodyParser.json())
API.use(bodyParser.json())
API.use(cors())
API.use(cors())

// return if we are in specs folder, his child folders and if they are specs folders
var getChildFolders = function(folderPathRoot) {
  var childFolders = fs.readdirSync(folderPathRoot)
  var childFoldersArray = []
  var iAmASpec = false

  childFolders.forEach((folder) => {
    var obj = {};
    var childFolderPath = folderPathRoot + folder


    if(!fs.lstatSync(childFolderPath).isDirectory()){
      if (folder == '.DS_Store') {
        //do nothing
      }
      else {
        iAmASpec = true
      }
    }
    else {
      var subFolders  = fs.readdirSync(folderPathRoot + folder);
      var isSpec = function(){
        var response = false
        subFolders.forEach((file) => {
          var filePath = folderPathRoot + folder +'/' +file
          if(!fs.lstatSync(filePath).isDirectory()){
            if (file == '.DS_Store') {
              //do nothing
            } else {
              response = true
            }
          }
        })
        return response
      }
      obj.folderName = folder
      obj.folderPath  = folderPathRoot + folder
      obj.isSpec = isSpec()
      childFoldersArray.push(obj)
    }
  })

  if (iAmASpec === true) {
    var theFolder
    childFolders.forEach((folder) => {
      var childFolderPath = folderPathRoot + folder
      if(fs.lstatSync(childFolderPath).isDirectory()){
        theFolder = folder
      }else {

      }
    })
    return {iAmASpec:iAmASpec, theFolder}
  }
  else {
    return {iAmASpec:iAmASpec, childFoldersArray}
  }
}

var rootFolder = './front/static/explorerFiles/'



API.get('/measures/*', function(req, res) {

  var checkIfParam = function(){
    if (req.params[0]){
      return req.params[0]+'/'
    }
  }()
  const pathFolder = rootFolder + req.params[0]
  res.setHeader('Content-Type', 'application/json');

  res.send(JSON.stringify(getChildFolders(pathFolder)))
})



// Parser MD
API.use('/markdown', mds.middleware({
    rootDirectory: path.resolve(__dirname, rootFolder),
}))





// Server listener
API.listen(process.env.PORT || 8081)
console.log("API REST on http://localhost:8081")




// Server render app Vue js
var history = require('connect-history-api-fallback')
var serveStatic = require('serve-static')
const app = express()

//Serve specs files
API.use(serveStatic(__dirname + "/front/static/explorerFiles/"))

app.use(history());
app.use(serveStatic(__dirname + "/front/dist/"))
app.listen(process.env.PORT || 5000);
console.log('vuejs on http://localhost:5000 ')
