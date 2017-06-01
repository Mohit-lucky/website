var html = require('choo/html')
var layout = require('./layout')

function view (state, emit) {
  return layout(state, emit, function () {
    document.title = 'Conduct - fruitful'

    return html`
      <div class="mt3">
        <h2>Information regarding Conduct</h2>

        <p class="measure lh-copy">
          fruitful adheres to the WeAllJS Code of Conduct, a copy of which can
          bee found in this website's
          <a class="link dark-blue" href="https://github.com/fruitfuljs/website/blob/master/CODE_OF_CONDUCT.md">GitHub repository</a>.
          This Code of Conduct is in effect anywhere across the GitHub
          organization and other public and private spaces associated with
          Fruitful. By entrusting your project to fruitful, you agree with
          our Code of Conduct.
        </p>
        <p class="measure lh-copy">
          We take enforcement very seriously. If anything ever happens that
          might violate the Code of Conduct, feel free to contact any of us.
        </p>
        <p class="measure lh-copy">
          To contact the organization administrators, you should send an email
          to <a href="mailto:coc@fruitfuljs.org" class="link dark-blue">coc@fruitfuljs.org</a>.
          This is the recommended method, however you may also contact one of the
          administrators in private if possible.
        </p>
      </div>
    `
  })
}

module.exports = view
