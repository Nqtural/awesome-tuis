<script setup>
import { store } from "./js/store.js";
import { slugify } from "./js/utils.js";
import { useRoute } from "vue-router";
import { computed } from "vue";
import CategoryItem from "./Item.vue";

const route = useRoute();
const categoryTitle = route.params.categoryTitle;

const category = computed(() => {
	return store.parsedData?.categories.find(c => slugify(c.title) === categoryTitle);
});
</script>

<template>
	<header>
		<h1>{{ category.title }}</h1>
	</header>
	<main>
		<template v-if="category">
			<CategoryItem
				v-for="item in category.items"
				:key="item.name"
				:item="item"
				/>
		</template>
		<p v-else>Category not found</p>
	</main>
</template>

<style scoped>
h1 {
	text-align: center;
}

main {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-self: center;
	gap: 3rem;
	min-width: 25rem;
	max-width: 75rem;
	padding: 2rem;
}
</style>
