<script setup>
import Sidebar from "./Sidebar.vue";
</script>

<template>
	<header>
		<h1>Awesome TUIs</h1>
	</header>
	<div class="content-wrapper">
		<main>
			<iframe
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/_fLmA4fjiAE"
					frameborder="0"
					allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
					>
			</iframe>
		</main>
		<div class="sidebar-wrapper">
			<Sidebar />
		</div>
	</div>
</template>

<style scoped>
h1 {
	text-align: center;
}

.content-wrapper {
	display: flex;
	justify-content: center;
	align-self: center;
	gap: 2rem;
	padding: 2rem;
	box-sizing: border-box;
	width: 100%;
}

main {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	height: fit-content;
	gap: 3rem;
	flex: 4;
}

iframe {
	height: 65%;
	width: 65%;
	aspect-ratio: 16 / 9;
}

.sidebar-wrapper {
	display: flex;
	jusify-content: center;
	flex: 1;
}
</style>
