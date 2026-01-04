const express = require('express');
const phones = require('./phone.json');
const cors=require('cors')
const app = express()


app.use(cors())

const port = 3000
app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/data', (req, res) => {
    res.send('more data coming soon')
})
app.get('/phones', (req, res) => {
    res.send(phones);
})
app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phn => phn.id === id) || {};

    res.send(phone)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})