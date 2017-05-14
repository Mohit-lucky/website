var html = require('choo/html')

function view (state, emit) {
  if (state.reposLoading) {
    return html`
      <div class="loading dots" onload=${onload}></div>
    `
  }

  return html`
    <ul class="list pv1 ph0">
      ${state.repos.map(function (repo) {
        return html`
          <li class="db mr2">
            <a href="" class="f6 f5-ns b dib pa2 link dim mid-gray">${repo.name}</a>
            <p class="f7 i dib">${repo.description}</p>
          </li>
        `
      })}
    </ul>
  `

  function onload () {
    emit('loadRepos')
  }
}

module.exports = view
