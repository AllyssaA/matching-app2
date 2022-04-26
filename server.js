require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.set('views', 'views')

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Eyooo ik weerk'
    })
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})