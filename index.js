const express = require("express");
const app = express()

app.get('/', function (req, res) {
  res.redirect("https://docs.google.com/forms/d/1_dEp0dvqjeIlhLBuWKImmsP2XBglojH2X4oMl4R6aFI");
})

app.listen(3000)