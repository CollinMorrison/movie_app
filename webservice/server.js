const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config()

const app = express();

// Accepts a get request
app.get('/movies', (req, res) => {
    const titleToSearch = req.query.search;
    console.log(titleToSearch);
    // console.log('API key: ' + process.env.TMDB_API_KEY)

    const url = 'https://api.themoviedb.org/3/search/movie?query=' + titleToSearch + '&include_adult=false&language=en-US&page=1';
    const options = {method: 'GET', headers: {
        accept: 'application/json',
        authorization: process.env.TMDB_API_KEY}};

    let response
    fetch(url, options)
        .then(res => res.json())
        .then(json=> {console.log(json)
                res.send(json)})
        .catch(err => console.error('error: ' + err));

        // const response = [];

    // res.send(`Successful response with search value: ${titleToSearch} ${response}`)
});

app.listen(3000, () => console.log('App is listening on port 3000.'));