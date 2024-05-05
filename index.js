const express = require("express");
const app = express()

app.get('/', function (req, res) {
  res.redirect("https://docs.google.com/forms/d/e/1FAIpQLSdj8ljtthbybtfUzAkVYswn7Jw_D2zbeN4hdbF9zh6H42Ro3A/viewform");
})

app.listen(3000)