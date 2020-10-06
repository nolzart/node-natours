const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

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

app.post('/api/v1/tours', (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        if (err) throw err;
        res.status(201).send({
            status: 'sucess',
            data: {
                tour: newTour,
            },
        });
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
