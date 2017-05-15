var html = require('choo/html')

function view (state, emit) {
  return html`
    <div class="mb4">
      <a href="/" class="f4 i fw2 link hover-blue no-underline black dib pv1 pr3 pointer">home</a>
      <a href="/manifesto" class="f4 i fw2 link hover-blue no-underline black dib pv1 pointer">manifesto</a>
    </div>
  `
}

module.exports = view
