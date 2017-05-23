var html = require('choo/html')
var layout = require('./layout')

function view (state, emit) {
  return layout(state, emit, function () {
    document.title = 'Conduct - Fruitful'

    return html`
      <div class="mt3">
        <p class="measure lh-copy">
          Fruitful adheres to the WeAllJS Code of Conduct, a copy of which can
          be found in this website's
          <a class="link blue" href="https://github.com/fruitfuljs/website/blob/master/CODE_OF_CONDUCT.md">GitHub repository</a>.
          This Code of Conduct is in effect anywhere across the GitHub
          organization and other public and private spaces associated with
          Fruitful. By entrusting your project to Fruitful, you agree with
          our Code of Conduct.
        </p>
        <p class="measure lh-copy">
          We take enforcement very seriously. If anything ever happens that
          might violate the Code of Conduct, feel free to contact any of us.
        </p>
      </div>
    `
  })
}

module.exports = view
