const express = require('express');
const routeAPI = require('./routes/routeAPI');
const routeHTML = require('./routes/routeHTML');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


app.use("/api", routeAPI);
app.use("/", routeHTML);





app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);