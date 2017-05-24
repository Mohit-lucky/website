var html = require('choo/html')
var repos = require('./repos')
var layout = require('./layout')

function view (state, emit) {
  return layout(state, emit, function () {
    document.title = 'Fruitful'

    return html`
      <div class="mt3">
        <p class="measure lh-copy">
          Fruitful is a community of volunteers who are joining forces to
          maintain adopted or abandoned JavaScript packages. We strongly value
          collaboration when maintaining packages, and this is reflected in our
          work.
        </p>

        <p class="measure lh-copy">
          We are convinced that everything you put into your 
          <code>package.json</code>, <code>yarn.lock</code> or <code>bower.json</code>
          should have more than <i>one</i> maintainer. It should have some guarantees
          that tomorrow, or in a week it will still be there in equal or better
          quality. If you, at some point, decide to abandon maintenance for
          your project, we are going to ensure that it doesn't just die a slow death.
        </p>

        <p class="measure lh-copy">
          One of our fundamental principles is that everyone is welcome. We
          pride ourselves in being an inclusive project, and every contributor
          is invited into the organization.
        </p>

        <p>
          Sound interesting? Start by reading the
          <a href="/#docs" class="link dark-blue">docs</a>!
        </p>

        <h1 class="f3 mb0">Repositories</h1>
        ${repos(state, emit)}
      </div>
    `
  })
}

module.exports = view
