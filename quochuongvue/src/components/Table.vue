<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th colspan="2" class="has-text-centered">{{ categoryName }}</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				<tr v-bind:key="item.id" v-for="item in items">
					<td>{{ item.name }}</td>
					<td>{{ item.description }}</td>
					<td>${{ item.price }}</td>
				</tr>
			</tbody>
		</table>
		<div v-if="specialNote.length > 0">
			<p class="note"><span class="primary-color">* </span>{{ specialNote }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'table',
		props: ['items', 'categoryName', 'specialNote']
	}
</script>

<style scoped>
	table {
		margin: auto;
		background-color: #f3f3f3;
	}
	table  tr > td:nth-child(1) {
		font-weight: bold;
	}
	th {
		color: #da251dff!important;
	}
	td:nth-child(odd) {
		/* border-right: 1px solid #dbdbdb; */
	}
	.note {
		text-align: center;
		font-weight: bold;
		font-size: 1em;
	}
	@media screen and (max-width: 992px) {
		table {
			margin-left: 0;
			margin: auto;
		}
	}
</style>