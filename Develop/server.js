const fs = require('fs');
const db = require('./db/db.json');
const path = require('path');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('URL');
});

app.get('/notes', (req, res) => {
    res.send('NOTES');
});

app.get('/api/notes', (req, res) => {
    res.send('API NOTES');
});

app.post('/api/notes', (req, res) => {
    console.log(req.body);

    res.send('POST NOTES');

});

app.get('*', (req, res) => {
    res.send('CATCH ALL');
});



app.listen(PORT, () => {
    console.log(`app listening on PORT http://localhost:${PORT}`);
})


// const newNote = {
//     'title':'A New Note',
//     'text':'Testing Text'
// };
// // Get the current notes by reading them form the `db.json`
// fs.readFile(path.join(__dirname, 'db/db.json'), 'utf8', (err, data) => {
//     // Append a new note to the collection of notes
//     const notes = JSON.parse(data);

//     // Save the newly extended collection back to `db.json`
//     const notesJSON = JSON.stringify(notes);
// });