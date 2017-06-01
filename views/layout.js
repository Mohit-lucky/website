var html = require('choo/html')
var header = require('./header')

function layout (state, emit, view) {
  return html`
    <body>
      <div class="ph3 ph5-ns sans-serif">
        <img src="/assets/logo.png" alt="fruitful logo (a tomato)" class="v-mid" width=75 />
        <h1 class="f1 dib v-mid pl3">fruitful</h1>
        ${header(state, emit)}

        ${view()}

        <footer class="pv3 mid-gray f6">
          You can improve this website on <a href="https://github.com/fruitfuljs/website" class="link dark-blue">GitHub</a>.
          Built with <a href="http://choo.io" class="link dark-blue">choo</a> and love.
        </footer>
      </div>
    </body>
  `
}

module.exports = layout
