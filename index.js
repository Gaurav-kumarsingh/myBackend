require('dotenv').config()
const express = require('express')
// import express from 'express'
const app = express()

const port = 4000

const githubData = {
  "login": "Gaurav-kumarsingh",
  "id": 154734195,
  "node_id": "U_kgDOCTkOcw",
  "avatar_url": "https://avatars.githubusercontent.com/u/154734195?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Gaurav-kumarsingh",
  "html_url": "https://github.com/Gaurav-kumarsingh",
  "followers_url": "https://api.github.com/users/Gaurav-kumarsingh/followers",
  "following_url": "https://api.github.com/users/Gaurav-kumarsingh/following{/other_user}",
  "gists_url": "https://api.github.com/users/Gaurav-kumarsingh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Gaurav-kumarsingh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Gaurav-kumarsingh/subscriptions",
  "organizations_url": "https://api.github.com/users/Gaurav-kumarsingh/orgs",
  "repos_url": "https://api.github.com/users/Gaurav-kumarsingh/repos",
  "events_url": "https://api.github.com/users/Gaurav-kumarsingh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Gaurav-kumarsingh/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-12-24T10:54:12Z",
  "updated_at": "2026-04-04T06:18:46Z"
}

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

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


// console.log("My first backend project");
