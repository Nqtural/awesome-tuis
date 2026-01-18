<script setup>
import { store } from "./js/store.js";
import { slugify } from "./js/utils.js";
</script>

<template>
	<header>
		<h1>Awesome TUIs</h1>
	</header>
	<main>
		<ul>
			<li v-for="category in store.parsedData?.categories || []" :key="category.title">
				<router-link :to="`/awesome-tuis/category/${slugify(category.title)}`">{{ category.title }}</router-link>
			</li>
		</ul>
	</main>
</template>
