const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/countries', (req, res) => {
    const countries = require('./data/countries.json')
    res.send(countries)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})