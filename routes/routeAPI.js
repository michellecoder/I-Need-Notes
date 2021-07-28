const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        res.json(notes);
    })
});

router.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const newNote = req.body;
        newNote.id = notes.length;
        console.log(newNote);
        notes.push(newNote);
        const jsonNotes = JSON.stringify(notes);
        fs.writeFile('./db/db.json', jsonNotes, (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    })
});

module.exports = router