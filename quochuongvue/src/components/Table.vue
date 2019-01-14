<template>
	<div>
		<table class="table is-hoverable">
			<thead>
				<tr>
					<th colspan="2" class="has-text-centered">{{ categoryName }}</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				<tr v-bind:key="item.id" v-for="(item, index) in items">
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
		props: ['items', 'categoryName', 'specialNote', 'prefix']
	}
</script>

<style scoped>
	table {
		margin: auto;
		background-color: #f3f3f3;
		/* border: 3px solid #da251dff; */
	}
	table  tr > td:nth-child(1) {
		font-weight: bold;
	}
	th {
		color: #ffff00ff!important;
		background-color: #da251dff;
		font-weight: 300;
	}
	td:nth-child(even) {
		border-right: 1px solid #dbdbdb;
	}
	td {
		text-transform: capitalize;
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