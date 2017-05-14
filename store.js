var GitHub = require('github-api')
var gh = new GitHub()

function store (state, emitter) {
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

module.exports = store
