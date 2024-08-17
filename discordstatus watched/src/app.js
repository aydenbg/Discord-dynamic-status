const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));


const apiRouter = require('./routes/api');
app.use(apiRouter);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});