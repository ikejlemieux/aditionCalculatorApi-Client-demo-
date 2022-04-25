const express = require('express')
const request = require('request')
const app = express()
const port = 80

app.use(express.static('static'))


app.get('/apiHandler', (req, res) => {
  var url = req.query.url
  var data
  request(url.toString(), function (error, response, body) {
    data = body
    res.send(data.toString())
  })
  
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})