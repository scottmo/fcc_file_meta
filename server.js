"use strict";

const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/file', upload.single('file'), (req, res) => {
  res.json({ size: req.file.size + " bytes" });
});

const listener = app.listen(process.env.PORT, function () {
  console.log('Listening on port ' + listener.address().port);
});
