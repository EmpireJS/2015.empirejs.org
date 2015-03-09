class Component {

  constructor(options = {}) {

    if(!options.$) {
      throw new Error('options.$ must be defined.')
      return
    }

    if(!options.el) {
      throw new Error('options.el must be defined.')
      return
    }

    this.$ = options.$
    this.$el = this.$(options.el)

  }

}

try { module.exports = Component } catch(e) { Flexstrap.Component = Component }
