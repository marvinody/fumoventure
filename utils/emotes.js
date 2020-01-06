const emotes = {
  // this works in theory but for some reason, the img tag doesn't load the discord url images
  // not sure if discord is blocking me or some weird setting I enabled on my browser
  // cheap fix for this is to download the emotes and host them locally which may be better in the end.
  // a spritesheet is also a thing but I don't want that since that's a lot of work rn
  Aleece: "https://cdn.discordapp.com/emojis/349558986128883712.png",
}

// used to prevent logging multiple emotes several times
const nonexistentEmotes = {}

const emoteRegexp = /:(.*?):/g

module.exports = s => {
  if (typeof s !== "string") return s

  return s.replace(emoteRegexp, (orig, emote) => {
    if (!emotes[emote]) {
      if (!nonexistentEmotes[emote]) {
        nonexistentEmotes[emote] = true
        console.log(`${orig} not found in emote list, skipping`)
      }
      return orig
    }
    return `<img src='${emotes[emote]}' class='emote'/>`
  })
}
