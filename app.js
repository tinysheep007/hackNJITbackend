const express = require('express')
const bodyParser = require(`body-parser`)
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

let player = {
  "name": "undeclared",
  "health": 0,
  "hunger": 0,
  "stamina": 0,
  "bathroomBreak": 0,
  "tempreture": 60
}

//get hello world
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//return player profile
app.get('/profile', (req, res) => {
  res.send(player)
})

//change name
app.post('/changeName', (req, res) => {
  let { newName } = req.body
  player.name = newName
  res.send(player)
})

//change everything needs two paramter for input
//catagory: the catagory you want to update
//change: stuff to wanna change. either new string or int change amount
app.post('/edit', (req, res) => {
  let { catagory, change } = req.body
  if (catagory === "name") {
    player[catagory] = change
  } else {
    player[catagory] = player[catagory] + change
  }
  res.send(player)
})

app.post('/changeHealth', (req, res) => {
  let { change } = req.body
  player.health = player.health + change
  res.send(player)
})




app.get('/objectTobe', (req, res) => {
  let tobe = {
    "name": "tobe",
    health: 99
  }
  tobe.health = tobe.health + 1
  res.send(tobe)
})

app.get("/test", (req, res) => {
  let { wild } = req.body
  res.send(typeof (wild) + " " + wild.bozo + " this is the back end API");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})