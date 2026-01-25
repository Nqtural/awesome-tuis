<script setup>
defineProps({
	item: {
		type: Object,
		required: true
	}
});
</script>

<template>
	<article>
		<h2>{{ item.name }}</h2>
		<p>{{ item.description }}</p>
		<a :href="item.link" target="_blank" rel="noopener">Source Code</a>
	</article>
</template>

<style scoped>
article {
	display: flex;
	gap: 1rem;
	flex-direction: column;
	background: var(--background-secondary);
	box-shadow: 0px 0px 10px 1px rgb(from var(--primary) r g b / 0.3);
	border-radius: 1rem;
	padding: 1rem;
	width: 20rem;
	height: 9rem;
	transition: transform 0.3s ease;
}

article:hover {
	box-shadow: 0px 0px 10px 2px rgb(from var(--primary) r g b / 0.3);
}

article:hover a {
	color: var(--secondary);
}

h2 {
	margin: 0;
	text-decoration: underline;
	text-decoration-color: var(--accent);
}

p {
	margin: 0;
	flex: 1;
	font-size: 0.85em;
	line-height: 1.2em;
	overflow-y: auto;
	position: relative;
	opacity: 0.8;
}

a {
	color: var(--text-subtile);
	font-size: 0.75em;
	width: fit-content;
	align-self: end;
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

article a:hover {
	color: var(--accent);
}
</style>
