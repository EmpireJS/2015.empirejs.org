module.exports = (Handlebars) => {

  Handlebars.registerHelper('emcee', (name, img, twitterHandle) => {

    var template = require('../partials/emcee')

    return template({
      img,
      name,
      twitterHandle
    })

  })

}
