const markdown = {
  "\\|\\|": "spoiler",
  "~~": "strikethrough",
}
const pipe = require("./pipe")

const markdownify = pipe(
  ...Object.entries(markdown).map(([text, className]) => {
    const pattern = `${text}(.+?)${text}`
    // map into a new function
    return arg => {
      // that takes 1 arg and replaces corresponding markdown in it
      return arg.replace(new RegExp(pattern), (match, inner) => {
        if (!match) {
          return match
        }
        return `<span class='${className}'>${inner}</span>`
      })
    }
  })
)

module.exports = s => {
  if (typeof s !== "string") return s
  return markdownify(s)
}
