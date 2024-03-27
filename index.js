require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000
const githubData={

  "login": "divyasanvi1",
  "id": 108477155,
  "node_id": "U_kgDOBnc64w",
  "avatar_url": "https://avatars.githubusercontent.com/u/108477155?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/divyasanvi1",
  "html_url": "https://github.com/divyasanvi1",
  "followers_url": "https://api.github.com/users/divyasanvi1/followers",
  "following_url": "https://api.github.com/users/divyasanvi1/following{/other_user}",
  "gists_url": "https://api.github.com/users/divyasanvi1/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/divyasanvi1/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/divyasanvi1/subscriptions",
  "organizations_url": "https://api.github.com/users/divyasanvi1/orgs",
  "repos_url": "https://api.github.com/users/divyasanvi1/repos",
  "events_url": "https://api.github.com/users/divyasanvi1/events{/privacy}",
  "received_events_url": "https://api.github.com/users/divyasanvi1/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 4,
  "created_at": "2022-06-30T14:40:58Z",
  "updated_at": "2024-02-27T03:15:13Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('divyasanvidotcom')
})
app.get('/login', (req, res) => {
  res.send('login at chai')
})
app.get('/github', (req, res) => {
  res.send(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})