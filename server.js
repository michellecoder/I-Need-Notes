const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
            res.send('URL');

            app.get('/notes', (req, res) => {
                res.send('NOTES');

            });

            app.get('/api/notes', (req, res) => {
                res.send('API NOTES');

            });

            app.post('/api/notes', (req, res) => {
                res.send('API POST');

            });

            app.get('*', (req, res) => {
                        res.send('CATCH ALL');




                        app.listen(PORT, () => {
                            console.log(`App listening on PORT http://localhost:${PORT}`);
                        });



                        // const newNote = {
                        //     "title": "A New Note",
                        //     "text": "Testing text"
                        // };

                        // fs.readFile(path.join(__dirname, 'db/db.json'), 'utf8', (err, data) => {
                        //     const notes = JSON.parse(data);

                        //     const notesJSON = JSON.stringify(notes);
                        // });