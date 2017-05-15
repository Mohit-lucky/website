var html = require('choo/html')

function layout (view) {
  return html`
    <body>
      <div class="ph3 ph5-ns sans-serif">
        <img src="/assets/logo.png" class="v-mid" width=75 />
        <h1 class="f1 dib v-mid pl3">fruitful.js</h1>

        ${view()}
      </div>
    </body>
  `
}

module.exports = layout
