<template>
	<table class="table">
		<thead>
			<tr>
				<th colspan="2" class="has-text-centered">{{ categoryName }}</th>
			</tr>
			<tr v-bind:key="item.id" v-for="item in items">
				<td>{{ item.name }}</td>
				<td>{{ item.description }}</td>
			</tr>
		</thead>
	</table>
</template>

<script>
	export default {
		name: 'table',
		props: ['items', 'categoryName']
	}
</script>

<style scoped>
	table {
		margin: auto;
		background-color: #f3f3f3;
	}
	th {
		color: #da251dff!important;
	}
	td:nth-child(odd) {
		/* border-right: 1px solid #dbdbdb; */
	}
	@media screen and (max-width: 992px) {
		table {
			margin-left: 0;
			margin: auto;
		}
	}
</style>