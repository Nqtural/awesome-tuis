import Spinner from "./spinner.js";
import Parser from "./parser.js";
import Renderer from "./renderer.js";

async function main() {
	const spinner = new Spinner();
	const parser = new Parser();
	const renderer = new Renderer();

	// make sure spinner element has had a chance to render
	await new Promise(requestAnimationFrame);
	spinner.show();

	// defer parse so spinner has a chance to render
	await new Promise((resolve) => setTimeout(resolve, 0));

	const data = await parser.parse();
	renderer.display(data);

	spinner.hide();
}

window.addEventListener("load", () => {
	main();
});
