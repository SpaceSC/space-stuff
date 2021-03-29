const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.get('/', (req, res) => {
  // sendFile sets Content-Type response HTTP header field based on file extension
  res.sendFile(__dirname + '/data/objects.json')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})