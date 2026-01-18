
export default class Parser {
	constructor() {
		this.file_path = "/README.md";
	}

	async parse() {
		try {
			const response = await fetch(this.file_path);
			if (!response.ok) throw new Error('Network response was not ok');

			this.markdown_file = await response.text();
			this.toJSON();
			return this.json;
		} catch (error) {
			console.error('Error fetching README:', error);
		}
	}

	toJSON() {
		const categoryRegex = /<details.*?>\s*<summary><h2>(.*?)<\/h2><\/summary>([\s\S]*?)<\/details>/g;

		const categories = [];
		let categoryMatch;

		while ((categoryMatch = categoryRegex.exec(this.markdown_file)) !== null) {
			const title = categoryMatch[1].trim();
			const content = categoryMatch[2];

			// Match each item in the category
			const itemRegex = /- \[(.*?)\]\((.*?)\)\s*(.*)/g;
			const items = [];
			let itemMatch;

			while ((itemMatch = itemRegex.exec(content)) !== null) {
				items.push({
					name: itemMatch[1].trim(),
					link: itemMatch[2].trim(),
					description: itemMatch[3].trim()
				});
			}

			categories.push({
				title,
				items
			});
		}

		this.json = { categories };
	}
}
