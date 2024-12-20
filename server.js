const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
}) 

const port = 3000
app.listen(port, () => {
  console.log("server running in port: 3000")
})