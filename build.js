const yaml = require("js-yaml")
const fs = require("fs")
const path = require("path")
const mkdirp = require("mkdirp")
const templates = require("./templates")
const join = path.join
const emotesMapper = require("./utils/emotes")
const markdownMapper = require("./utils/markdown")
const pipe = require("./utils/pipe")

// responsible for modifying text that the user will see
// emotes, markdown, and links should all be changed into some html
const textChanger = pipe(emotesMapper, markdownMapper)

// keep consistent urls from generally names
const urlify = s => s.toLowerCase().replace(/ /, "")

const loadYAML = filename => yaml.safeLoad(fs.readFileSync(filename, "utf8"))

let file = process.argv[2]
if (!file) {
  console.error("Expected file with stuff in it to be passed")
} else if (!file.startsWith("/")) {
  // is it a relative path? then do it with w/e dir it's executing in
  file = path.join(process.cwd(), file)
}

// Get document, or throw exception on error
try {
  // load the file from args
  const doc = loadYAML(file)

  // pull some general stuff for later
  const year = String(doc.year)
  // this is for filesystem
  const baseHTMLFolder = join(__dirname, year)
  // this is for web (so root is here)
  const baseImagesFolder = join(path.sep, "images")

  const personToURL = person => {
    if (person) {
      return {
        link: join(path.sep, year, urlify(person.name)),
        text: person.name,
      }
    }
    return ""
  }

  const loadPerson = thing => {
    // if it's not a string, don't bother processing it. should be good
    if (typeof thing !== "string") {
      return thing
    }
    // if a string is supplied, then it's a relative location
    // to the file. Let's go get it!
    // relative from the initial file tho, not any other dir
    const basePath = path.dirname(file)
    const relativePath = thing
    const personYAMLPath = join(basePath, relativePath)
    return loadYAML(personYAMLPath)
  }

  doc.list.forEach((possiblePerson, idx, arr) => {
    const person = loadPerson(possiblePerson)
    // grab folder names now and pass them down
    const name = urlify(person.name)
    const htmlFolder = join(baseHTMLFolder, name)
    const paddedIdx = String(idx).padStart(2, "0")
    const imageFolder = join(baseImagesFolder, year, `${paddedIdx}-${name}`)
    const thumbFolder = join(
      baseImagesFolder,
      "thumbs",
      year,
      `${paddedIdx}-${name}`
    )

    const prev = personToURL(loadPerson(arr[idx - 1]))
    const next = personToURL(loadPerson(arr[idx + 1]))

    // make the html for each person now. this takes care of file formation also
    makePage({ person, htmlFolder, imageFolder, thumbFolder, prev, next })
  })
} catch (e) {
  console.log(e)
}

// generate page for given person.
function makePage({
  person,
  htmlFolder,
  imageFolder,
  thumbFolder,
  next,
  prev,
}) {
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
        const changedText = textChanger(entry.text)
        return templates.captionedImage({
          image,
          thumb,
          alt: changedText,
        })
      } else if (entry.pic) {
        const [image, thumb] = getPics()
        return templates.image({ image, thumb })
      } else if (entry.text) {
        const changedText = textChanger(entry.text)
        return templates.message(changedText)
      }
    })
    .join("") // everything is a string in our template world

  const nav = templates.nav({ prev, next })
  const page = templates.page({ person, nav, posts })
  mkdirp.sync(htmlFolder)
  fs.writeFileSync(htmlFile, page)
}
