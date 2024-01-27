const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors())

// Accepts a get request
app.get('/movies', (req, res) => {
    const titleToSearch = req.query.search;
    console.log(titleToSearch);
    // console.log('API key: ' + process.env.TMDB_API_KEY)

    const url = 'https://api.themoviedb.org/3/search/movie?query=' + titleToSearch + '&include_adult=false&language=en-US&page=1';
    const options = {method: 'GET', headers: {
        accept: 'application/json',
        authorization: process.env.TMDB_API_KEY}};

    let response = []
    fetch(url, options)
        .then(res => res.json())
        .then(json=> {
            // console.log(json)
            
            for (let i = 0; i < 10; ++i) {
                if (json.results[i]) {
                    const currentObject = json.results[i]
                    const posterImageUrl = `https://image.tmdb.org/t/original${currentObject.poster_path}`
                    const popularitySummary = `${currentObject.popularity} out of ${currentObject.vote_count}`
                    response.push({
                        'movie_id': currentObject.id,
                        'title': currentObject.title,
                        'poster_image_url': posterImageUrl,
                        'popularity_summary': popularitySummary
                    })
                }
            }
            // console.log(response.length)

            res.send(response)
                
            
            })
        .catch(err => console.error('error: ' + err));

        // const response = [];

    // res.send(`Successful response with search value: ${titleToSearch} ${response}`)
});

app.listen(3001, () => console.log('App is listening on port 3001.'));