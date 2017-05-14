var choo = require('choo')
var html = require('choo/html')
var css = require('sheetify')
var GitHub = require('github-api')

var indexView = require('./views/index')
var store = require('./store')

var app = choo()
var gh = new GitHub()

css('tachyons')
css('text-spinners')

app.route('/', indexView)
app.use(store)
app.mount('body')
