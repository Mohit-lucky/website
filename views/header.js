var html = require('choo/html')

function view (state, emit) {
  return html`
    <div class="mb4">
      <a href="/" class="f4 i fw2 link hover-blue no-underline black dib pv1 pr3 pointer outline-0">home</a>
      <a href="/#conduct" class="f4 i fw2 link hover-blue no-underline black dib pv1 pointer outline-0">conduct</a>
    </div>
  `
}

module.exports = view
