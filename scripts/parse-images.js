import fs from "fs"
import path from "path"

const assetsDir = "public/assets"
const outputFile = "src/data/programImages.json"

const result = {}

const programs = fs.readdirSync(assetsDir)

for (const program of programs) {
	const programPath = path.join(assetsDir, program)

	if (!fs.statSync(programPath).isDirectory()) continue

	const files = fs.readdirSync(programPath)
		.filter(f => /\.(png|gif|jpg|webp)$/i.test(f))

	result[program] = files
}

fs.writeFileSync(outputFile, JSON.stringify(result, null, 2))

console.log("Generated image manifest")
