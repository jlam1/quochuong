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
	.section-title {
		color: #da251dff;
		/* color: #da251dff; */
		/* border-bottom: 3px solid #f3f3f3; */
		/* padding-bottom: 15px; */
	}
	.default-color {
		color: #000;
	}
	.primary-color {
		color: #da251dff;
	}
	.secondary-color {
		color: #ffff00ff;
	}
</style>