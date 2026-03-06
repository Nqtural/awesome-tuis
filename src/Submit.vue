<template>
	<main>
		<article>
			<h1>Submit</h1>
			<p>
			As this is an open source project, you yourself can contribute!
			</p>
			<h2>Adding a program</h2>
			<p>
			Do you know of a TUI program not found in the list? Feel free to
			<a href="https://github.com/rothgar/awesome-tuis/issues/new">open an issue</a> on
			Github!
			</p>
			<h2>Submitting an image</h2>
			<p>
			To submit an image for a TUI, start by
			<a href="https://github.com/rothgar/awesome-tuis/fork">forking the repository</a> on
			Github and cloning it locally. From there, create the image directory for the program
			if it does not already exist at <code>awesome-tuis/public/assets/&ltTUIName&gt/</code>
			where &ltTUIName&gt is case sensitive, and add images here. Supported formats are
			<code>.gif</code>, <code>.jpeg</code>, <code>.png</code> and <code>.webp</code>. The
			name of the file has to be the number in witch they are supposed to be loaded, starting
			at 0. For example:
			<!-- HTML sucks, this has to be indented this way to render correctly -->
			<pre>
awesome-tuis/
└ public/
  └ assets/
    └ TUIName/
      ├ 0.gif
      ├ 1.png
      └ 2.png
</pre>
			Now, commit and push your changes and head back to Github to open a pull request.
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
