const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('index', { title: 'Home Page'})
})

app.get('/about', function (req, res) {
  res.render('about', { title: 'About'})
})

app.get('/sss', function (req, res) {
    res.render('sss', { title: 'SSS'})
  })

  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })