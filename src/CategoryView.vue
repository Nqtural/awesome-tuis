<script setup>
import { store } from "./js/store.js";
import { slugify } from "./js/utils.js";
import { useRoute } from "vue-router";
import { computed } from "vue";

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
		<article v-if="category" v-for="item in category.items" :key="item.name">
			<h2>{{ item.name }}</h2>
			<p>{{ item.description }}</p>
			<a :href="item.link" target="_blank">Source Code</a>
		</article>
		<p v-else>Category not found</p>
	</main>
</template>
