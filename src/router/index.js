import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";
import About from "../About.vue";
import CategoryView from "../CategoryView.vue";
import Submit from "../Submit.vue";

const routes = [
	{ path: "/", component: Home },
	{ path: "/about", component: About },
	{ path: "/category/:categoryTitle", component: CategoryView, props: true },
	{ path: "/submit", component: Submit },
];

const router = createRouter({
	history: createWebHistory("/awesome-tuis/"),
	routes
});

export default router;
