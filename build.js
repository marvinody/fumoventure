const yaml = require("js-yaml")
const fs = require("fs")
const path = require("path")
const join = path.join

const file = process.argv[2]
if (!file) {
  console.error("Expected file with stuff in it to be passed")
}

const filepath = path.join(process.cwd(), file)

// Get document, or throw exception on error
try {
  const doc = yaml.safeLoad(fs.readFileSync(filepath, "utf8"))
  const year = String(doc.year)
  const baseHTMLFolder = join(__dirname, year)
  const baseImagesFolder = join(__dirname, "images", year)
  doc.list.forEach((person, idx, arr) => {
    const name = person.name.toLowerCase()
    const htmlFolder = join(baseHTMLFolder, name)
    const paddedIdx = String(idx).padStart(2, "0")
    const imageFolder = join(baseHTMLFolder, `${paddedIdx}-${name}`)
    makePost({ person, htmlFolder, imageFolder })
  })
  console.log()
} catch (e) {
  console.log(e)
}

function makePost({ person, htmlFolder, imageFolder }) {
  console.log({ person, htmlFolder, imageFolder })
}
