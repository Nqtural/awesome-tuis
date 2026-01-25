<script setup>
import { store } from "./js/store.js";
import { slugify } from "./js/utils.js";
</script>

<template>
	<aside>
		<span>Categories</span>
		<ul>
			<li v-for="category in store.parsedData?.categories || []" :key="category.title">
				<router-link :to="`/awesome-tuis/category/${slugify(category.title)}`">{{ category.title }}</router-link>
			</li>
		</ul>
	</aside>
</template>

<style scoped>
aside {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	padding: 1rem;
	height: fit-content;
	width: fit-content;
	border-left: 1px solid rgb(from var(--primary) r g b / 0.4);
}

span {
	font-size: 1.2em;
	font-weight: bold;
	text-decoration: underline;
	text-decoration-color: var(--accent);
}

ul {
	width: fit-content;
	list-style: none;
	padding: 0;
	margin: 0;
}

a {
	white-space: nowrap;
	display: block;
	padding: 0.25rem;
}

a::before {
	content: ">";
	display: inline-block;
	margin-right: 0.5ch;
	opacity: 0;
	transition: opacity 0.3s ease;
}

a:hover::before {
	opacity: 1;
}
</style>
