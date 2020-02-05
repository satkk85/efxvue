<template>
    <header>
        <nav class="navbar navbar-dark">
            <a class="navbar-brand" href="#"><img class="logo" alt="Vue logo" src="../assets/evts.png" width="100" height="80"></a>
            <div class="navbar-expand-xl" id="navbarSupportedContent">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'about'}">About Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link"  :to="{name:'eventList'}">Event List</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link"  :to="{name:'createEvent'}">Create Event</router-link>
                    </li>
                </ul>

            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>


<style scoped>
    a {
        font-weight: bold;
        color: deepskyblue;
    }

    a.router-link-exact-active {
        font-weight: bold;
        color: lightcoral;
    }
</style>