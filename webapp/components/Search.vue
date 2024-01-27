<template>
    <div>
        <h1>{{ header }}</h1>
        <input
            type="text"
            placeholder="Movie Title"
            @change="handleInputChange"
        />
        <button
            @click="handleSearch"
        >
            Search
        </button>
        <span v-for="movie in this.movies" :key="movie.title">
            {{ movie.title }}
        </span>

    </div>
</template>

<script>
import MovieService from '@/MovieService.ts'
export default {
    props: {
        header: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            movieTitle: '',
            movies: []
        }
    },
    methods: {
        async handleSearch() {
            console.log('IN HANDLESEARCH')
            this.movies = await MovieService.getMovies(this.movieTitle)
            console.dir(this.movies)
        },

        async handleInputChange(event) {
            this.movieTitle = event.target.value
            console.log(this.movieTitle)
        }
    }


}
</script>