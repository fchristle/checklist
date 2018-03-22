const express = require('express');
const fs = require('fs');
const app = express();

const checklists = [];

fs.readFile('checklists.json', {encoding: 'utf8'}, (err, data) => {
  if(err) {
    throw err;
  }
  JSON.parse(data).forEach(checklist => {
    checklists.push(checklist);
  });
});


app.get('/', (req, res) => {
  res.send("Hello world");
});

app.get('/checklists', (req, res) => {
  const checklistResponse = { checklists : checklists};
  res.send(JSON.stringify(checklistResponse));
});

const server = app.listen(7000, () => {
  console.log("Server running at http://localhost:" + server.address().port);
});
