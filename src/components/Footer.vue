<template>
	<footer id="contact">
		<div class="section">
			<div class="container">
				<div class="columns">
					<div class="column has-text-centered contact-column">
						<h2 class="subtitle has-text-weight-bold">CONTACT</h2>
						<div class="default-color">
							<p>5150 Buford Hwy NE</p>
							<p>Doraville, GA 30340</p>
						</div>
						<a class="default-color" href="tel:7709360605">770-936-0605</a>
					</div>
					<div class="column has-text-centered location-column">
						<h2 class="subtitle has-text-weight-bold">LOCATION</h2>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.8850580957487!2d-84.28750788436645!3d33.89261398064955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f509ce9a30c1bf%3A0xfb5e6e5e075ab3e8!2sQuoc+Huong+Banh+Mi+Fast+Food!5e0!3m2!1sen!2sus!4v1547350111633" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
					</div>
					<div class="column has-text-centered reviews-column">
						<h2 class="subtitle has-text-weight-bold">HOURS</h2>
						<ul>
							<li>Sun: 10AM - 9PM</li>
							<li>Mon: 9AM - 8PM</li>
							<li>Tue: 9AM - 8PM</li>
							<li>Wed: 9AM - 8PM</li>
							<li>Thu: <span class="has-text-danger has-text-weight-bold">CLOSED</span></li>
							<li>Fri: 9AM - 9PM</li>
							<li>Sat: 9AM - 9PM</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="content has-text-centered copyright">
				<p>© 2019 Quoc Huong Banh Mi Fast Food. All rights reserved.</p>
			</div>
		</div>
		<a id="mobile-contact" class="is-hidden-tablet is-size-5" href="tel:7709360605">770-936-0605</a>
	</footer>
</template>

<style scoped>
	footer {
		border-top: 1px solid #f3f3f3;
		padding-top: 25px;
		position: relative;
	}

	footer:before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		/* background-image: url('../assets/images/footer_background.jpg'); */
		opacity: 0.5;
		background-size: cover;
	}
	h2.subtitle {
		font-size: 1.5em;
	}
	.section {
		position: relative;
		z-index: 2;
	}
	.container {
		background-color: rgba(255,255,255,0.9);
		padding: 50px 0;
	}
	iframe {
		width: 100%;
	}
	.contact-column a {
		font-size: 1.1em;
	}
	.copyright {
		margin-top: 25px;
	}	
	.poweredby{
		font-size: 0.85em;
	}

	.poweredby > a {
		color: #da251dff;
	}
	ul.reviews {
		margin: 0;
	}
	ul.reviews li {
		margin: 10px auto;
		display: inline;
	}
	ul.reviews li a {
		/* border: 1px solid #da251dff; */
		padding: 5px;
	}
	ul.reviews img {
		max-width: 40px;
	}
	#mobile-contact {
		position: fixed;
		bottom: 0;
		width: 100%;
		text-align: center;
		padding: 5px;
		z-index: 99;
		color: #ff0!important;
		background-color: #da251d;
		font-weight: 500;
		font-size: 1.5em!important;
		letter-spacing: 1px;
	}
	@media screen and (max-width: 576px) {
		.contact-column {
			order: 2;
		}
		.location-column {
			order: 3;
		}
		.reviews-column {
			order: 1;
		}
	}
</style>