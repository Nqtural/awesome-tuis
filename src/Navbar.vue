<template>
	<nav>
		<input id="menu-toggle" type="checkbox" />
		<label for="menu-toggle" class="menu-icon">
			<span></span>
			<span></span>
			<span></span>
		</label>
		<div class="links-wrapper">
			<span>Navigation</span>
			<ul>
				<li>
					<a href="/awesome-tuis/">Home</a>
				</li>
				<li>
					<a href="/awesome-tuis/about">About</a>
				</li>
				<li>
					<a href="/awesome-tuis/submit">Submit</a>
				</li>
			</ul>
		</div>
		<a class="brand" href="/awesome-tuis/">Awesome TUIs</a>
	</nav>
</template>

<style scoped>
@import "./css/colors.css";

nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1em;
	background: var(--background);
	border-bottom: 1px solid var(--primary);
	height: 6rem;
	font-family: "SauceCodePro NF", monospace;
	position: absolute;
	width: 100vw;
	top: 0;
	left: 0;
	box-sizing: border-box;
	z-index: 1;
}

.links-wrapper span {
	display: none;
}

#menu-toggle {
	display: none;
}

.menu-icon {
	display: none;
	flex-direction: column;
	justify-content: space-between;
	width: 2rem;
	height: 1.5rem;
	cursor: pointer;
	padding: 0.5rem;
	z-index: 10;
}

.menu-icon span {
	display: block;
	height: 3px;
	width: 100%;
	background: var(--text);
	border-radius: 2px;
	transition: all 0.3s ease;
}

#menu-toggle:checked + .menu-icon span:nth-child(1) {
	transform: rotate(45deg) translate(0.464em, 0.464em);
}

#menu-toggle:checked + .menu-icon span:nth-child(2) {
	opacity: 0;
}

#menu-toggle:checked + .menu-icon span:nth-child(3) {
	transform: rotate(-45deg) translate(0.464em, -0.464em);
}

ul {
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
	height: 100%;
}

a {
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	display: grid;
	place-items: center;
	white-space: nowrap;
}

li a {
	color: var(--text);
	position: relative;
	font-size: 1em;
}

li a::after {
	content: "";
	position: absolute;
	background: var(--accent);
	width: 1ch;
	height: 1px;
	right: calc(1rem - 1ch);
	/* center - half font size + item height*/
	bottom: calc(50% - (1em / 2) + 1px);
	visibility: hidden;
}

li a:hover {
	color: var(--accent);
}

li a:hover::after {
	visibility: visible;
	animation: blink 0.5s steps(1, end) infinite;
}

@keyframes blink {
	0%, 49% {
		opacity: 1;
	}
	50%, 100% {
		opacity: 0;
	}
}

.brand {
	font-size: 1.5em;
	color: var(--primary)
}

@media (max-width: 40rem) {
	nav {
		position: fixed;
	}

	.menu-icon {
		display: flex;
	}

	.links-wrapper {
		position: absolute;
		top: 6rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		opacity: 0;
		pointer-events: none;
		height: calc(100vh - 6rem);
		width: 100vw;
		left: 0;
		background: #000000a5;
		transition: opacity 0.3s ease;
	}

	#menu-toggle:checked ~ .links-wrapper {
		opacity: 1;
		pointer-events: all;
	}

	.links-wrapper span {
		display: block;
		font-weight: bold;
		font-size: 2.2em;
	}

	ul {
		width: fit-content;
		height: auto;
		flex-direction: column;
		gap: 0.5rem;
	}

	li a {
		width: fit-content;
		font-size: 1.8em;
	}
}
</style>
