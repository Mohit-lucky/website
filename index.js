var choo = require('choo')
var html = require('choo/html')
var css = require('sheetify')
var GitHub = require('github-api')

var indexView = require('./views/index')

var app = choo()
var gh = new GitHub()

css('tachyons')
css('text-spinners')

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

app.route('/', indexView)
app.use(repoStore)
app.mount('body')
