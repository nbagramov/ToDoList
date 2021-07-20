const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
    res.send('Hello you!')
})

app.post('/createTask', (req, res) => {
    res.send('Hello you!')
})

app.put('/editTask', (req, res) => {
    res.send('Hello you!')
})

app.delete('/deleteTask', (req, res) => {
    res.send('Hello you!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
