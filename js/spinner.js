export default class Spinner {
	constructor() {
		document.querySelector("body").insertAdjacentHTML(
			"beforeend",
			`
			<div id="spinner">
				<div></div>
			</div>
			`,
		);
		this.element = document.getElementById("spinner");
	}

	show() {
		this.element.style.opacity = 1;
	}

	hide() {
		this.element.style.opacity = 0;
	}
}
