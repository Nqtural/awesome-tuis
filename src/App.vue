<script setup>
import { ref, onMounted } from "vue";
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
</template>

<style>
@import "./css/colors.css";

body {
	font-family: system-ui, sans-serif;
	margin: 0;
	background: var(--background);
	color: var(--text);
}
</style>
