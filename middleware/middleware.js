const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
//const dataFile=require('./object.json')

const app = express();
const port = 3000; // Port to listen on



app.get('/users', (req, res) => {
  fs.readFile('./object.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading user data');
    }

    try {
      const users = JSON.parse(data); // Parse JSON data
      res.send(users); // Send user data as JSON response (corrected)
    } catch (error) {
      console.error(error);
      return res.status(400).send('Invalid JSON data in file');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
