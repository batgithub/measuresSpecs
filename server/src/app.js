const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/post',(req, res) => {
    res.send(
        [{
            title: "hello World!",
            description: "yo yo yo"
        }]
    )
})

app.listen(process.env.PORT || 8081)
console.log("go on http://localhost:8081");