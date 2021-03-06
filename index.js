const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

const user = require('./routes/user')
app.use('/users', user)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found')
  err.status = 404
  next(err)
})

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.send(err.message)
})
// listen on port 3000

app.listen(process.env.PORT || 80, function () {
  console.log('Express app listening on port 3000')
})
