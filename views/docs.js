var html = require('choo/html')
var layout = require('./layout')

var pages = [
  {
    name: 'migrating',
    description: 'Information on how to, as a library maintainer, initiate the process of moving to Fruitful.'
  }
]

function view (state, emit) {
  return layout(state, emit, function () {
    return html`
      <ul class="list pl0">
        ${pages.map(function (page) {
          var link = 'https://github.com/fruitfuljs/fruitfuljs/blob/master/' + page.name.toUpperCase() + '.md'

          return html`
            <a href="${link}" class="no-underline link black hover-dark-blue">
              <li class="pv3 pa4-ns">
                <b class="db f3 mb1">${page.name}</b>
                <span class="f5 db lh-copy measure">${page.description}</span>
              </li>
            </a>
          `
        })}
      </ul>
    `
  })
}

module.exports = view
