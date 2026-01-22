<script setup>
import { ref, onMounted } from "vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import Spinner from "./Spinner.vue";
import Parser from "./js/parser.js";
import { store } from "./js/store.js";

const loading = ref(false);

async function main() {
	loading.value = true;

	await new Promise(requestAnimationFrame);
	await new Promise((resolve) => setTimeout(resolve, 0));

	const parser = new Parser();
	store.setParsedData(await parser.parse());

	loading.value = false;
}

onMounted(() => {
	if (!store.parsedData) {
		main();
	}
});
</script>

<template>
	<Navbar />
	<router-view v-if="!loading || store.parsedData"></router-view>
	<Spinner v-else :model-value="loading" />
	<Footer />
</template>

<style>
@import "./css/colors.css";

body {
	/* make space for navbar */
	padding-top: 6rem;
	font-family: system-ui, sans-serif;
	margin: 0;
	background: var(--background);
	color: var(--text);
	display: flex;
	min-height: calc(100vh - 6rem);
}

#app {
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
}

a {
	color: var(--secondary);
	transition: color 0.3s ease;
}

a:hover {
	color: var(--accent);
}
</style>
