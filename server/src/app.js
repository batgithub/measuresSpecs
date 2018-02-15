const express = require('express')
// utils for transfert data through http request
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const junk = require('junk');

//markdown parser
var mds = require('markdown-serve')
var path = require('path')

// start
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// return if we are in specs folder, his child folders and if they are specs folders
var getChildFolders = function(folderPathRoot) {
  var childFolders = fs.readdirSync(folderPathRoot)
  var childFoldersArray = []
  var iAmASpec = false

  childFolders.forEach((folder) => {
    var obj    = {};
    var childFolderPath = folderPathRoot + folder
    if(!fs.lstatSync(childFolderPath).isDirectory()){
      iAmASpec = true
    }else{
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
    }
  })


  return {iAmASpec:iAmASpec, childFoldersArray}
}

// var getChildFolders = function(folderPathRoot, done) {
//   var childFoldersArray = []
//   var iAmASpec = false
//   fs.readdir(folderPathRoot, function(err, list) {
//     list.filter(junk.not).forEach((folder) => {
//       var obj    = {};
//       var childFolderPath = folderPathRoot + folder
//       if(!fs.lstatSync(childFolderPath).isDirectory()){
//         iAmASpec = true
//       }else{
//         var isSpec = function(){
//           var response = false
//           fs.readdir(folderPathRoot + folder, function(err, list) {
//             list.filter(junk.not).forEach((file) => {
//               var filePath = folderPathRoot + folder +'/' +file
//               if(!fs.lstatSync(filePath).isDirectory()){
//                 response = true
//               }
//             })
//           })
//           return response
//         }
//         obj.folderName = folder
//         obj.folderPath  = folderPathRoot + folder
//         obj.isSpec = isSpec()
//         childFoldersArray.push(obj)
//       } // end else
//     }) // end forEach
//     return {iAmASpec:iAmASpec, childFoldersArray}
//   })// function
// }


//https://ourcodeworld.com/articles/read/420/how-to-read-recursively-a-directory-in-node-js
// var getChildFolders = function(folderPathRoot, done) {
//   var childFoldersArray = []
//   fs.readdir(folderPathRoot, function(err, list) {
//
//     if (err) return done(err);
//     list.filter(junk.not).forEach((folder) => {
//       childFoldersArray.push(folder)
//       console.log(folder);
//     })
//   })
//   return done(null, childFoldersArray);
// }
//
// getChildFolders('../front/static/', function(err, results) {
// if (err) throw err;
// console.log(results);
// });



app.get('/e/*', function(req, res) {
  var checkIfParam = function(){
    if (req.params[0]){
      return req.params[0]+'/'
    }
  }()

  const pathFolder = '../front/static/' + req.params[0]
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(getChildFolders(pathFolder)))
})


// Parser MD
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
