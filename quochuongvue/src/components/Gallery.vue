<template>
	<div>
		<div class="has-text-centered" v-bind:key="image.id" v-for="image in galleryImages">
			<a 
				v-bind:href="image.file" 
				v-bind:data-lightbox="image.gallery" 
				v-bind:data-title="image.author" 
			>
				<img v-bind:src="image.file" alt="fooditem">
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "gallery",
		props: ['galleryImages']
	}
</script>

<style scoped>
	img {
		max-width: 200px;
		margin: 5px auto;
	}
	@media screen and (max-width: 992px) {
		img {
			max-width: 100%;
		}
	}
</style>