import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Bakery Service API!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on http://localhost:3000');
});