<script setup>
import { ref, onMounted } from "vue";
import Navbar from "./Navbar.vue";
import Spinner from "./Spinner.vue";
import Parser from "./js/parser.js";

const loading = ref(false);
const parsedData = ref(null);

async function main() {
	loading.value = true;

	await new Promise(requestAnimationFrame);
	await new Promise((resolve) => setTimeout(resolve, 0));

	const parser = new Parser();
	parsedData.value = await parser.parse();

	loading.value = false;
}

onMounted(() => main());
</script>

<template>
	<Navbar />
	<header>
		<h1>Awesome TUIs</h1>
	</header>
	<main>
		<Spinner :model-value="loading" />

		<div v-if="!loading">
			<pre>{{ parsedData }}</pre>
		</div>
	</main>
	<footer></footer>
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
