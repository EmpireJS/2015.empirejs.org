module.exports = (server) => {

  server.get('/', (req, res) => {
    res.render('index', {layout: 'layouts/main'})
  })

  server.get('/scholarship', (req, res) => {
    res.render('scholarship', {layout: 'layouts/main'})
  })

  server.get('/code-of-conduct', (req, res) => {
    res.redirect(301, 'https://github.com/empirejs/code-of-conduct');
  })

}
