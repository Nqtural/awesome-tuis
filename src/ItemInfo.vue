<script setup>
import { ref, onMounted } from "vue";
import { getProgramImages } from "./js/load-image.js";

const props = defineProps({ item: Object });
const emit = defineEmits(["close"]);

const images = ref([]);

onMounted(async () => {
	images.value = getProgramImages(props.item.name);
});

function close() {
	emit("close");
}
</script>

<template>
	<div class="overlay" @click.self="close">
		<div class="popup">
			<button class="close-btn" @click="close">×</button>

			<h2>{{ item.name }}</h2>
			<a :href="item.link" target="_blank" rel="noopener">Source Code</a>
			<p>{{ item.description }}</p>

			<h3>Previews</h3>
			<div class="image-gallery">
				<template v-if="images.length > 0">
					<img
							v-for="(src, index) in images"
							:key="index"
							:src="src"
							:alt="`Preview of ${item.name} #${index+1}`"
							/>
				</template>
				<template v-else>
					<p class="smiley">:(</p>
					<p>No images were found for this TUI.</p>
				</template>
			</div>
		</div>
	</div>
</template>

<style scoped>
.overlay {
	width: 100vw;
	height: 100vh;
	background: var(--backdrop);
	position: fixed;
	display: grid;
	place-items: center;
	top: 0;
}

.popup {
	background: var(--background-secondary);
	width: min(calc(100% - 4rem), 50rem);
	height: min(calc(100% - 6rem - 2rem), 35rem);
	position: relative;
	overflow: hidden;
	border-radius: 1rem;
	padding: 1rem;
	overflow-y: auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.close-btn {
	color: var(--text);
	position: absolute;
	top: 1rem;
	right: 1rem;
	background: none;
	border: none;
	border-radius: 6px;
	background: var(--background);
	padding: 5px;
	height: calc(1ch + 10px);
	width: calc(1ch + 10px);
	font-size: 2rem;
	line-height: 0px;
	cursor: pointer;
}

h2 {
	margin-bottom: 0.5rem;
}

h3 {
	margin-top: 2rem;
}

p {
	margin: 2rem 0;
}

.image-gallery {
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.image-gallery p {
	margin: auto;
}

.smiley {
	font-size: 5rem;
}
</style>
