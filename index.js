const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json');

//EJS is our view engine
app.set("view engine", "ejs")

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  let title = "Hidden Gems of Indie Puzzle Games!"
  res.render('pages/index', { "title": title })
})


// ======================= //
// TEST SquishCraft WITH GAME.ejs
// app.get('/SquishCraftTest', (req, res) => {
//   let title = "SquishCraft"
//   let dirName = "squishcraft" // name of directory
//   res.render('pages/game', { "title": title, "dirName": dirName })
// })






// ======================= //
// SquishCraft
app.get('/SquishCraft', (req, res) => {
  let title = "SquishCraft"
  res.render('squishcraft/index', { "title": title })
})

// ======================= //
// Recursed
app.get('/Recursed', (req, res) => {
  let title = "Recursed"
  res.render('recursed/index', { "title": title })
})

// ======================= //
// Bean and Nothingness
app.get('/Bean-and-Nothingness', (req, res) => {
  let title = "Bean and Nothingness"
  res.render('bean-and-nothingness/index', { "title": title })
})














// ======================== //
// Users example from in class

// users index is our list page
app.get('/users', (req, res) => {
  let title = "Users"
  res.render('users/index',
    {
      title: title,
      users: data
    })
})


// add user / view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
  var title = 'User Page';
  var id = req.params.id;
  res.render('users/view', {
    title: title,
    user: data[--id]
  });
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  // console.log(data)
})
