const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')

//markdown parser
var mds = require('markdown-serve'),
    path = require('path')


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())







//return children folder
var dir = require('node-dir')



var root = "../front/static/"
var folders = fs.readdirSync(root)
var objArray = [];
folders.forEach((folder) => {
    var obj    = {};
    var files  = fs.readdirSync(root + folder);
    var objArray2 = [];
    var isSpec = function(){
      var response = true
      files.forEach((file) => {
        var subfile = root + folder +'/' +file
        if(fs.lstatSync(subfile).isDirectory()){}
        else {
          response = false
        }
      })
      return response
    }

    obj.folderName = folder
    obj.folderPath  = files
    obj.isSpec = isSpec()

    objArray.push(obj)
})
console.log(objArray)



app.get('/p/:tagId', function(req, res) {
  const Folder = '../front/static/' + req.params.tagId
  console.log(Folder)
  res.send(Folder)
  // fs.readdir(Folder, (err, files) => {
  //   files.forEach(file => {
  //     res.send(file)
  //     console.log(file)
  //   })
  // })

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
