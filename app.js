// HTTP API
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/api/one', (req, res) => {
    res.send('One')
})

app.get('/api/two', (req, res) => {
    res.send('Two')
})

app.get('/api/three', (req, res) => {
    res.send('Three')
})

app.get('/api/four', (req, res) => {
    res.send('Four')
})

app.get('/api/five', (req, res) => {
    res.send('Five')
})

// app.post('/api/request', 
// // middleware 1
// (req, res, next) => {
//     setTimeout(() => {        
//         console.log('One');
//         next()
//     }, 1000)    
// }, 
// // middleware 2
// (req, res, next) => {
//     setTimeout(() => {        
//         console.log('Two');
//         next()
//     }, 1000)    
// }, 
// // middleware 3
// (req, res, next) => {
//     setTimeout(() => {        
//         console.log('Three');
//         next()
//     }, 1000)    
// })

app.listen(3000)