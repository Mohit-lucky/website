var html = require('choo/html')
var repos = require('./repos')
var layout = require('./layout')

function view (state, emit) {
  return layout(state, emit, function () {
    return html`
      <div>
        <p class="measure lh-copy">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

        <h1 class="f3 mb0">Repositories</h1>
        ${repos(state, emit)}
      </div>
    `
  })
}

module.exports = view
