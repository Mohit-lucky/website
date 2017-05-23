var choo = require('choo')
var css = require('sheetify')

var indexView = require('./views/index')
var conductView = require('./views/conduct')
var docsView = require('./views/docs')
var store = require('./store')

var app = choo()

css('tachyons')
css('text-spinners')

app.route('/', indexView)
app.route('/conduct', conductView)
app.route('/docs', docsView)
app.use(store)
app.mount('body')
