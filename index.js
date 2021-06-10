const dotenv = require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 9000
const path = require("path")

app.use(cors())
app.use(express.json())
app.use('/api/', (_, res) => {
    res.json({data: 'api works '})
})
app.use(express.static(path.join(__dirname, 'client/build')))

app.listen(port, () => {
    console.log(`server is alive on port ${port}`)
})
// catch all endpoint 
app.use('*',(_,res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})


console.log('we in dis')

console.log(__dirname)
console.log(__filename)
console.log(process.env.USERNAME)
console.log(process.env.PORT)
console.log(process.env.FOOD)
console.log(process.env.FOOD)
console.log(process.env.FOOD)

