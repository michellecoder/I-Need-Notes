const fs = require('fs');

const path = require('path');


fs.readFile(path.join(__dirname, 'db/db.json'), 'utf8', (err, data) => {
    const notes = JSON.parse(data);

    const notesJSON = JSON.stringify(notes);
});