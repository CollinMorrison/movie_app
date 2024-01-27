<template>
    <div class="bg-gradient-to-r from-slate-500 h-full">
        <h1
            class="text-3xl font-bold underline justify-center">{{ header }}</h1>
        <UInput
            type="text"
            placeholder="Movie Title"
            @change="handleInputChange"
            class="w-1/2 justify-center"
        />
        <UButton
            @click="handleSearch"
        >
            Search
        </UButton>
        <div
            class="flex-row justify-center w-3/4">
            <span v-for="movie in this.movies">
                <UCard>
                    {{ movie.title }}
                    <img
                        :src="movie.poster_image_url"
                    />
                </UCard>
                
            </span>
        </div>

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