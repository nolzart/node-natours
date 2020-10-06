const express = require('express');
const fs = require('fs');

const app = express();
const tours = JSON.parse(fs.readFileSync('dev-data/data/tours-simple.json'));

app.get('/api/v1/tours', (req, res) => {
    console.log('im hereeee');
    res.status(200).send({
        status: 'sucess',
        results: tours.length,
        data: {
            tours,
        },
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
