<template>
	<section class="menu section" id="menu">
		<div class="container">
			<h1 class="is-primary has-text-centered is-size-1 section-title" style="color: #ffff00ff !important;background-color: #da251dff;font-weight: bold;padding:35px 0;">OPENING BACK UP ON MAY 1st, 2021</h1>
			<br>
			<br>
			<h2 class="is-primary has-text-centered is-size-1 section-title line-through">MENU</h2>
			<p class="has-text-centered is-size-4 has-text-weight-bold primary-color is-hidden-tablet">* We only accept cash!</p>
			<div class="section">

				<div class="columns">

					<div class="column is-one-fifth">
						<div class="tabs is-boxed">
							<ul id="tabs">
								<li 
									v-bind:key="item.id" 
									v-for="(item, index) in menuData" 
									v-bind:class="{'is-active': tabID == index}" 
									v-on:click="showContent(index)"
								>
									<a>
										<span>{{ item.title }}</span>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="column">
						<div id="tab-content">

							<div 
								class="block tabcontent" 
								v-for="(item, index) in menuData" 
								v-bind:key="item.id" 
								v-bind:class="{'is-active': tabID == index}"
							>

								<div class="columns">
									<div class="column">
										<Table v-bind:items="item.items" v-bind:categoryName="item.engTitle" v-bind:specialNote="item.specialNote" v-bind:prefix="item.prefix" />
									</div>
									<div class="column is-one-third">
										<Gallery v-bind:galleryImages="item.images" />
									</div>
								</div>

							</div>

						</div>
					</div>

				</div>

				<p class="has-text-centered is-size-4 has-text-weight-bold primary-color is-hidden-mobile">* We only accept cash!</p>
			</div>
		</div>
	</section>
</template>

<script>
	import Table from './Table.vue';
	import Gallery from './Gallery.vue';
	import data from '../assets/data/menu.json';

	export default {
		name: 'menu',
		components: { Table, Gallery },
		data() {
			return {
				menuData: data,
				tabID: 0
			}
		},
		methods: {
			showContent(index) {
				this.tabID = index;
			}
		}
	}
</script>


<style scoped>
	section {
		background-color: #f3f3f3;
	}
	.section-title {
		/* border-bottom: 1px solid #dbdbdb; */
		margin: auto;
	}

	.tabs {
		background-color: #f3f3f3;
		/* border-right: 1px solid #dbdbdb; */
	}

	#tabs {
		border-bottom-color: #fff;
		-webkit-flex-direction: column;
		flex-direction: column;
		/* border: 3px solid #da251dff; */
		margin: 0;
		padding: 0;
	}

	#tabs li {
		font-size: 1em;
		width: 100%;
		margin-bottom: 10px;
	}
	#tabs li:last-child {
		margin-bottom: 0px;
	}

	#tabs li span {
		color: inherit;
	}
	#tabs li a {
		border-radius: 0;
		border: none;
	}
	
	#tabs li a:hover {
		border: 0 #fff;;
		border-radius: 0;
		/* background-color: #fff; */
	}

	#tabs li.is-active a {
		color: #ffff00ff;
		background-color: #da251dff;
	}

	#tab-content .tabcontent {
		display: none;
	}

	#tab-content .tabcontent.is-active {
		display: block;
	}

	@media screen and (max-width: 992px) {
		#tabs li {
			margin: auto;
			font-size: 1em;
		}
	}
	@media screen and (max-width: 768px) {
		#tabs {
			display: none;
		}
		#tab-content .tabcontent {
			display: block;
		}
	}
</style>