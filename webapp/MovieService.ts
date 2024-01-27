import axios from 'axios'

export default {
    async getMovies(title: String) {
        try {
            let res = await axios.get(`http://localhost:3001/movies?search=${title}`)
            // console.dir(res)
            return res.data
        } catch(e) {
            console.error(e)
        }
    }
}