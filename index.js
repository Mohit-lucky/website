var choo = require('choo')
var html = require('choo/html')
var css = require('sheetify')
var GitHub = require('github-api')

var app = choo()
var gh = new GitHub()

css('tachyons')
css('text-spinners')

function renderRepositories (state, emit) {
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

function repoStore (state, emitter) {
  state.repos = []
  state.reposLoading = true
  emitter.on('loadRepos', function () {
    var org = gh.getOrganization('fruitfuljs')
    org.getRepos().then(function (repos) {
      state.repos = repos.data
      state.reposLoading = false
      emitter.emit('render')
    })
  })
}

function main (state, emit) {
  return html`
    <body>
      <div class="ph3 ph5-ns sans-serif">
        <img src="https://cdn.glitch.com/4b38f914-ed30-47a5-9476-1444ff542c52%2Flogo.png?1494707716957" class="v-mid" width=75 />
        <h1 class="f1 dib v-mid pl3">fruitful.js</h1>

        <p class="measure lh-copy">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

        <h1 class="f3 mb0">Repositories</h1>
        ${renderRepositories(state, emit)}
      </div>
    </body>
  `
}

app.route('/', main)
app.use(repoStore)
app.mount('body')
