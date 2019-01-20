<template>
<div>
	<div class="splash-image">
		<img src="../assets/images/headline_background.png" alt="quoc huong shop" title="by william pham">
	</div>
	<!-- <section class="home section">
		<div class="container">
			<h1 class="is-primary has-text-centered is-size-1 section-title line-through">Welcome!</h1>
			<div class="content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto magni sapiente doloremque molestiae
					quisquam ea nam necessitatibus, deleniti culpa minus sunt fugiat hic. Velit asperiores eius possimus quidem nulla
					unde minus quis, dignissimos delectus excepturi natus nesciunt temporibus impedit? Atque adipisci est provident
					aut repellat! Eius maxime et quasi?
			</div>
		</div>
	</section> -->
</div>
</template>

<style scoped>
	.splash-image {
		background-image: url('../assets/images/headline_background.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		min-height: 600;
		height: 90vh;
		max-height: 900;
	}
	.splash-image img {
		display: none;
	}
	img {
		width: 100%;
	}
	.content {
		opacity: 0.9;
		width: 80%;
		margin: auto;
	}
	@media screen and (max-width: 992px) {
		.splash-image {
			background: none;
			min-height: 0;
			height: auto;
			max-height: auto;
		}
		.splash-image img {
			display: block;
		}
		section.home {
			margin-top: auto;
		}
		.content {
			width: 90%;
		}
	}
</style>