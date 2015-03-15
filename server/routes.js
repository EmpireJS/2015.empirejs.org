module.exports = (server) => {

  /*server.get('/about', (req, res) => {

    res.render('about', {layout: 'layouts/main'})

  })

  server.get('/contact', (req, res) => {

    res.render('contact', {layout: 'layouts/main'})

  })*/

  server.get('/scholarship', (req, res) => {

    res.render('scholarship', {layout: 'layouts/main'})

  })

  /*server.get('/speakers', (req, res) => {

    res.render('speakers', {layout: 'layouts/main'})

  })*/

  server.get('/', (req, res) => {

    res.render('index', {layout: 'layouts/main'})

  })

}
