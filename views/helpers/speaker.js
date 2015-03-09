module.exports = (Handlebars) => {

  Handlebars.registerHelper('speaker', (name, title, img, twitterHandle) => {

    var template = require('../partials/speaker')

    return template({
      img,
      name,
      title,
      twitterHandle
    })

  })

}
