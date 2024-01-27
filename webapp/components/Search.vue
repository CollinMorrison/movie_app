<template>
    <div class="bg-gradient-to-r from-slate-500 h-full">
        <div class="justify-center">
            <h1 class="text-6xl font-bold justify-center p-6">{{ header }}</h1>
        </div>
        <div class="flex justify-center">
            <UInput
                type="text"
                placeholder="Movie Title"
                @change="handleInputChange"
                class="w-1/2 justify-center p-4"
            />
            <UButton
                @click="handleSearch"
                class="justify-center m-4"
            >
                Search
            </UButton>
        </div>
        <div class="flex flex-wrap justify-center w-3/4 p-4">
            <span v-for="movie in this.movies"
                class="justify-center flex p-4">
                <UCard class="p-4">
                    <div class="p-4 text-xl">
                        {{ movie.title }}
                    </div>
                    <div>
                        <img
                            :src="movie.poster_image_url"
                            class="max-h-72"
                        />
                    </div>
                    <div class="p-4 text-xl">
                        {{ movie.popularity_summary }}
                    </div>
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