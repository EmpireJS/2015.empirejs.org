module.exports = (Handlebars) => {

  Handlebars.registerHelper('organizer', (name, title, img, twitterHandle) => {

    var template = require('../partials/organizer')

    return template({
      img,
      name,
      title,
      twitterHandle
    })

  })

}
