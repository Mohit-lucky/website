var html = require('choo/html')
var repos = require('./repos')

function view (state, emit) {
  return html`
    <body>
      <div class="ph3 ph5-ns sans-serif">
        <img src="/assets/logo.png" class="v-mid" width=75 />
        <h1 class="f1 dib v-mid pl3">fruitful.js</h1>

        <p class="measure lh-copy">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

        <h1 class="f3 mb0">Repositories</h1>
        ${repos(state, emit)}
      </div>
    </body>
  `
}

module.exports = view
