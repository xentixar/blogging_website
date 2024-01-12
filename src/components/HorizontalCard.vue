<script setup>
const props = defineProps(['title', 'image', 'description', 'category', 'date', 'userImage', 'userName', 'userPosition', 'postId'])
const postUrl = `/post/${props.postId}`
</script>

<template>
    <div class="card">
        <div class="image child">
            <img width="100%" :src="image" :alt="title">
        </div>
        <div class="card-body child">
            <div class="user">
                <img :src="userImage" :alt="userName" />
                <div class="user-info">
                    <div>{{ userName }}</div>
                    <div>{{ userPosition }}</div>
                </div>
            </div>
            <strong>{{ category }} - {{ date }}</strong>
            <h1>{{ title }}</h1>
            <p>{{ description.substring(0, 300) }}...</p>
            <p><router-link :to="postUrl">Read More</router-link></p>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 10px;
    max-width: 750px;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
}

.card .card-body p {
    text-align: justify;
}

.card .card-body .user {
    margin: 1rem 0;
    display: flex;
    gap: 10px;
}

.card .card-body .user img {
    width: 50px;
    border-radius: 50%;
    height: 50px;
}
</style> 
