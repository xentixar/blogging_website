<script setup>

import HorizontalCard from '@/components/HorizontalCard.vue';
import Navbar from './../components/Navbar.vue'
import { ref } from 'vue';

const posts = ref([])

fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    response.json().then(datas => {
        datas.map(data => {
            posts.value.push({
                title: `${data.title}`,
                image: '/images/image.png',
                description: `${data.body}`,
                category: 'Science and Technology',
                date: '2024-01-12',
                userName: 'Pawan Bhatta',
                userPosition: 'Sr. Software Developer',
                userImage: '/images/image.png',
                postId: data.id
            })
        })
    })
})

</script>

<template>
    <Navbar />
    <div class="hero-section">
        <h1 class="hero-section-heading text-center">Trending</h1>
        <HorizontalCard v-for="post in posts" :key="post.postId" v-bind="post" />

    </div>
</template>

<style scoped>
.hero-section {
    margin: 3rem 0;
}

.hero-section .hero-section-heading {
    margin-bottom: 1rem;
}
</style>