/* eslint-disable camelcase */
const emotes = {
  // this works in theory but for some reason, the img tag doesn't load the discord url images
  // not sure if discord is blocking me or some weird setting I enabled on my browser
  // cheap fix for this is to download the emotes and host them locally which may be better in the end.
  // a spritesheet is also a thing but I don't want that since that's a lot of work rn
  Aleece: 'https://cdn.discordapp.com/emojis/349558986128883712.png',
  Circry: 'https://cdn.discordapp.com/emojis/471481822325374986.png?v=1',
  CirnoBounce: 'https://cdn.discordapp.com/emojis/614525912867799201.gif?v=1',
  HeadPatchouli: 'https://cdn.discordapp.com/emojis/541022344483700767.gif?v=1',
  SanaeBap: 'https://cdn.discordapp.com/emojis/528758624701644830.gif?v=1',
  aliceW: 'https://cdn.discordapp.com/emojis/499994381596753935.png?v=1',
  alice_crisis: 'https://cdn.discordapp.com/emojis/581329589087895573.gif?v=1',
  alicesmile: 'https://cdn.discordapp.com/emojis/499990098578767882.png?v=1',
  blossom: 'https://discordapp.com/assets/cf977724a615ddf7aa9610c50a577536.svg',
  cactus: 'https://discordapp.com/assets/c22a2def17c0dfb9d4ba44dbc54f4062.svg',
  cherry_blossom: 'https://discordapp.com/assets/764836c1d982d6a999ef5ee6ab11eb87.svg',
  china: 'https://cdn.discordapp.com/emojis/462091161742344193.png?v=1',
  cirnu: 'https://cdn.discordapp.com/emojis/309334378008412171.png?v=1',
  cold_sweat: 'https://discordapp.com/assets/b6e59899d18889c76321b4cb546b30b9.svg',
  confetti_ball: 'https://discordapp.com/assets/9d23479dd0484c082194cf5a316adf08.svg',
  congratulatory_potato: 'https://cdn.discordapp.com/emojis/591719173848039457.gif?v=1',
  curry: 'https://discordapp.com/assets/d541826138980a5f4381317c342137f2.svg',
  fish: 'https://discordapp.com/assets/720806c4ff4375a2f36674e8aeeb1906.svg',
  hamburger: 'https://discordapp.com/assets/3a2a5ebb52c26a470f87b1eb42c0da92.svg',
  headpats: 'https://cdn.discordapp.com/emojis/409211178871685134.gif?v=1',
  hiking_boot: 'https://discordapp.com/assets/48eee58d8732624417222c0ae7e360b3.svg',
  ice_cream: 'https://discordapp.com/assets/52bfdf64e0f7355d16780ff7187f9a1a.svg',
  iji: 'https://cdn.discordapp.com/emojis/606686995632226305.gif?v=1',
  koishee: 'https://cdn.discordapp.com/emojis/351758625284292608.png?v=1',
  kokoro: 'https://cdn.discordapp.com/emojis/324272626467995648.png?v=1',
  kokoro_dab: 'https://cdn.discordapp.com/emojis/603316876088705044.png?v=1',
  meiling_tuck: 'https://cdn.discordapp.com/emojis/513166125547388929.gif?v=1',
  mom: 'https://cdn.discordapp.com/emojis/606686996827471882.gif?v=1',
  pie: 'https://discordapp.com/assets/98956724fc3f86e605dcf272a05b4a1e.svg',
  regional_indicator_a: 'https://discordapp.com/assets/bbe8ae762f831966587a35010ed46f67.svg',
  regional_indicator_b: 'https://discordapp.com/assets/515873f6898e0b26daf51921c65a43f7.svg',
  regional_indicator_h: 'https://discordapp.com/assets/558d3608d282c924baac1499b7ccfe14.svg',
  regional_indicator_o: 'https://discordapp.com/assets/89bba1c5173777ba0a352d7ac585a647.svg',
  regional_indicator_u: 'https://discordapp.com/assets/9efe2dc7b0a590b54482c0ef75c752ca.svg',
  regional_indicator_y: 'https://discordapp.com/assets/2d24eb6ab8545bd17e66af014500f1ed.svg',
  reimu: 'https://cdn.discordapp.com/emojis/537059497923969045.png?v=1',
  shion: 'https://cdn.discordapp.com/emojis/487728235908562954.png?v=1',
  shionflower: 'https://cdn.discordapp.com/emojis/546478621494083594.png?v=1',
  shoobstare: 'https://cdn.discordapp.com/emojis/596010646110208040.png?v=1',
  shushing_face: 'https://discordapp.com/assets/acb7b1a237378bbddd34927b4001b8f4.svg',
  spookytewi: 'https://cdn.discordapp.com/emojis/312108573872095232.png?v=1',
  stars: 'https://discordapp.com/assets/7c34233236b5365782a8b697d05144c3.svg',
  sushi: 'https://discordapp.com/assets/a3fdf36792c57acefbd11c5cf628a617.svg',
  suwakoEyes: 'https://cdn.discordapp.com/emojis/544831149655195648.png?v=1',
  tasukete_eirin: 'https://cdn.discordapp.com/emojis/593307959132553256.png?v=1',
  tea: 'https://discordapp.com/assets/d51a9baef36313665fad17c1e2609023.svg',
  telephone_receiver: 'https://discordapp.com/assets/f34c63197816c3e60bea4a9537c5fffa.svg',
  warning: 'https://discordapp.com/assets/289673858e06dfa2e0e3a7ee610c3a30.svg',
  whenlifegetsatalice: 'https://cdn.discordapp.com/emojis/570301607216939048.png?v=1',
  whenlifegetsatshion: 'https://cdn.discordapp.com/emojis/547616028113371144.png?v=1',
  youmu: 'https://cdn.discordapp.com/emojis/321718132773355521.png?v=1',
  yuyubounce: 'https://cdn.discordapp.com/emojis/543273848204689419.gif?v=1',
  yuyuhug: 'https://cdn.discordapp.com/emojis/591119135987990528.png?v=1',
  zzz: 'https://discordapp.com/assets/f341538d6092b98ba32c58ad45537267.svg'
}

// used in node shell to sort above object to make it easier to locate emotes
const sortObj = obj => {
  const keys = Object.keys(obj).sort()
  return keys.reduce((acc, key) => {
    acc[key] = obj[key]
    return acc
  }, {})
}

// used to prevent logging multiple emotes several times
const nonexistentEmotes = {}

const emoteRegexp = /:([^ ]+?):/g

module.exports = s => {
  if (typeof s !== 'string') return s
  // remove all the emotes and space. if nothing left, only emotes were in original
  const onlyEmotes = s.replace(emoteRegexp, '').trim().length === 0
  return s.replace(emoteRegexp, (orig, emote) => {
    if (!emotes[emote]) {
      if (!nonexistentEmotes[emote]) {
        nonexistentEmotes[emote] = true
        console.log(`${orig} not found in emote list, skipping`)
      }
      return orig
    }
    const emoteClass = `emote ${onlyEmotes ? 'jumboable' : ''}`
    const x = [`<img`,
      `alt=":${emote}:"`,
      `src="${emotes[emote]}"`,
      `class="${emoteClass}"`,
      `draggable="false"`,
      `/> `].join(' ')

    return x
  })
}
