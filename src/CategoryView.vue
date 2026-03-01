<script setup>
import { ref, computed } from "vue";
import { store } from "./js/store.js";
import { slugify } from "./js/utils.js";
import { useRoute } from "vue-router";
import CategoryItem from "./Item.vue";
import ItemInfo from "./ItemInfo.vue";
import Sidebar from "./Sidebar.vue";

const route = useRoute();

const selectedItem = ref(null);
const showPopup = ref(false);

function openPopup(item) {
	selectedItem.value = item;
	showPopup.value = true;
}

function closePopup() {
	showPopup.value = false;
	selectedItem.value = null;
}

const category = computed(() => {
	const titleParam = route.params.categoryTitle;
	return store.parsedData?.categories.find(
		c => slugify(c.title) === titleParam
	);
});
</script>

<template>
	<header>
		<h1>{{ category.title }}</h1>
	</header>
	<div class="content-wrapper">
		<main>
			<template v-if="category">
				<CategoryItem
					v-for="item in category.items"
					:key="item.name"
					:item="item"
					@select="openPopup"
					/>
			</template>
			<p v-else>Category not found</p>
		</main>
		<div class="sidebar-wrapper">
			<Sidebar />
		</div>
	</div>
	<ItemInfo
			v-if="showPopup && selectedItem"
			:item="selectedItem"
			@close="closePopup"
			/>
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
}

main {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	height: fit-content;
	gap: 3rem;
	flex: 4;
}

.sidebar-wrapper {
	display: flex;
	jusify-content: center;
	flex: 1;
}

@media (max-width: 40rem) {
	/* show in navbar menu instead */
	.sidebar-wrapper {
		display: none;
	}
}
</style>
