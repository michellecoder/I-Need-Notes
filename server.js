const fs = require('fs');

const path = require('path');

const newNote = {
    "title": "A New Note",
    "text": "Testing text"
};

fs.readFile(path.join(__dirname, 'db/db.json'), 'utf8', (err, data) => {
    const notes = JSON.parse(data);

    const notesJSON = JSON.stringify(notes);
});