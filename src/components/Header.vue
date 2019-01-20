<template>
	<header>
		<div class="container">
			<nav class="level navbar is-fixed-top">
				<!-- <p class="level-item has-text-centered is-hidden-mobile">
					<a href="#menu" class="link is-info is-size-3">Menu</a>
				</p> -->
				<p class="level-item has-text-centered">
					<a href="#">
						<img src="../assets/images/logo.png" alt="">
					</a>
				</p>
				<!-- <p class="level-item has-text-centered is-hidden-mobile">
					<a href="#contact" class="link is-info is-size-3">Contact</a>
				</p> -->
			</nav>
		</div>
	</header>
</template>

<style scoped>
	nav {
		box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.2);
	}
	nav .link {
		font-size: 1.3em;
		color: #da251dff;
		text-decoration: none;
	}
	p {
		margin-bottom: 0!important;
	}
	img {
		max-height: 80px;
	}
	@media screen and (max-width: 992px) {
		nav {
			position: relative!important;
		}
		img {
			max-height: 50px;
		}
	}
</style>