import manifest from "@/data/programImages.json"

const base = import.meta.env.BASE_URL

export function getProgramImages(program) {
	if (!manifest[program]) return []

	return manifest[program].map(
		file => `${base}assets/${program}/${file}`
	)
}
