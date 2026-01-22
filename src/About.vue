<template>
	<main>
		<article>
			<h1>About</h1>
			<h2>Awesome TUIs</h2>
			<p>
			<!-- TODO: dynamically parse from README.md -->
			This is a community maintained list of TUI applications. A TUI application runs in your
			terminal and has some level of interactivity. Commands included in this list should not
			wrap other interactive commands (e.g. fzf), and should be maintained.
			</p>
			<h2>The page</h2>
			<p>
			This page is a simple frontend for the Awesome TUIs project. Its purpose is to make the
			list easier to browse, search, and explore directly in the browser, while staying as
			close as possible to the original source of truth.
			</p>
			<p>
			All content shown here is parsed automatically from the project’s README.md file using
			regular expressions. This means the page does not curate or modify entries manually: any
			additions, removals, or updates come directly from changes in the upstream repository.
			</p>
			<p>
			Because the data is derived programmatically, the structure and accuracy of this page
			depend on the consistency of the README format. If something looks off or missing, it is
			likely an issue with parsing or with the source file itself.
			</p>
		</article>
	</main>
</template>

<style scoped>
main {
	margin: 1rem 0;
	align-self: center;
}

article {
	width: min(100vw - 2rem, 80ch);
}
</style>
