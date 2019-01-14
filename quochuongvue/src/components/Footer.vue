<template>
	<footer id="contact">
		<div class="section">
			<div class="container">
				<div class="columns">
					<div class="column has-text-centered">
						<h2 class="subtitle has-text-weight-bold">CONTACT</h2>
						<a href="https://goo.gl/maps/WdsHsGfqFaP2">
							<p>5150 Buford Hwy NE</p>
							<p>Doraville, GA</p>
							<p>30340</p>
						</a>
						<a href="tel:7709360605">770-936-0605</a>
					</div>
					<div class="column has-text-centered">
						<h2 class="subtitle has-text-weight-bold">LOCATION</h2>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.8850580957487!2d-84.28750788436645!3d33.89261398064955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f509ce9a30c1bf%3A0xfb5e6e5e075ab3e8!2sQuoc+Huong+Banh+Mi+Fast+Food!5e0!3m2!1sen!2sus!4v1547350111633" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
					</div>
					<div class="column has-text-centered">
						<h2 class="subtitle has-text-weight-bold">HOURS</h2>
						<ul>
							<li>Sun: 9AM - 9PM</li>
							<li>Mon: 9AM - 8PM</li>
							<li>Tue: 9AM - 8PM</li>
							<li>Wed: 9AM - 8PM</li>
							<li>Thu: <span class="has-text-danger">CLOSED</span></li>
							<li>Fri: 9AM - 8PM</li>
							<li>Sat: 9AM - 8PM</li>
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
		background-color: #f3f3f3;
	}

	footer iframe {
		width: 100%;
	}

	footer .copyright {
		margin-top: 25px;
	}

	footer a {
		text-decoration: none;
		color: inherit;
	}

	#mobile-contact {
		background-color: #da251dff;
		color: #fff;
		position: fixed;
		bottom: 0;
		width: 100%;
		text-align: center;
		padding: 5px;
	}
</style>