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
		margin: auto;
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
	.line-through {
		display: table;
		white-space: nowrap;
	}
	.line-through:before,
	.line-through:after {
		border-top: 3px solid rgba(218, 37, 29, 0.75);
		content: '';
		display: table-cell;
		position: relative;
		top: 0.6em;
		width: 40%;
	}
	.line-through:before {
		right: 1.5%;
	}
	.line-through:after {
		left: 1.5%;
	}
</style>