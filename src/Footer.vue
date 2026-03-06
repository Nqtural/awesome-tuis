<template>
	<footer>
		<ul>
			<li>© 2026 The Awesome TUIs Contributors</li>
			<li>Source code on <a href="https://github.com/rothgar/awesome-tuis">Github</a></li>
		</ul>
	</footer>
</template>

<style scoped>
footer {
	margin-top: auto;
	bottom: 0;
	display: grid;
	place-items: center;
	height: 10rem;
	background: var(--background-secondary);
	width: 100vw;
}

ul {
	padding: 0;
	margin: 0;
	display: flex;
	gap: 0;
}

li {
	list-style: none;
	color: var(--secondary);
	text-align: center;
}

li + li::before {
	content: "·";
	margin: 0 2rem;
}

@media (max-width: 40rem) {
	ul {
		flex-direction: column;
		gap: 1rem;
	}

	li::before {
		display: none;
	}
}
</style>
