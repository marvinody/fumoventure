const page = ({ person, nav, posts }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link media="all" rel="stylesheet" href="/style.css" />
      <meta
        name="twitter:image:src"
        content="https://fumoventure.sadpanda.moe/images/alice_t.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Fumoventure" />
      <meta
        name="twitter:description"
        content="The story of a plush traveling around the planet"
      />
      <meta property="og:image" content="/images/alice.png" />
      <meta property="og:site_name" content="Fumoventure" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Fumoventure" />
      <meta
        property="og:url"
        content="https://fumoventure.sadpanda.moe/"
      />
      <meta
        property="og:description"
        content="The story of a plush traveling around the planet"
      />
      <title>${person.name} | Fumoventure</title>
    </head>
    <body>
      <a href="/" class="title">
        <h1>Fumoventure</h1>
      </a>
      <h2 class="center">${person.name} (${person.location})</h2>

      <div class="container log">
      ${nav}
      ${posts}
      ${nav}
      </div>
      </body>
    </html>
    `
}

const message = msg => {
  return `<p>${msg}</p>`
}

const divider = () => {
  return `<hr />`
}

const regularImage = ({ image, thumb, alt }) => {
  return `
  <a href="${image}">
    <img
      src="${thumb}"
      alt="${alt}"
    />
  </a>
  `
}

const captionedImage = ({ image, thumb, alt }) => {
  return `
  <figure>
    ${regularImage({ image, thumb, alt })}
    <figcaption>
      ${alt}
    </figcaption>
  </figure>`
}

const nav = ({ prev, next }) => {
  return `
  <div class="nav">
    ${prev && `<a href="${prev.link}" class="prev">${prev.text}</a>`}
    ${next && `<a href="${next.link}" class="next">${next.text}</a>`}
  </div>
  `
}

const index = ({ year, people }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link media="all" rel="stylesheet" href="/style.css" />
      <meta
        name="twitter:image:src"
        content="https://fumoventure.sadpanda.moe/images/alice_t.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Fumoventure" />
      <meta
        name="twitter:description"
        content="The story of a plush traveling around the planet"
      />
      <meta property="og:image" content="/images/alice.png" />
      <meta property="og:site_name" content="Fumoventure" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Fumoventure" />
      <meta
        property="og:url"
        content="https://fumoventure.sadpanda.moe/"
      />
      <meta
        property="og:description"
        content="The story of a plush traveling around the planet"
      />
      <title>Fumoventure ${year}</title>
    </head>
    <body>
      <a href="/" class="title">
        <h1>Fumoventure</h1>
      </a>

      <div class="container">
        <h2>What is this?</h2>
        <p>This is the story of a plush called Alice (from a game called Touhou Project) traveling around the US.</p>
        <p> The purpose of this site is to document her travels outside of the discord server it took place in and to have all the pictures available for anyone</p>
        <p>Enjoy</p>

        <h2 class="">Participants (chronological order)</h2>
        <ul>
          ${people.map(p => `<li><a href='${p.url}'>${p.name}</a></li>`).join('\n')}
        </ul>
      </div>
      </body>
    </html>
    `
}

module.exports = {
  message,
  image: regularImage,
  captionedImage,
  page,
  nav,
  divider,
  index,
}
