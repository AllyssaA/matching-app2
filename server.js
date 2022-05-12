require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.use(express.static('static'))

app.set('views', 'views')

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Matching booklist app',
        title: 'Profile'
    })
})

app.get('/add', (req, res) => {
    res.render('addBook', {
        pageTitle: 'Add a book',
        title: 'Add a book to list'
    })
})

app.get('/list', (req, res) => {
    res.render('bookList', {
        pageTitle: 'Book list',
        title: 'Booklist'
    })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})