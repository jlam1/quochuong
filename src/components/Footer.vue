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
						<hr>
						<div class="content has-text-centered">
							<ul class="reviews">
								<li>
									<a href="https://www.google.com/search?ei=SaA8XO27Fovl_Qbrv6KYCA&q=quoc+huong&oq=quoc+huong&gs_l=psy-ab.3..35i39l2j0i20i263j0l7.6896.7893..7982...0.0..0.79.711.10......0....1..gws-wiz.......0i71j0i131j0i67.dIVGnh3Sq2g#lrd=0x88f509ce9a30c1bf:0xfb5e6e5e075ab3e8,1,,," rel="nofollow" target="_blank">
										<img src="../assets/images/icon_google.svg" alt="google">
									</a>
								</li>
								<li>
									<a href="https://www.tripadvisor.com/Restaurant_Review-g60898-d858066-Reviews-Quoc_Huong_Banh_Mi_Fast_Food-Atlanta_Georgia.html?m=19905" rel="nofollow" target="_blank">
										<img src="../assets/images/icon_tripadvisor.svg" alt="tripadvisor">
									</a>
								</li>
								<li>
									<a href="https://www.zomato.com/atlanta/quoc-huong-doraville/reviews" rel="nofollow" target="_blank">
										<img src="../assets/images/icon_zomato.svg" alt="zomato">
									</a>
								</li>
								<!-- <li>
									<a href="https://www.facebook.com/pages/Qu%C3%B4c-H%C3%BA%C3%B3ng/151864831504835" rel="nofollow" target="_blank">
										<img src="../assets/images/icon_facebook.svg" alt="facebook">
									</a>
								</li> -->
							</ul>
						</div>
					</div>
					<div class="column has-text-centered location-column">
						<h2 class="subtitle has-text-weight-bold">LOCATION</h2>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.8850580957487!2d-84.28750788436645!3d33.89261398064955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f509ce9a30c1bf%3A0xfb5e6e5e075ab3e8!2sQuoc+Huong+Banh+Mi+Fast+Food!5e0!3m2!1sen!2sus!4v1547350111633" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
					</div>
					<div class="column has-text-centered reviews-column">
						<h2 class="subtitle has-text-weight-bold">HOURS</h2>
						<p class="has-text-danger has-text-weight-bold">New Hours After 5/1/21</p>
						<ul>
							<li>Sun: 10AM - 6PM</li>
							<li>Mon: 9AM - 5PM</li>
							<li>Tue: 9AM - 5PM</li>
							<li>Wed: 9AM - 5PM</li>
							<li>Thu: <span class="has-text-danger has-text-weight-bold">CLOSED</span></li>
							<li>Fri: 9AM - 5PM</li>
							<li>Sat: 9AM - 6PM</li>
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