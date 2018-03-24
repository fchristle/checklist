const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser')

const checklists = [];

fs.readFile('checklists.json', {encoding: 'utf8'}, (err, data) => {
  if(err) {
    throw err;
  }
  JSON.parse(data).forEach(checklist => {
    checklists.push(checklist);
  });
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.get('/checklists', (req, res) => {
  const checklistResponse = { checklists : checklists};
  res.send(JSON.stringify(checklistResponse));
});

app.get('/checklists/:id', (req, res) => {
  const id = req.params.id;
  console.log("ID", id);
  console.log("Checklists", checklists);
  const checklist = checklists.find(list => list.id == id);
  console.log("Checklist", checklist);
  res.send(JSON.stringify(checklist));
});

app.put('/checklists/:id', (req, res) => {
  const id = req.params.id;
  const checklist = checklists.find(list => list.id == id);
  const body = req.body;
  body.keys().filter(key => key != "id").forEach(key => checklist[key] = body[key] );
  res.end();
});

const server = app.listen(7000, () => {
  console.log("Server running at http://localhost:" + server.address().port);
});
