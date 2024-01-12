<script setup>

import { ref } from 'vue';
const navbarActiveState = ref(false)


const toggleNavbarState = () => {
    navbarActiveState.value = !navbarActiveState.value;
};

</script>

<template>
    <nav :class="{ 'responsive': navbarActiveState }" class="navbar">
        <div class="left-child">
            <router-link to="" class="nav-brand">Blogging Website</router-link>
            <span @click="toggleNavbarState" class="hamburger-menu">&#9776;</span>
        </div>
        <div class="right-child">
            <router-link to="" class="nav-link">Home</router-link>
            <router-link to="" class="nav-link">Blogs</router-link>
            <router-link to="" class="nav-link">Account</router-link>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    /* background-color: #4b0082; */
}

.navbar .left-child {
    display: flex;
    justify-content: space-between;
}

.navbar .left-child .nav-brand {
    display: inline-block;
    padding: 1rem;
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
}

.navbar .left-child .hamburger-menu {
    display: none;
    padding: 1rem;
    color: #ffffff;
    text-decoration: none;
}

.navbar .right-child {
    display: flex;
}

.navbar .right-child .nav-link {
    display: inline-block;
    padding: 1rem;
    color: #ffffff;
    text-decoration: none;
    margin-right: 0.5rem;
    transition: color 1s;
    font-weight: bold;
}

.navbar .right-child .nav-link:hover {
    color: rgb(0, 255, 0);
}

@media screen and (max-width: 700px) {

    .navbar {
        flex-direction: column;
    }

    .navbar .right-child {
        flex-direction: column;
    }

    .navbar .left-child .hamburger-menu {
        display: block;
        cursor: pointer;
    }

    .navbar .right-child {
        max-height: 0;
        overflow: hidden;
    }

    .navbar.responsive .right-child {
        max-height: max-content;
        overflow: visible;
    }

    .navbar.responsive .right-child .nav-link {
        display: block;
        margin-top: 0.5rem;
    }
}
</style>