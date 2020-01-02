const yaml = require("js-yaml")
const fs = require("fs")
const path = require("path")
const mkdirp = require("mkdirp")
const templates = require("./templates")
const join = path.join

const file = process.argv[2]
if (!file) {
  console.error("Expected file with stuff in it to be passed")
}

const filepath = path.join(process.cwd(), file)

// Get document, or throw exception on error
try {
  // load the file from args
  const doc = yaml.safeLoad(fs.readFileSync(filepath, "utf8"))

  // pull some general stuff for later
  const year = String(doc.year)
  // this is for filesystem
  const baseHTMLFolder = join(__dirname, year)
  // this is for web (so root is here)
  const baseImagesFolder = join(path.sep, "images")

  doc.list.forEach((person, idx, arr) => {
    // grab folder names now and pass them down
    const name = person.name.toLowerCase()
    const htmlFolder = join(baseHTMLFolder, name)
    const paddedIdx = String(idx).padStart(2, "0")
    const imageFolder = join(baseImagesFolder, year, `${paddedIdx}-${name}`)
    const thumbFolder = join(
      baseImagesFolder,
      "thumbs",
      year,
      `${paddedIdx}-${name}`
    )

    // make the html for each person now. this takes care of file formation also
    makePage({ person, htmlFolder, imageFolder, thumbFolder })
  })
} catch (e) {
  console.log(e)
}

// generate page for given person.
function makePage({ person, htmlFolder, imageFolder, thumbFolder }) {
  // where are we putting the final file
  const htmlFile = join(htmlFolder, "index.html")
  const entries = person.entries
  // for each entry, 'switch' on whatever it looks like
  const posts = entries
    .map(entry => {
      // had these as variables before but join yells if undefined args
      const getPics = () => [
        join(imageFolder, entry.pic),
        join(thumbFolder, entry.pic),
      ]

      if (entry.divider) {
        return templates.divider()
      } else if (entry.pic && entry.text) {
        const [image, thumb] = getPics()
        return templates.captionedImage({
          image,
          thumb,
          alt: entry.text,
        })
      } else if (entry.pic) {
        const [image, thumb] = getPics()
        return templates.image({ image, thumb })
      } else if (entry.text) {
        return templates.message(entry.text)
      }
    })
    .join("") // everything is a string in our template world

  // TODO fix nav later (raises interesting passing issues)
  const page = templates.page({ person, nav: "", posts })
  mkdirp.sync(htmlFolder)
  fs.writeFileSync(htmlFile, page)
}
