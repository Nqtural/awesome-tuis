export default class Renderer {
	display(data) {
		console.log(data);
		const main = document.querySelector("main");

		data.categories.forEach(category => {
			main.insertAdjacentHTML(
				"afterbegin",
				`
				<article>
					<h2>${category.title}</h2>
				</article>
				`,
			);
		});
	}
}
