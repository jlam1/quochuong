<template>
	<div id="app">
		<Header/>
		<Headline/>
		<Menu/>
		<Footer/>
	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import Headline from './components/Headline.vue'
	import Menu from './components/Menu.vue'
	import Footer from './components/Footer.vue'
	
	export default {
		name: 'app',
		components: { Header, Headline, Menu, Footer }
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Lato');
	* {
		margin: 0;
		font-family: 'Lato', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>