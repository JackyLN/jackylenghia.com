<template>
	<div id="app">
		<h1>My Todo App!</h1>
		<Profile />

    <div>
      <div v-for="(route, i) in routes">
        <router-link  :key="i" :to="{path:route.path}">{{route.name}}</router-link>
        </router-link>
      </div>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
	</div>
</template>

<script>
//import TodoList from './components/TodoList.vue'
import Profile from './views/Profile.vue'


export default {
	components: {
		//TodoList
    Profile
	},
  data () {
    return {
      routes: [{
        path: '/', name: 'foo'
      },
      {
        path: '/bar', name: 'bar'
      }]
    }
  }
}
</script>

<style lang="scss">
@import './variables.scss';

*, *::before, *::after {
	box-sizing: border-box;
}

#app {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $vue-blue;
}

h1 {
	text-align: center;
}
</style>