const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");
const path = require('path');
const app = express();


/***
 * The code in here is by permission legally reused from my lecturer
 * Andrea Arcuri
 *
 *source:
 *https://github.com/arcuri82/pg6300/tree/master/les09/chat
 * */



app.use(bodyParser.json());

app.use(express.static('public'));

let counter = 0;

const userNames = ['Arne', 'Per', 'Arild', 'Ken'];


app.get('/api/users', (req, res) => {

    const query = req.query["user"];

    const data = userNames;

    if (query !== undefined && query !== null) {
        res.json(data.filter(m => m.id > query));
    } else {
        res.json(data);
    }
});

app.post('/api/result', (req, res) => {

    const dto = req.body;

    const id = counter++;

    userNames.push({id:id, userName: dto.userName});

    res.status(201); //created
    res.send();
});


//handling 404
app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});


module.exports = app;
