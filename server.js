var union    = require('union'),
    ecstatic = require('ecstatic');

var is2015 = /2015\./;

//
// ### redirect(res)
// World's simplest redirect function
//
function redirect(res) {
  var url  = 'http://2015.empirejs.org',
      body = '<p>301. Redirecting to <a href="' + url + '">' + url + '</a></p>';

  res.writeHead(301, { 'content-type': 'text/html', location: url });
  res.end(body);
}

var server = union.createServer({
  before: [
    function (req, res) {
      var host = req.headers.host;
      if (process.env.NODE_ENV === 'production' && !is2015.test(host)) {
        return redirect(res);
      }

      res.emit('next');
    },
    ecstatic({
      root: __dirname + '/public',
      defaultExt: 'html'
    }),
    function (req, res) {
      console.log('404 redirect: %s', req.url);
      return redirect(res);
    }
  ]
});

server.listen(8080);
