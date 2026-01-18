export function slugify(str) {
	return str
		.toLowerCase()
		.trim()
		.replace(/[\/\\]+/g, '-')
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]/g, '');
}
