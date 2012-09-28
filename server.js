var taco = require('tako')
  , request = require('request')
  , path = require('path')
  , filed = require('filed')
  , app = taco()

var tileset = 'toner-background'

// getImageData has separate same origin policy,
// proxy for pixel manipulation:

app.route('/' + tileset + '/*', function (req, resp) {
  request("http://tile.stamen.com"+req.url).pipe(resp)
})

app.route('/').files(path.join(__dirname, 'index.html'));

app.route('/lib/*').files(path.join(__dirname, 'lib'));
app.route('/style/*').files(path.join(__dirname, 'style'));

app.route('/devtiles/*').files(path.join(__dirname, 'localtilecache'));

app.httpServer.listen(8002)
