require('dotenv').config()
const express = require('express')
// import express from 'express'
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('gauravdotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1> Please login on my website </h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2> My YouTube Channel </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


// console.log("My first backend project");
