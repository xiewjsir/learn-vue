<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/aboutme">About</router-link>
        <router-link to="/player/1">Player1</router-link>
        <router-link to="/curry">Curry</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    import './assets/my.css'
    export default {
        name: 'App',
        methods: {
            btnClick(uid) {
                //this.$router.push({ path: `/player/${uid}` });
                //this.$router.push({ path: `/player/${uid}/stats` });
                //this.$router.push({ name: 'Player', params: { uid: uid } });
                //this.$router.push({ path: '/player', query: { uid: uid }}); //url-get参数写法
                //url履历控制
                this.$router.go(1);
            }
        }
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>