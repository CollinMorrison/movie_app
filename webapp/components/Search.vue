<template>
    <div>
        <h1>{{ title }}</h1>
        <input
            type="text"
            placeholder="Movie Title"
        />
        <button
            @click="handleSearch"
        >
            Search
        </button>

    </div>
</template>

<script>
import MovieService from '@/MovieService.ts'
export default {
    props: {
        title: {
            type: String,
            required: true
        },
    },
    data() {

    },
    methods: {
        async handleSearch() {
            console.log('IN HANDLESEARCH')
            MovieService.getMovies('test')
        }
    }


}
</script>