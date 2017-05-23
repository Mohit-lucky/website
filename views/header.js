var html = require('choo/html')

function view (state, emit) {
  return html`
    <div>
      <a href="/" class="f3 fw6 link hover-blue no-underline black dib pv1 mr3 pointer outline-0">home</a>
      <a href="/#conduct" class="f3 fw6 link hover-blue no-underline black dib pv1 mr3 pointer outline-0">conduct</a>
      <a href="/#docs" class="f3 fw6 link hover-blue no-underline black dib pv1 pointer outline-0">docs</a>
    </div>
  `
}

module.exports = view
