import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";
import About from "../About.vue";
import CategoryView from "../CategoryView.vue";

const routes = [
	{ path: "/awesome-tuis/", component: Home },
	{ path: "/awesome-tuis/about", component: About },
	{ path: "/awesome-tuis/category/:categoryTitle", component: CategoryView, props: true }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
