var choo = require('choo')
var css = require('sheetify')

var indexView = require('./views/index')
var conductView = require('./views/conduct')
var store = require('./store')

var app = choo()

css('tachyons')
css('text-spinners')

app.route('/', indexView)
app.route('/conduct', conductView)
app.use(store)
app.mount('body')
