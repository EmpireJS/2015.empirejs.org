module.exports = (Handlebars) => {

  Handlebars.registerHelper('organizer', (name, img, twitterHandle) => {

    var template = require('../partials/organizer')

    return template({
      img,
      name,
      twitterHandle
    })

  })

}
