const dotenv = require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.port || 9000

app.use('/api/', (_, res) => {
    res.json({data: 'api works '})
})

app.listen(port, () => {
    console.log(`server is alive on port ${port}`)
})


console.log('we in dis')

console.log(__dirname)
console.log(__filename)
console.log(process.env.USERNAME)
console.log(process.env.PORT)
console.log(process.env.FOOD)
console.log(process.env.FOOD)
console.log(process.env.FOOD)

