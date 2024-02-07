import assert from 'assert'
import axios from 'axios'

describe('hooks', function () {
    this.beforeEach(function () {
        // let movieTitle = 'The Lion King'
    })
})

describe('TMDB API get request', function () {
    it('should return status 200 when placing a get request with a title to search', async function () {
        const movieTitle = 'The Lion King'
        let res = await axios.get(`http://localhost:3001/movies?search=${movieTitle}`)
        assert.equal(res.status, 200);
  });
});

describe('API Response Length', function () {
    it('should return a response with length 10', async function () {
        const movieTitle = 'the Lion King'
        let res = await axios.get(`http://localhost:3001/movies?search=${movieTitle}`)
        assert.equal(res.data.length, 10)
    })
})